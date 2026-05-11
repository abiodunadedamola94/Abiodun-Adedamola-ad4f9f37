import { useMemo, useRef, useState } from "react";
import { Plus, Minus, Download, Share2, Trash2, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

type LineItem = {
  id: string;
  title: string;
  description: string;
  price: number;
  qty: number;
};

const uid = () => Math.random().toString(36).slice(2, 9);

const formatMoney = (n: number, currency: string) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency || "USD",
    minimumFractionDigits: 2,
  }).format(isFinite(n) ? n : 0);

export default function InvoiceBuilder() {
  const previewRef = useRef<HTMLDivElement>(null);

  const [from, setFrom] = useState({
    name: "Abiodun Adedamola",
    email: "abiodunadedamola94@gmail.com",
    phone: "+234 000 000 0000",
    address: "Lagos, Nigeria",
  });

  const [client, setClient] = useState({
    name: "",
    address: "",
    phone: "",
  });

  const [meta, setMeta] = useState({
    invoiceNo: `INV-${new Date().getFullYear()}-${Math.floor(Math.random() * 9000 + 1000)}`,
    date: new Date().toISOString().slice(0, 10),
    currency: "USD",
    taxRate: 0,
    notes: "Thank you for your business!",
    terms: "Payment due within 14 days.",
  });

  const [items, setItems] = useState<LineItem[]>([
    { id: uid(), title: "Product Design", description: "UI/UX, prototyping, design system", price: 750, qty: 1 },
  ]);

  const subTotal = useMemo(
    () => items.reduce((s, i) => s + (Number(i.price) || 0) * (Number(i.qty) || 0), 0),
    [items],
  );
  const taxAmount = useMemo(() => subTotal * ((Number(meta.taxRate) || 0) / 100), [subTotal, meta.taxRate]);
  const grandTotal = subTotal + taxAmount;

  const addItem = () =>
    setItems((arr) => [...arr, { id: uid(), title: "", description: "", price: 0, qty: 1 }]);
  const removeItem = (id: string) => setItems((arr) => arr.filter((i) => i.id !== id));
  const updateItem = (id: string, patch: Partial<LineItem>) =>
    setItems((arr) => arr.map((i) => (i.id === id ? { ...i, ...patch } : i)));

  const generatePdf = async () => {
    if (!previewRef.current) return null;
    toast.loading("Generating PDF…", { id: "pdf" });
    try {
      const [{ default: html2canvas }, { default: jsPDF }] = await Promise.all([
        import("html2canvas"),
        import("jspdf"),
      ]);
      const canvas = await html2canvas(previewRef.current, {
        scale: 2,
        backgroundColor: "#ffffff",
        useCORS: true,
      });
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({ unit: "pt", format: "a4" });
      const pageW = pdf.internal.pageSize.getWidth();
      const pageH = pdf.internal.pageSize.getHeight();
      const ratio = canvas.width / canvas.height;
      const imgW = pageW;
      const imgH = imgW / ratio;
      let y = 0;
      if (imgH <= pageH) {
        pdf.addImage(imgData, "PNG", 0, 0, imgW, imgH);
      } else {
        // multi-page
        let remaining = imgH;
        const pageCanvasH = (pageH * canvas.width) / pageW;
        let sy = 0;
        const tmp = document.createElement("canvas");
        tmp.width = canvas.width;
        tmp.height = pageCanvasH;
        const ctx = tmp.getContext("2d")!;
        while (remaining > 0) {
          ctx.clearRect(0, 0, tmp.width, tmp.height);
          ctx.drawImage(canvas, 0, sy, canvas.width, pageCanvasH, 0, 0, tmp.width, tmp.height);
          const data = tmp.toDataURL("image/png");
          if (y > 0) pdf.addPage();
          pdf.addImage(data, "PNG", 0, 0, pageW, pageH);
          sy += pageCanvasH;
          remaining -= pageH;
          y += 1;
        }
      }
      toast.success("PDF ready", { id: "pdf" });
      return pdf;
    } catch (e) {
      toast.error("Failed to generate PDF", { id: "pdf" });
      return null;
    }
  };

  const handleDownload = async () => {
    const pdf = await generatePdf();
    if (pdf) pdf.save(`${meta.invoiceNo || "invoice"}.pdf`);
  };

  const handleShare = async () => {
    const pdf = await generatePdf();
    if (!pdf) return;
    const blob = pdf.output("blob");
    const file = new File([blob], `${meta.invoiceNo || "invoice"}.pdf`, { type: "application/pdf" });
    const nav = navigator as Navigator & { canShare?: (d: ShareData) => boolean };
    if (nav.canShare && nav.canShare({ files: [file] })) {
      try {
        await navigator.share({
          files: [file],
          title: `Invoice ${meta.invoiceNo}`,
          text: `Invoice ${meta.invoiceNo} from ${from.name}`,
        });
        return;
      } catch {
        // fall through
      }
    }
    // fallback: download + open mail draft
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${meta.invoiceNo || "invoice"}.pdf`;
    a.click();
    URL.revokeObjectURL(url);
    const subject = encodeURIComponent(`Invoice ${meta.invoiceNo}`);
    const body = encodeURIComponent(
      `Hi ${client.name || "there"},\n\nPlease find attached invoice ${meta.invoiceNo}.\nTotal: ${formatMoney(grandTotal, meta.currency)}\n\nBest,\n${from.name}`,
    );
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
      {/* Form */}
      <div className="space-y-5">
        <div className="rounded-[22px] border border-border bg-card p-4 sm:p-5 space-y-4">
          <h3 className="text-xs font-semibold tracking-tight text-foreground">Invoice details</h3>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Invoice #">
              <Input value={meta.invoiceNo} onChange={(e) => setMeta({ ...meta, invoiceNo: e.target.value })} />
            </Field>
            <Field label="Date">
              <Input type="date" value={meta.date} onChange={(e) => setMeta({ ...meta, date: e.target.value })} />
            </Field>
            <Field label="Currency">
              <Input value={meta.currency} onChange={(e) => setMeta({ ...meta, currency: e.target.value.toUpperCase() })} />
            </Field>
            <Field label="Tax / VAT (%)">
              <Input
                type="number"
                min={0}
                value={meta.taxRate}
                onChange={(e) => setMeta({ ...meta, taxRate: Number(e.target.value) })}
              />
            </Field>
          </div>
        </div>

        <div className="rounded-[22px] border border-border bg-card p-4 sm:p-5 space-y-4">
          <h3 className="text-xs font-semibold tracking-tight text-foreground">Bill to</h3>
          <Field label="Client name">
            <Input value={client.name} onChange={(e) => setClient({ ...client, name: e.target.value })} placeholder="John Smith" />
          </Field>
          <Field label="Address">
            <Input value={client.address} onChange={(e) => setClient({ ...client, address: e.target.value })} placeholder="123 Street, Town/City" />
          </Field>
          <Field label="Phone / Email">
            <Input value={client.phone} onChange={(e) => setClient({ ...client, phone: e.target.value })} placeholder="+1 234 567 890" />
          </Field>
        </div>

        <div className="rounded-[22px] border border-border bg-card p-4 sm:p-5 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-semibold tracking-tight text-foreground">Scope / Line items</h3>
            <Button size="sm" variant="secondary" onClick={addItem} className="h-8 gap-1 text-xs">
              <Plus size={14} /> Add item
            </Button>
          </div>
          <div className="space-y-3">
            {items.map((item, idx) => {
              const lineTotal = (Number(item.price) || 0) * (Number(item.qty) || 0);
              return (
                <div key={item.id} className="rounded-xl border border-border bg-background/50 p-3 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Item {idx + 1}</span>
                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      className="text-muted-foreground hover:text-destructive transition-colors"
                      aria-label="Remove item"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                  <Input
                    value={item.title}
                    onChange={(e) => updateItem(item.id, { title: e.target.value })}
                    placeholder="Title (e.g., Web Design)"
                    className="h-9 text-sm"
                  />
                  <Textarea
                    value={item.description}
                    onChange={(e) => updateItem(item.id, { description: e.target.value })}
                    placeholder="Short description / scope"
                    rows={2}
                    className="text-xs resize-none"
                  />
                  <div className="grid grid-cols-[1fr_auto_1fr] gap-2 items-end">
                    <Field label="Price">
                      <Input
                        type="number"
                        min={0}
                        value={item.price}
                        onChange={(e) => updateItem(item.id, { price: Number(e.target.value) })}
                        className="h-9 text-sm"
                      />
                    </Field>
                    <div className="pb-1">
                      <Label className="mb-1 block text-[10px] uppercase tracking-wider text-muted-foreground">Qty</Label>
                      <div className="flex items-center gap-1">
                        <button
                          type="button"
                          onClick={() => updateItem(item.id, { qty: Math.max(0, (item.qty || 0) - 1) })}
                          className="h-9 w-9 rounded-md border border-border bg-background hover:bg-secondary transition-colors flex items-center justify-center"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>
                        <Input
                          type="number"
                          min={0}
                          value={item.qty}
                          onChange={(e) => updateItem(item.id, { qty: Number(e.target.value) })}
                          className="h-9 w-14 text-sm text-center px-1"
                        />
                        <button
                          type="button"
                          onClick={() => updateItem(item.id, { qty: (item.qty || 0) + 1 })}
                          className="h-9 w-9 rounded-md border border-border bg-background hover:bg-secondary transition-colors flex items-center justify-center"
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                    <Field label="Total">
                      <div className="h-9 px-3 rounded-md border border-border bg-muted/30 text-sm flex items-center justify-end font-medium">
                        {formatMoney(lineTotal, meta.currency)}
                      </div>
                    </Field>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="rounded-[22px] border border-border bg-card p-4 sm:p-5 space-y-4">
          <h3 className="text-xs font-semibold tracking-tight text-foreground">Notes & terms</h3>
          <Field label="Payment / Notes">
            <Textarea value={meta.notes} onChange={(e) => setMeta({ ...meta, notes: e.target.value })} rows={2} className="text-xs resize-none" />
          </Field>
          <Field label="Terms">
            <Textarea value={meta.terms} onChange={(e) => setMeta({ ...meta, terms: e.target.value })} rows={2} className="text-xs resize-none" />
          </Field>
        </div>

        <div className="flex flex-wrap gap-2">
          <Button onClick={handleDownload} className="gap-2">
            <Download size={16} /> Download PDF
          </Button>
          <Button onClick={handleShare} variant="secondary" className="gap-2">
            <Share2 size={16} /> Share with client
          </Button>
        </div>
      </div>

      {/* Preview */}
      <div>
        <div className="sticky top-6">
          <div className="mb-2 flex items-center gap-2 text-[10px] uppercase tracking-wider text-muted-foreground">
            <FileText size={12} /> Live preview
          </div>
          <div className="rounded-2xl border border-border overflow-hidden shadow-sm">
            <div ref={previewRef} className="bg-white text-neutral-900" style={{ minHeight: 600 }}>
              {/* Header */}
              <div className="relative bg-neutral-900 text-white px-8 pt-8 pb-16">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <div className="flex items-center gap-2">
                      <div className="h-9 w-9 rounded-md bg-amber-400 grid place-items-center text-neutral-900 font-bold">M</div>
                      <div>
                        <div className="text-base font-semibold leading-tight">{from.name}</div>
                        <div className="text-[10px] uppercase tracking-wider text-neutral-400">Product Designer</div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-[10px] leading-snug">
                    <div>
                      <div className="text-amber-400 mb-1">Phone</div>
                      <div className="text-neutral-300">{from.phone}</div>
                    </div>
                    <div>
                      <div className="text-amber-400 mb-1">Email</div>
                      <div className="text-neutral-300 break-all">{from.email}</div>
                    </div>
                    <div>
                      <div className="text-amber-400 mb-1">Area</div>
                      <div className="text-neutral-300">{from.address}</div>
                    </div>
                  </div>
                </div>
                {/* curve */}
                <svg className="absolute -bottom-px left-0 right-0 w-full" viewBox="0 0 1200 80" preserveAspectRatio="none" style={{ height: 60 }}>
                  <path d="M0,40 C300,90 600,0 1200,50 L1200,80 L0,80 Z" fill="#e5e7eb" />
                  <path d="M0,30 C300,80 700,10 1200,40 L1200,80 L0,80 Z" fill="#ffffff" />
                </svg>
              </div>

              {/* Bill to + Invoice meta */}
              <div className="px-8 -mt-6 pb-6 grid grid-cols-2 gap-6">
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-neutral-500 mb-1">To:</div>
                  <div className="text-sm font-bold uppercase">{client.name || "Client name"}</div>
                  <div className="text-[11px] text-neutral-600">{client.address || "Client address"}</div>
                  <div className="text-[11px] text-neutral-600">{client.phone}</div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold tracking-tight">INVOICE</div>
                  <div className="mt-2 text-[11px] space-y-0.5">
                    <div><span className="font-semibold">Invoice No</span> : {meta.invoiceNo}</div>
                    <div><span className="font-semibold">Date</span> : {meta.date}</div>
                  </div>
                </div>
              </div>

              {/* Table */}
              <div className="px-8">
                <div className="grid grid-cols-[1fr_110px_70px_110px] bg-neutral-900 text-white text-[11px] uppercase tracking-wider">
                  <div className="bg-amber-400 text-neutral-900 px-4 py-3 font-semibold">Item description</div>
                  <div className="px-3 py-3 text-right font-semibold">Price</div>
                  <div className="px-3 py-3 text-center font-semibold">Qty</div>
                  <div className="px-3 py-3 text-right font-semibold">Total</div>
                </div>
                <div>
                  {items.map((item, i) => (
                    <div
                      key={item.id}
                      className={`grid grid-cols-[1fr_110px_70px_110px] text-[11px] ${i % 2 === 0 ? "bg-neutral-100" : "bg-neutral-50"}`}
                    >
                      <div className="px-4 py-3">
                        <div className="text-sm font-semibold text-neutral-900">{item.title || "Item"}</div>
                        <div className="text-[10px] text-neutral-500">{item.description}</div>
                      </div>
                      <div className="px-3 py-3 text-right text-neutral-700">{formatMoney(item.price, meta.currency)}</div>
                      <div className="px-3 py-3 text-center text-neutral-700">{item.qty}</div>
                      <div className="px-3 py-3 text-right font-semibold text-neutral-900">
                        {formatMoney(item.price * item.qty, meta.currency)}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Totals */}
                <div className="mt-0 grid grid-cols-[1fr_110px_70px_110px] text-[11px]">
                  <div className="col-span-2 px-4 py-2 text-right text-neutral-600">Sub Total</div>
                  <div className="col-span-2 px-3 py-2 text-right font-semibold">{formatMoney(subTotal, meta.currency)}</div>
                  <div className="col-span-2 px-4 py-2 text-right text-neutral-600">Tax {meta.taxRate || 0}%</div>
                  <div className="col-span-2 px-3 py-2 text-right font-semibold">{formatMoney(taxAmount, meta.currency)}</div>
                  <div className="col-span-2 px-4 py-3 text-right text-neutral-900 font-bold uppercase bg-amber-400">Grand Total</div>
                  <div className="col-span-2 px-3 py-3 text-right font-bold text-neutral-900 bg-amber-400">
                    {formatMoney(grandTotal, meta.currency)}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="px-8 py-6 mt-4 grid grid-cols-2 gap-6 border-t border-neutral-200">
                <div>
                  <div className="text-[11px] font-bold uppercase mb-1">Payment Info</div>
                  <div className="text-[10px] text-neutral-600 whitespace-pre-line">{meta.notes}</div>
                  <div className="mt-3 text-[10px] text-neutral-600 whitespace-pre-line">
                    <span className="font-semibold uppercase">Terms: </span>{meta.terms}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold">{from.name}</div>
                  <div className="text-[10px] text-neutral-500">Product Designer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <Label className="mb-1 block text-[10px] uppercase tracking-wider text-muted-foreground">{label}</Label>
      {children}
    </div>
  );
}

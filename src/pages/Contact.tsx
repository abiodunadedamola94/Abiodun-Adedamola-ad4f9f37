import { useState, useRef, type FormEvent } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const contactSchema = z.object({
  fullName: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(1, "Message is required").max(5000),
});

const testimonials = [
  {
    id: 1,
    text: "Ifeanyi says the design thinking helped shape a platform that's intuitive, modern, and user-friendly. The focus on product growth made a real impact.",
    name: "Ifeanyi",
    initials: "IF",
    accent: "bg-blue-900",
  },
  {
    id: 2,
    text: "From early concepts to refined user flows, every decision felt thoughtful, clear, and grounded in what users needed.",
    name: "Henry",
    initials: "HE",
    accent: "bg-purple-900",
  },
  {
    id: 3,
    text: "He's a thoughtful designer and a great teammate. He communicates clearly, helps others, and delivers work with strong visual judgment.",
    name: "Edith",
    initials: "ED",
    accent: "bg-slate-800",
  },
  {
    id: 4,
    text: "Working with him was seamless. He understands both design and business, and brings clarity to complex problems.",
    name: "Tunde",
    initials: "TU",
    accent: "bg-emerald-900",
  },
  {
    id: 5,
    text: "His attention to detail and consistency across the product was impressive. A true asset to any design team.",
    name: "Amaka",
    initials: "AM",
    accent: "bg-rose-900",
  },
];

export default function Contact() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;

    const parsed = contactSchema.safeParse({ fullName, email, message });
    if (!parsed.success) {
      toast.error(parsed.error.errors[0]?.message ?? "Please check your inputs");
      return;
    }

    setSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke("notify-contact", {
        body: {
          fullName: parsed.data.fullName,
          email: parsed.data.email,
          message: parsed.data.message,
        },
      });

      if (error) {
        console.error("[contact] notify failed", error);
        toast.error("Can't send message now, try again");
        return;
      }

      setSubmitted(true);
      setFullName("");
      setEmail("");
      setMessage("");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen px-5 py-10 sm:px-6 sm:py-12">
      <div className="max-w-[560px] mx-auto space-y-10">

        {/* Scrollable Reviews */}
        <section>
          <h2 className="mb-4 text-[15px] font-semibold tracking-tight text-foreground">
            What People Say
          </h2>
          <div
            ref={scrollRef}
            className="flex gap-3 overflow-x-auto pb-3 snap-x snap-mandatory scrollbar-thin scrollbar-track-transparent scrollbar-thumb-border"
            style={{ scrollbarWidth: "thin" }}
          >
            {testimonials.map((t) => (
              <article
                key={t.id}
                className="flex-shrink-0 w-[260px] snap-start flex flex-col justify-between rounded-2xl border border-border bg-card p-4 min-h-[165px]"
              >
                <p className="text-[11px] leading-5 text-muted-foreground">{t.text}</p>
                <div className="mt-4 flex items-center gap-2.5">
                  <div className={`flex h-6 w-6 items-center justify-center rounded-full ${t.accent}`}>
                    <span className="text-[9px] font-semibold text-foreground">{t.initials}</span>
                  </div>
                  <span className="text-[11px] text-muted-foreground">{t.name}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Contact Form Card */}
        <section>
          {submitted ? (
            <div className="rounded-2xl border border-border bg-card px-6 py-8 text-center">
              <p className="text-lg font-semibold text-foreground">Message Sent!</p>
              <p className="mt-2 text-[12px] text-muted-foreground">Thanks for reaching out. I'll get back to you soon.</p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 text-[12px] text-muted-foreground underline hover:text-foreground transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
            <div className="rounded-2xl border border-[hsl(var(--accent-gold)/0.3)] bg-card p-6 sm:p-8">
              <div className="text-center mb-6">
                <h2 className="text-xl font-bold text-foreground">Contact Me!</h2>
                <p className="mt-1 text-[13px] text-muted-foreground">The start of something magnificent</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block mb-1.5 text-[13px] font-medium text-foreground">Full Name</label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Type here..."
                    required
                    className="h-11 w-full rounded-xl border border-border bg-background px-4 text-xs text-foreground outline-none placeholder:text-muted-foreground/40 focus:border-muted-foreground/40 transition-colors"
                  />
                </div>

                <div>
                  <label className="block mb-1.5 text-[13px] font-medium text-foreground">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="example@email.com"
                    required
                    className="h-11 w-full rounded-xl border border-border bg-background px-4 text-xs text-foreground outline-none placeholder:text-muted-foreground/40 focus:border-muted-foreground/40 transition-colors"
                  />
                </div>

                <div>
                  <label className="block mb-1.5 text-[13px] font-medium text-foreground">Your Message For Me?</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="You can say all you want here..."
                    required
                    rows={5}
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-xs text-foreground outline-none placeholder:text-muted-foreground/40 focus:border-muted-foreground/40 resize-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full h-12 rounded-xl font-medium text-sm text-foreground transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{
                    background: "linear-gradient(90deg, hsl(30 80% 65%), hsl(340 60% 65%), hsl(260 70% 65%))",
                  }}
                >
                  {submitting ? "Sending..." : "Submit"}
                </button>
              </form>
            </div>
          )}
        </section>

        {/* Footer */}
        <footer className="pb-8 pt-2">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="flex items-center gap-4">
              {["Instagram", "LinkedIn", "Twitter", "YouTube"].map((label) => (
                <button
                  key={label}
                  type="button"
                  className="text-[11px] text-muted-foreground transition-colors hover:text-foreground"
                >
                  {label}
                </button>
              ))}
            </div>
            <p className="text-[10px] text-muted-foreground/60">Adedamola Ade — Product Designer</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

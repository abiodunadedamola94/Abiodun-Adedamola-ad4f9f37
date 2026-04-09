import { useState, type FormEvent } from "react";

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
];

export default function Contact() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <div className="min-h-screen px-5 py-10 sm:px-6 sm:py-12">
      <div className="max-w-[560px] mx-auto space-y-12">
        {/* Social Validation */}
        <section>
          <h2 className="mb-4 text-[15px] font-semibold tracking-tight text-foreground">
            Social Validation
          </h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {testimonials.map((t) => (
              <article
                key={t.id}
                className="flex flex-col justify-between rounded-[22px] border border-border bg-card p-4 min-h-[165px]"
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

        {/* Newsletter / Contact */}
        <section>
          <h2 className="mb-1 text-[15px] font-semibold tracking-tight text-foreground">
            Newsletter
          </h2>
          <p className="mb-5 max-w-[500px] text-[11px] leading-5 text-muted-foreground">
            I document my learnings once a month. I would love to share them with you over mail.
            <br />
            No bs*t. No spam. Straight up value.
          </p>

          {submitted ? (
            <div className="rounded-2xl border border-border bg-card px-5 py-4">
              <p className="text-sm font-medium text-foreground">You're in!</p>
              <p className="mt-1 text-[11px] text-muted-foreground">Thanks for subscribing. Talk soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex max-w-[370px] gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@gmail.com"
                required
                className="h-11 flex-1 rounded-xl border border-border bg-card px-4 text-xs text-foreground outline-none placeholder:text-muted-foreground/50 focus:border-muted-foreground/40"
              />
              <button
                type="submit"
                className="h-11 rounded-xl bg-foreground px-4 text-xs font-medium text-background transition-colors hover:bg-foreground/90"
              >
                Subscribe
              </button>
            </form>
          )}
        </section>

        {/* Footer */}
        <footer className="pb-8 pt-4">
          <div className="flex flex-col items-center gap-5 text-center">
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
            <div className="flex flex-col items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-border bg-card text-foreground/70">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M4 17.5C4 13.358 7.13401 10 11 10H15C16.933 10 18.5 11.567 18.5 13.5C18.5 15.433 16.933 17 15 17H10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M9 21L4 17.5L9 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="text-[11px] text-muted-foreground">Thanks for visiting</p>
              <p className="text-[10px] text-muted-foreground/60">Adedamola Ade — Product Designer</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

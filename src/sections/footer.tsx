"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Magnetic } from "@/components/ui/magnetic";
import { FOOTER_LINKS, SOCIALS } from "@/lib/data";

export function Footer() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    setSent(true);
    setEmail("");
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <footer className="relative mt-10 overflow-hidden border-t border-white/[0.06] bg-ink-950 noise-overlay">
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-[40vw] w-[80vw] -translate-x-1/2 rounded-full bg-gold/10 blur-[140px]" />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 py-20 sm:px-8 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr]">
          {/* Brand + newsletter */}
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-gold-light to-gold-dark text-base font-bold text-ink-950">
                C
              </span>
              <span className="font-display text-2xl tracking-tight text-cream">
                Creme
              </span>
            </div>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-cream/50">
              An AI-native product studio turning founders&apos; ideas into
              launch-ready MVPs in two weeks.
            </p>

            <form onSubmit={submit} className="mt-8 max-w-md">
              <label className="mb-3 block text-sm text-cream/60">
                Get studio notes, drops & launch tips.
              </label>
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] p-1.5 pl-5 focus-within:border-gold/40">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@startup.com"
                  className="flex-1 bg-transparent text-sm text-cream placeholder:text-cream/30 focus:outline-none"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="grid h-10 w-10 place-items-center rounded-full bg-gold text-ink-950 transition-transform hover:scale-105"
                >
                  {sent ? <Check className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
                </button>
              </div>
              {sent && (
                <p className="mt-2 pl-5 text-xs text-gold">You&apos;re on the list — talk soon.</p>
              )}
            </form>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
              <div key={heading}>
                <h4 className="mb-5 text-xs uppercase tracking-[0.2em] text-cream/40">
                  {heading}
                </h4>
                <ul className="flex flex-col gap-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="group inline-flex items-center text-sm text-cream/65 transition-colors hover:text-cream"
                      >
                        <span className="relative">
                          {link}
                          <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Big wordmark */}
        <div className="mt-20 select-none">
          <h2 className="bg-gradient-to-b from-white/[0.08] to-transparent bg-clip-text text-center font-display text-[20vw] leading-none tracking-tightest text-transparent">
            Creme
          </h2>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-6 border-t border-white/[0.06] pt-8 md:flex-row">
          <p className="text-xs text-cream/40">
            © {new Date().getFullYear()} Creme Studio. Crafted with intent.
          </p>
          <div className="flex items-center gap-2">
            {SOCIALS.map((social) => (
              <Magnetic key={social} strength={0.4}>
                <a
                  href="#"
                  className="rounded-full border border-white/10 px-4 py-2 text-xs text-cream/60 transition-colors hover:border-gold/40 hover:text-cream"
                >
                  {social}
                </a>
              </Magnetic>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

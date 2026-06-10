"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const LINKS = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#work" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

function scrollTo(href: string) {
  const el = document.querySelector(href);
  if (!el) return;
  if (window.__lenis) {
    window.__lenis.scrollTo(el as HTMLElement, { offset: -80 });
  } else {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    setTimeout(() => scrollTo(href), open ? 350 : 0);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="fixed inset-x-0 top-0 z-[70] flex justify-center px-4 pt-4"
      >
        <nav
          className={cn(
            "flex w-full max-w-[1200px] items-center justify-between rounded-full px-5 py-3 transition-all duration-500",
            scrolled
              ? "glass shadow-card"
              : "border border-transparent bg-transparent"
          )}
        >
          <button
            onClick={() => handleNav("#hero")}
            className="flex items-center gap-2.5"
            aria-label="Creme home"
          >
            <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-gold-light to-gold-dark text-sm font-bold text-ink-950">
              C
            </span>
            <span className="font-display text-xl tracking-tight text-cream">
              Creme
            </span>
          </button>

          <div className="hidden items-center gap-1 md:flex">
            {LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="rounded-full px-4 py-2 text-sm text-cream/65 transition-colors hover:text-cream"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="hidden md:block">
            <Button size="sm" variant="gold" withArrow onClick={() => handleNav("#contact")}>
              Book a Call
            </Button>
          </div>

          <button
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-cream md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[65] flex flex-col bg-ink-950/95 backdrop-blur-xl md:hidden"
          >
            <div className="mt-24 flex flex-col gap-2 px-8">
              {LINKS.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * i + 0.1 }}
                  onClick={() => handleNav(link.href)}
                  className="border-b border-white/5 py-5 text-left font-display text-4xl tracking-tight text-cream"
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8"
              >
                <Button variant="gold" size="lg" withArrow onClick={() => handleNav("#contact")}>
                  Book a Call
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

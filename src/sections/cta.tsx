"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { WordReveal, FadeRise } from "@/components/ui/text-reveal";

export function CTA() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const glowY = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 1.05]);

  return (
    <section
      id="contact"
      ref={ref}
      className="relative mx-auto my-20 w-full max-w-[1400px] px-5 sm:px-8 lg:px-12"
    >
      <div className="relative overflow-hidden rounded-[2.5rem] border border-white/[0.08] bg-ink-900 px-6 py-24 text-center noise-overlay md:py-36">
        {/* animated background */}
        <motion.div
          style={{ y: glowY, scale }}
          className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[60vw] w-[60vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-gold/30 via-gold/10 to-accent/10 blur-[120px]"
        />
        <div className="pointer-events-none absolute inset-0 grid-lines radial-fade opacity-40" />

        <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center">
          <FadeRise>
            <span className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs uppercase tracking-[0.2em] text-cream/60">
              <span className="h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_10px_2px_rgba(212,168,67,0.6)]" />
              Limited sprint slots open
            </span>
          </FadeRise>

          <WordReveal
            as="h2"
            text="Let's build something worth launching."
            className="font-display text-4xl leading-[1.05] tracking-tightest text-cream sm:text-6xl md:text-7xl"
            stagger={0.05}
          />

          <FadeRise delay={0.2}>
            <p className="mt-7 max-w-xl text-base text-cream/55 md:text-lg">
              Tell us about your idea. We&apos;ll tell you exactly how we&apos;d
              ship it in two weeks — no contracts, no pressure.
            </p>
          </FadeRise>

          <FadeRise delay={0.35}>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
              <Button variant="gold" size="lg" withArrow>
                Start a Project
              </Button>
              <Button variant="outline" size="lg">
                Book a Call
              </Button>
            </div>
          </FadeRise>
        </div>
      </div>
    </section>
  );
}

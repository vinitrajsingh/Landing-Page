"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WordReveal, FadeRise } from "@/components/ui/text-reveal";

export function Hero() {
  const ref = useRef<HTMLElement>(null);

  // Subtle scroll fade so the section hands off cleanly to the next.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-cream pt-32 text-ink-950"
    >
      {/* Soft, premium light backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-cream-100 via-cream to-cream-200" />
        <div className="absolute -left-[10%] top-[12%] h-[40vw] w-[40vw] rounded-full bg-gold/[0.08] blur-[130px]" />
        <div className="absolute -right-[8%] bottom-[6%] h-[34vw] w-[34vw] rounded-full bg-gold-light/[0.1] blur-[130px]" />
        <div className="absolute inset-0 grid-lines opacity-[0.4] [mask-image:radial-gradient(circle_at_30%_40%,black,transparent_70%)]" />
      </div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12"
      >
        <div className="max-w-4xl">

          {/* Headline */}
          <h1 className="font-sans text-[12.5vw] font-semibold leading-[0.95] tracking-tightest sm:text-6xl md:text-7xl lg:text-[6.2rem]">
            <WordReveal
              as="span"
              text="From rough idea"
              className="block"
              stagger={0.05}
            />
            <span className="block">
              <WordReveal
                as="span"
                text="to a product worth"
                className="inline"
                delay={0.2}
                stagger={0.05}
              />
            </span>
            <span className="block">
              <WordReveal
                as="span"
                text="launching —"
                className="inline"
                delay={0.4}
                stagger={0.05}
              />{" "}
              <span className="reveal-mask">
                <motion.span
                  initial={{ y: "120%" }}
                  whileInView={{ y: "0%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: 0.55 }}
                  className="inline-block italic text-gold-dark"
                >
                  fast.
                </motion.span>
              </span>
            </span>
          </h1>

          {/* Subheadline */}
          <FadeRise delay={0.6}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-700/70 md:text-xl">
              We&apos;re the AI-native studio founders call when they need design,
              engineering and momentum in one team — shipping polished MVPs in
              weeks, not quarters.
            </p>
          </FadeRise>

          {/* CTAs */}
          <FadeRise delay={0.72}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button variant="dark" size="lg" withArrow>
                Book a Call
              </Button>
              <Button variant="light-outline" size="lg">
                View Pricing
              </Button>
            </div>
          </FadeRise>
        </div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-ink-950/15 p-1.5">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1.5 rounded-full bg-gold-dark"
          />
        </div>
      </motion.div>
    </section>
  );
}

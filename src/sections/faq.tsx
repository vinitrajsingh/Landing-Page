"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section-primitives";
import { FadeRise } from "@/components/ui/text-reveal";
import { FAQS } from "@/lib/data";
import { cn } from "@/lib/utils";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="faq" className="py-24 md:py-36">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            eyebrow="Questions? Answers."
            title="Everything you want to know."
            description="Still curious? Book a call and we'll walk you through exactly how a sprint would work for your idea."
          />
        </div>

        <div className="flex flex-col">
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <FadeRise key={faq.q} delay={i * 0.05}>
                <div className="border-b border-white/[0.08]">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={cn(
                        "font-display text-xl tracking-tight transition-colors md:text-2xl",
                        isOpen ? "text-cream" : "text-cream/75"
                      )}
                    >
                      {faq.q}
                    </span>
                    <span
                      className={cn(
                        "grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-all duration-300",
                        isOpen
                          ? "rotate-45 border-gold bg-gold text-ink-950"
                          : "border-white/15 text-cream/70"
                      )}
                    >
                      <Plus className="h-4 w-4" />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-xl pb-7 text-base leading-relaxed text-cream/55">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeRise>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

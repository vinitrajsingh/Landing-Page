"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section-primitives";
import { Button } from "@/components/ui/button";
import { FadeRise } from "@/components/ui/text-reveal";
import { CASE_STUDIES } from "@/lib/data";

export function CaseStudies() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <Section id="work" className="py-24 md:py-36">
      <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
        <SectionHeading
          eyebrow="Selected work"
          title="Ideas we turned into products."
        />
        <FadeRise delay={0.2}>
          <Button variant="outline" withArrow>
            View all work
          </Button>
        </FadeRise>
      </div>

      {/* Desktop: expanding horizontal accordion */}
      <div className="mt-16 hidden h-[520px] gap-3 lg:flex">
        {CASE_STUDIES.map((cs, i) => {
          const isActive = active === i;
          return (
            <motion.article
              key={cs.name}
              onMouseEnter={() => setActive(i)}
              className="relative cursor-pointer overflow-hidden rounded-3xl border border-white/[0.07]"
              animate={{ flex: isActive ? 4 : 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src={cs.image}
                alt={cs.name}
                fill
                sizes="(max-width:1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700"
                style={{ transform: isActive ? "scale(1.05)" : "scale(1.15)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent" />

              {/* Collapsed label */}
              <motion.div
                animate={{ opacity: isActive ? 0 : 1 }}
                className="absolute inset-0 flex items-end p-6"
              >
                <span className="[writing-mode:vertical-rl] rotate-180 font-display text-2xl tracking-tight text-cream">
                  {cs.name}
                </span>
              </motion.div>

              {/* Expanded content */}
              <motion.div
                animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
                transition={{ duration: 0.5, delay: isActive ? 0.2 : 0 }}
                className="absolute inset-0 flex flex-col justify-end p-8"
              >
                <div className="mb-3 flex items-center gap-3">
                  <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-cream/70">
                    {cs.category}
                  </span>
                  <span className="rounded-full bg-gold px-3 py-1 text-xs font-semibold text-ink-950">
                    {cs.result}
                  </span>
                  <span className="text-xs text-cream/50">{cs.year}</span>
                </div>
                <h3 className="mb-2 font-display text-4xl tracking-tight text-cream">
                  {cs.name}
                </h3>
                <p className="max-w-md text-sm leading-relaxed text-cream/65">
                  {cs.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-gold">
                  View case study <ArrowUpRight className="h-4 w-4" />
                </span>
              </motion.div>
            </motion.article>
          );
        })}
      </div>

      {/* Mobile: stacked cards */}
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:hidden">
        {CASE_STUDIES.map((cs, i) => (
          <FadeRise key={cs.name} delay={i * 0.08}>
            <article className="group relative overflow-hidden rounded-3xl border border-white/[0.07]">
              <div className="relative aspect-[4/3]">
                <Image
                  src={cs.image}
                  alt={cs.name}
                  fill
                  sizes="(max-width:640px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent" />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="mb-2 flex items-center gap-2">
                  <span className="rounded-full bg-gold px-2.5 py-1 text-[11px] font-semibold text-ink-950">
                    {cs.result}
                  </span>
                  <span className="text-xs text-cream/60">{cs.category}</span>
                </div>
                <h3 className="font-display text-2xl tracking-tight text-cream">
                  {cs.name}
                </h3>
              </div>
            </article>
          </FadeRise>
        ))}
      </div>
    </Section>
  );
}

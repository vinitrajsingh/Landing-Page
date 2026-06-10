"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section-primitives";
import { TiltCard } from "@/components/ui/tilt-card";
import { FadeRise } from "@/components/ui/text-reveal";
import { SERVICES } from "@/lib/data";

export function Services() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <Section id="services" className="py-24 md:py-36">
      <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
        <SectionHeading
          eyebrow="What we do"
          title="A full product team, fractionalized."
          className="max-w-3xl"
        />
        <FadeRise delay={0.2}>
          <p className="max-w-xs text-sm text-cream/50 md:text-right">
            Six disciplines, one async team. Plug into exactly what your launch
            needs — nothing you don&apos;t.
          </p>
        </FadeRise>
      </div>

      <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service, i) => {
          const Icon = service.icon;
          const isHovered = hovered === i;
          return (
            <FadeRise key={service.title} delay={i * 0.06}>
              <TiltCard className="group h-full">
                <div
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  className="relative flex h-full min-h-[300px] flex-col justify-between overflow-hidden rounded-3xl border border-white/[0.07] bg-gradient-to-b from-white/[0.04] to-transparent p-7 transition-colors duration-500 hover:border-white/15"
                >
                  {/* glow */}
                  <motion.div
                    aria-hidden
                    className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold/20 blur-3xl"
                    animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1.2 : 0.8 }}
                    transition={{ duration: 0.5 }}
                  />

                  <div className="relative z-10">
                    <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-ink-800 transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-6">
                      <Icon className="h-6 w-6 text-gold" />
                    </div>
                    <h3 className="mb-3 font-display text-2xl tracking-tight text-cream">
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-cream/55">
                      {service.description}
                    </p>
                  </div>

                  <div className="relative z-10 mt-6 flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] text-cream/55"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <ArrowUpRight className="h-5 w-5 shrink-0 text-cream/30 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-gold" />
                  </div>
                </div>
              </TiltCard>
            </FadeRise>
          );
        })}
      </div>
    </Section>
  );
}

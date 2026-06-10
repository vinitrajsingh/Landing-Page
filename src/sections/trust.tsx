"use client";

import { Marquee } from "@/components/ui/marquee";
import { Counter } from "@/components/ui/counter";
import { Section } from "@/components/ui/section-primitives";
import { FadeRise } from "@/components/ui/text-reveal";
import { CLIENT_LOGOS, STATS } from "@/lib/data";

export function Trust() {
  return (
    <Section className="py-24 md:py-32">
      <FadeRise>
        <p className="mb-10 text-center text-xs uppercase tracking-[0.3em] text-cream/40">
          The studio behind products founders are proud of
        </p>
      </FadeRise>

      {/* Logo marquee */}
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink-950 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink-950 to-transparent" />
        <Marquee duration={32} className="[--gap:5rem]">
          {CLIENT_LOGOS.map((name) => (
            <span
              key={name}
              className="whitespace-nowrap font-display text-2xl text-cream/30 transition-colors duration-300 hover:text-cream/70 md:text-3xl"
            >
              {name}
            </span>
          ))}
        </Marquee>
      </div>

      {/* Stats */}
      <div className="mt-24 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/[0.06] bg-white/[0.02] lg:grid-cols-4">
        {STATS.map((stat, i) => (
          <FadeRise
            key={stat.label}
            delay={i * 0.08}
            className="group relative flex flex-col gap-2 bg-ink-950 p-8 transition-colors duration-500 hover:bg-white/[0.02] md:p-10"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <span className="font-display text-5xl tracking-tight text-cream md:text-6xl">
              <Counter
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
              />
            </span>
            <span className="text-sm font-medium text-cream/80">
              {stat.label}
            </span>
            <span className="text-xs text-cream/40">{stat.sub}</span>
          </FadeRise>
        ))}
      </div>
    </Section>
  );
}

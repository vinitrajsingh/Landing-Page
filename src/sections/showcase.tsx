"use client";

import { Check } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section-primitives";
import { ParallaxImage } from "@/components/ui/parallax-image";
import { FadeRise, WordReveal } from "@/components/ui/text-reveal";
import { SHOWCASE } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Showcase() {
  return (
    <Section className="py-24 md:py-36">
      <SectionHeading
        align="center"
        eyebrow="Built to feel premium"
        title="Products that look like a Series-B raise."
        description="Real screens, real craft. Every surface we ship is designed to make founders look further along than they are."
        className="mx-auto mb-20"
      />

      <div className="flex flex-col gap-28 md:gap-40">
        {SHOWCASE.map((item, i) => {
          const reversed = i % 2 === 1;
          return (
            <div
              key={item.label}
              className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20"
            >
              {/* Text */}
              <div className={cn(reversed && "lg:order-2")}>
                <FadeRise>
                  <span className="mb-5 inline-block rounded-full border border-gold/25 bg-gold/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-gold">
                    {item.label}
                  </span>
                </FadeRise>
                <WordReveal
                  as="h3"
                  text={item.title}
                  className="font-display text-3xl leading-tight tracking-tight text-cream md:text-4xl lg:text-5xl"
                />
                <FadeRise delay={0.15}>
                  <p className="mt-6 max-w-md text-base leading-relaxed text-cream/55 md:text-lg">
                    {item.description}
                  </p>
                </FadeRise>
                <FadeRise delay={0.25}>
                  <ul className="mt-8 flex flex-col gap-3">
                    {item.points.map((point) => (
                      <li key={point} className="flex items-center gap-3 text-sm text-cream/75">
                        <span className="grid h-5 w-5 place-items-center rounded-full bg-gold/15 text-gold">
                          <Check className="h-3 w-3" />
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </FadeRise>
              </div>

              {/* Device mockup with parallax image */}
              <FadeRise
                delay={0.1}
                y={40}
                className={cn("group", reversed && "lg:order-1")}
              >
                <div className="relative">
                  <div className="pointer-events-none absolute -inset-8 -z-10 rounded-[3rem] bg-gradient-to-br from-gold/15 to-accent/5 opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100" />
                  {/* Browser chrome mockup */}
                  <div className="overflow-hidden rounded-2xl border border-white/10 bg-ink-800 shadow-card ring-1 ring-white/5">
                    <div className="flex items-center gap-2 border-b border-white/5 bg-ink-900 px-4 py-3">
                      <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                      <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                      <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                      <div className="ml-3 h-5 flex-1 rounded-md bg-white/5" />
                    </div>
                    <ParallaxImage
                      src={item.image}
                      alt={item.title}
                      amount={50}
                      className="aspect-[16/10] w-full"
                      imgClassName="transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                </div>
              </FadeRise>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

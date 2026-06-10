"use client";

import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@/lib/use-gsap";
import { SectionHeading } from "@/components/ui/section-primitives";
import { PROCESS } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      if (window.innerWidth < 1024) return;

      const panels = gsap.utils.toArray<HTMLElement>(".process-panel");

      // Pin the whole section and step through panels.
      const st = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: () => `+=${panels.length * 80}%`,
        pin: ".process-sticky",
        scrub: true,
        onUpdate: (self) => {
          const idx = Math.min(
            panels.length - 1,
            Math.floor(self.progress * panels.length)
          );
          setActive(idx);
        },
      });

      return () => st.kill();
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative mx-auto w-full max-w-[1400px] px-5 py-24 sm:px-8 md:py-32 lg:px-12"
    >
      <div className="process-sticky">
        <div className="lg:grid lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Left: heading + progress rail */}
          <div className="flex flex-col">
            <SectionHeading
              eyebrow="How we work"
              title="From idea to launch, in four moves."
              description="A transparent rhythm that keeps you in control. You always know what shipped, what's next, and why."
            />

            <div className="mt-12 hidden flex-col gap-1 lg:flex">
              {PROCESS.map((p, i) => (
                <button
                  key={p.step}
                  className={cn(
                    "group flex items-center gap-4 rounded-xl px-4 py-3 text-left transition-colors duration-300",
                    active === i ? "bg-white/[0.04]" : "opacity-50"
                  )}
                >
                  <span
                    className={cn(
                      "font-display text-lg transition-colors",
                      active === i ? "text-gold" : "text-cream/40"
                    )}
                  >
                    {p.step}
                  </span>
                  <span className="text-lg font-medium tracking-tight text-cream">
                    {p.title}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Right: stacked panels */}
          <div className="relative mt-12 lg:mt-0 lg:h-[460px]">
            {PROCESS.map((p, i) => (
              <div
                key={p.step}
                className={cn(
                  "process-panel mb-5 rounded-3xl border border-white/[0.07] bg-gradient-to-b from-white/[0.05] to-transparent p-8 transition-all duration-500 lg:absolute lg:inset-0 lg:mb-0 lg:p-12",
                  "lg:flex lg:flex-col lg:justify-center",
                  active === i
                    ? "lg:opacity-100 lg:translate-y-0 lg:scale-100"
                    : "lg:pointer-events-none lg:opacity-0 lg:translate-y-8 lg:scale-95"
                )}
              >
                <div className="mb-6 flex items-center gap-4">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl border border-gold/30 bg-gold/10 font-display text-2xl text-gold">
                    {p.step}
                  </span>
                  <span className="font-display text-3xl tracking-tight text-cream md:text-4xl">
                    {p.title}
                  </span>
                </div>
                <p className="max-w-lg text-base leading-relaxed text-cream/60 md:text-lg">
                  {p.description}
                </p>

                {/* progress dots */}
                <div className="mt-8 flex gap-2">
                  {PROCESS.map((_, di) => (
                    <span
                      key={di}
                      className={cn(
                        "h-1.5 rounded-full transition-all duration-500",
                        di === i ? "w-8 bg-gold" : "w-1.5 bg-white/15"
                      )}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

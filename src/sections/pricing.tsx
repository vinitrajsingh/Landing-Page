"use client";

import { Check } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section-primitives";
import { Button } from "@/components/ui/button";
import { TiltCard } from "@/components/ui/tilt-card";
import { FadeRise } from "@/components/ui/text-reveal";
import { cn } from "@/lib/utils";

const PLANS = [
  {
    name: "Sprints",
    cadence: "Bi-weekly",
    price: "$4,500",
    unit: "/ sprint",
    description:
      "Your own fractionalized AI product team, on tap. Roadmap, build, ship — repeat.",
    features: [
      "Dedicated AI developer team",
      "Unlimited revisions",
      "Product strategy & roadmap",
      "Third-party integrations",
      "Slack + weekly demos",
      "Pause or cancel anytime",
    ],
    cta: "Book a Call",
    featured: false,
  },
  {
    name: "MVP Build",
    cadence: "One-time",
    price: "$9,500",
    unit: "/ project",
    description:
      "A complete, launch-ready MVP in roughly two weeks. From idea to live product.",
    features: [
      "Fully functional MVP",
      "Database & API integrations",
      "Auth & billing flows",
      "Complete design system",
      "Slack + weekly updates",
      "Full code & design ownership",
    ],
    cta: "Get Started Today",
    featured: true,
  },
];

export function Pricing() {
  return (
    <Section id="pricing" className="py-24 md:py-36">
      <SectionHeading
        align="center"
        eyebrow="Simple pricing"
        title="Your team. Flexible pricing. No contracts."
        description="Pick the model that fits your stage. Switch, pause or cancel whenever you need — it's your call."
        className="mx-auto mb-16"
      />

      <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
        {PLANS.map((plan, i) => (
          <FadeRise key={plan.name} delay={i * 0.1}>
            <TiltCard className="group h-full" max={5} glare={false}>
              <div
                className={cn(
                  "relative flex h-full flex-col overflow-hidden rounded-4xl border p-8 md:p-10",
                  plan.featured
                    ? "border-gold/30 bg-gradient-to-b from-gold/[0.08] to-transparent shadow-glow"
                    : "border-white/[0.08] bg-white/[0.02]"
                )}
              >
                {plan.featured && (
                  <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gold/20 blur-3xl" />
                )}

                <div className="relative z-10 flex items-center justify-between">
                  <div>
                    <h3 className="font-display text-2xl tracking-tight text-cream">
                      {plan.name}
                    </h3>
                    <span className="text-xs uppercase tracking-[0.2em] text-cream/45">
                      {plan.cadence}
                    </span>
                  </div>
                  {plan.featured && (
                    <span className="rounded-full bg-gold px-3 py-1 text-xs font-semibold text-ink-950">
                      Most popular
                    </span>
                  )}
                </div>

                <div className="relative z-10 mt-7 flex items-end gap-1">
                  <span className="font-display text-5xl tracking-tight text-cream md:text-6xl">
                    {plan.price}
                  </span>
                  <span className="mb-2 text-sm text-cream/45">{plan.unit}</span>
                </div>

                <p className="relative z-10 mt-4 text-sm leading-relaxed text-cream/55">
                  {plan.description}
                </p>

                <ul className="relative z-10 mt-8 flex flex-1 flex-col gap-3.5">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-cream/80">
                      <span
                        className={cn(
                          "grid h-5 w-5 shrink-0 place-items-center rounded-full",
                          plan.featured ? "bg-gold text-ink-950" : "bg-white/10 text-gold"
                        )}
                      >
                        <Check className="h-3 w-3" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="relative z-10 mt-9">
                  <Button
                    variant={plan.featured ? "gold" : "outline"}
                    size="lg"
                    withArrow
                    className="w-full"
                  >
                    {plan.cta}
                  </Button>
                </div>
              </div>
            </TiltCard>
          </FadeRise>
        ))}
      </div>
    </Section>
  );
}

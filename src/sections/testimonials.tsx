"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section-primitives";
import { Marquee } from "@/components/ui/marquee";
import { Magnetic } from "@/components/ui/magnetic";
import { TESTIMONIALS } from "@/lib/data";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);

  const paginate = useCallback((d: number) => {
    setDir(d);
    setIndex((prev) => (prev + d + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  const active = TESTIMONIALS[index];

  return (
    <Section id="testimonials" className="py-24 md:py-36">
      <SectionHeading
        align="center"
        eyebrow="Loved by founders"
        title="Trusted by industry leaders."
        description="Don't take our word for it — hear it from the founders we've shipped with."
        className="mx-auto mb-16"
      />

      {/* Featured slider */}
      <div className="relative mx-auto max-w-3xl">
        <div className="pointer-events-none absolute -inset-x-10 -top-10 -z-10 h-40 rounded-full bg-gold/10 blur-3xl" />
        <div className="relative min-h-[320px] overflow-hidden rounded-4xl border border-white/[0.08] bg-gradient-to-b from-white/[0.05] to-transparent p-8 md:min-h-[300px] md:p-14">
          <Quote className="mb-6 h-10 w-10 text-gold/40" />
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={index}
              custom={dir}
              initial={{ opacity: 0, x: dir * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir * -40 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-display text-2xl leading-snug tracking-tight text-cream md:text-3xl">
                &ldquo;{active.quote}&rdquo;
              </p>
              <div className="mt-8 flex items-center gap-4">
                <Image
                  src={active.avatar}
                  alt={active.name}
                  width={52}
                  height={52}
                  className="h-13 w-13 rounded-full border border-white/10 object-cover"
                />
                <div>
                  <p className="font-medium text-cream">{active.name}</p>
                  <p className="text-sm text-cream/50">
                    {active.role} · {active.company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="mt-8 flex items-center justify-center gap-6">
          <Magnetic strength={0.5}>
            <button
              onClick={() => paginate(-1)}
              aria-label="Previous testimonial"
              className="grid h-12 w-12 place-items-center rounded-full border border-white/10 text-cream/70 transition-colors hover:border-gold/50 hover:text-gold"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
          </Magnetic>

          <div className="flex gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDir(i > index ? 1 : -1);
                  setIndex(i);
                }}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-400 ${
                  i === index ? "w-7 bg-gold" : "w-1.5 bg-white/20"
                }`}
              />
            ))}
          </div>

          <Magnetic strength={0.5}>
            <button
              onClick={() => paginate(1)}
              aria-label="Next testimonial"
              className="grid h-12 w-12 place-items-center rounded-full border border-white/10 text-cream/70 transition-colors hover:border-gold/50 hover:text-gold"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </Magnetic>
        </div>
      </div>

      {/* Supporting marquee of mini-cards */}
      <div className="relative mt-20">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-ink-950 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-ink-950 to-transparent" />
        <Marquee duration={45} className="[--gap:1.25rem]">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="flex w-80 shrink-0 flex-col gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6"
            >
              <p className="text-sm leading-relaxed text-cream/65">
                &ldquo;{t.quote.slice(0, 110)}…&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={36}
                  height={36}
                  className="h-9 w-9 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-medium text-cream">{t.name}</p>
                  <p className="text-xs text-cream/45">{t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </Section>
  );
}

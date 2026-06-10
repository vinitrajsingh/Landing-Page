"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { WordReveal, FadeRise } from "./text-reveal";

export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <FadeRise>
      <span
        className={cn(
          "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-cream/60",
          className
        )}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_10px_2px_rgba(212,168,67,0.6)]" />
        {children}
      </span>
    </FadeRise>
  );
}

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  titleClassName,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <WordReveal
        as="h2"
        text={title}
        className={cn(
          "max-w-4xl font-display text-4xl leading-[1.05] tracking-tightest text-cream sm:text-5xl md:text-6xl",
          titleClassName
        )}
      />
      {description && (
        <FadeRise delay={0.15}>
          <p
            className={cn(
              "max-w-xl text-base leading-relaxed text-cream/55 md:text-lg",
              align === "center" && "mx-auto"
            )}
          >
            {description}
          </p>
        </FadeRise>
      )}
    </div>
  );
}

export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12",
        className
      )}
    >
      {children}
    </section>
  );
}

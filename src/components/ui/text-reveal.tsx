"use client";

import { ElementType, useMemo } from "react";
import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  text: string;
  className?: string;
  as?: ElementType;
  /** delay before the whole block starts */
  delay?: number;
  /** stagger between words */
  stagger?: number;
  once?: boolean;
}

/** Word-by-word reveal: each word rises from behind a mask. */
export function WordReveal({
  text,
  className,
  as: Tag = "h2",
  delay = 0,
  stagger = 0.045,
  once = true,
}: TextRevealProps) {
  const words = useMemo(() => text.split(" "), [text]);

  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren: delay },
    },
  };

  const child: Variants = {
    hidden: { y: "120%" },
    visible: {
      y: "0%",
      transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] },
    },
  };

  const MotionTag = motion(Tag as ElementType);

  return (
    <MotionTag
      className={cn("inline-block", className)}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-10% 0px -10% 0px" }}
    >
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="reveal-mask mr-[0.25em] last:mr-0"
        >
          <motion.span variants={child} className="inline-block">
            {word}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}

/** Character-by-character reveal for short emphasis strings. */
export function CharReveal({
  text,
  className,
  delay = 0,
  stagger = 0.025,
  once = true,
}: TextRevealProps) {
  const chars = useMemo(() => Array.from(text), [text]);

  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
  };
  const child: Variants = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: "0%",
      opacity: 1,
      transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] },
    },
  };

  return (
    <motion.span
      className={cn("inline-flex flex-wrap", className)}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      aria-label={text}
    >
      {chars.map((char, i) => (
        <span key={i} className="reveal-mask" aria-hidden>
          <motion.span variants={child} className="inline-block">
            {char === " " ? " " : char}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

/** Simple fade + rise for paragraphs / blocks. */
export function FadeRise({
  children,
  className,
  delay = 0,
  y = 24,
  once = true,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-8% 0px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

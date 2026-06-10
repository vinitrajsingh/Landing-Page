"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  MotionValue,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WordReveal, FadeRise } from "@/components/ui/text-reveal";

/** Floating product screenshot that drifts with scroll + mouse. */
function FloatingShot({
  src,
  alt,
  className,
  depth,
  mx,
  my,
  scrollY,
}: {
  src: string;
  alt: string;
  className: string;
  depth: number;
  mx: MotionValue<number>;
  my: MotionValue<number>;
  scrollY: MotionValue<number>;
}) {
  const x = useTransform(mx, (v) => v * depth);
  const y = useTransform(my, (v) => v * depth);
  return (
    <motion.div
      style={{ x, y }}
      className={className}
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
    >
      <motion.div style={{ y: scrollY }} className="animate-float">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-ink-800 shadow-card ring-1 ring-white/5">
          <Image
            src={src}
            alt={alt}
            width={420}
            height={300}
            className="h-full w-full object-cover"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);

  // Mouse parallax
  const mvX = useMotionValue(0);
  const mvY = useMotionValue(0);
  const mx = useSpring(mvX, { stiffness: 60, damping: 18 });
  const my = useSpring(mvY, { stiffness: 60, damping: 18 });

  const handleMouse = (e: React.MouseEvent) => {
    const { innerWidth, innerHeight } = window;
    mvX.set((e.clientX / innerWidth - 0.5) * 40);
    mvY.set((e.clientY / innerHeight - 0.5) * 40);
  };

  // Scroll parallax for content + shots
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const shotsY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section
      id="hero"
      ref={ref}
      onMouseMove={handleMouse}
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden pt-28 noise-overlay"
    >
      {/* Animated background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-lines radial-fade opacity-60" />
        <motion.div
          style={{ x: useTransform(mx, (v) => v * 0.6) }}
          className="absolute -top-40 left-1/2 h-[55vw] w-[55vw] -translate-x-1/2 rounded-full bg-gold/20 blur-[150px]"
        />
        <motion.div
          style={{ x: useTransform(mx, (v) => v * -0.4) }}
          className="absolute bottom-0 right-[8%] h-[34vw] w-[34vw] rounded-full bg-accent/10 blur-[140px]"
        />
        <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-ink-950 to-transparent" />
      </div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-5 text-center"
      >
        <FadeRise>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-cream/70 backdrop-blur">
            <span className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3 w-3 fill-gold text-gold" />
              ))}
            </span>
            <span className="font-medium">AI product studio · trusted by 80+ founders</span>
          </div>
        </FadeRise>

        <h1 className="font-display text-[13vw] leading-[0.95] tracking-tightest text-cream sm:text-7xl md:text-8xl lg:text-[7.5rem]">
          <WordReveal
            as="span"
            text="We build your idea"
            className="block"
            stagger={0.06}
          />
          <span className="block">
            <WordReveal
              as="span"
              text="into a launch-ready"
              className="inline"
              delay={0.25}
              stagger={0.06}
            />{" "}
            <span className="italic text-gradient-gold">MVP</span>
          </span>
          <WordReveal
            as="span"
            text="in two weeks."
            className="block"
            delay={0.5}
            stagger={0.06}
          />
        </h1>

        <FadeRise delay={0.7}>
          <p className="mt-8 max-w-xl text-balance text-base text-cream/55 md:text-lg">
            An AI-native studio that turns founders&apos; ideas into polished,
            production-grade products. Design, engineering and growth — no
            contracts, no lock-in.
          </p>
        </FadeRise>

        <FadeRise delay={0.85}>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <Button variant="gold" size="lg" withArrow>
              Book a Call
            </Button>
            <Button variant="outline" size="lg">
              View Pricing
            </Button>
          </div>
        </FadeRise>
      </motion.div>

      {/* Floating screenshots */}
      <FloatingShot
        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=520&q=80"
        alt="Analytics dashboard preview"
        depth={1}
        mx={mx}
        my={my}
        scrollY={shotsY}
        className="absolute left-[3%] top-[26%] hidden w-44 lg:block xl:w-52"
      />
      <FloatingShot
        src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=520&q=80"
        alt="AI interface preview"
        depth={1.6}
        mx={mx}
        my={my}
        scrollY={shotsY}
        className="absolute right-[4%] top-[20%] hidden w-44 lg:block xl:w-56"
      />
      <FloatingShot
        src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=520&q=80"
        alt="Mobile app preview"
        depth={2.2}
        mx={mx}
        my={my}
        scrollY={shotsY}
        className="absolute bottom-[10%] left-[8%] hidden w-40 xl:block"
      />
      <FloatingShot
        src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=520&q=80"
        alt="Product screen preview"
        depth={1.3}
        mx={mx}
        my={my}
        scrollY={shotsY}
        className="absolute bottom-[14%] right-[7%] hidden w-40 xl:block"
      />

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/15 p-1.5">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1.5 rounded-full bg-gold"
          />
        </div>
      </motion.div>
    </section>
  );
}

"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const WORDS = ["Strategy", "Design", "Engineering", "Creme."];

export function Preloader() {
  const [counter, setCounter] = useState(0);
  const [done, setDone] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    if (sessionStorage.getItem("preloaded")) {
      setDone(true);
      return;
    }

    document.body.style.overflow = "hidden";

    let frame: number;
    const start = performance.now();
    const duration = 2200;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCounter(Math.round(eased * 100));
      setWordIndex(Math.min(WORDS.length - 1, Math.floor(eased * WORDS.length)));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          setDone(true);
          sessionStorage.setItem("preloaded", "1");
          document.body.style.overflow = "";
        }, 450);
      }
    };
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink-950 noise-overlay"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* glow */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[40vw] w-[40vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/20 blur-[120px]" />

          <div className="relative z-10 flex flex-col items-center gap-8">
            <div className="h-12 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={wordIndex}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -30, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="font-display text-2xl tracking-tight text-cream md:text-3xl"
                >
                  {WORDS[wordIndex]}
                </motion.p>
              </AnimatePresence>
            </div>

            <div className="flex items-end gap-2">
              <span className="font-display text-7xl leading-none tracking-tightest text-cream md:text-8xl">
                {counter}
              </span>
              <span className="mb-2 text-2xl text-gold">%</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 h-[2px] w-full bg-white/10">
            <motion.div
              className="h-full bg-gradient-to-r from-gold-dark via-gold to-gold-light"
              style={{ width: `${counter}%` }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  /** vertical drift in pixels across the scroll range */
  amount?: number;
  /** scale up the image so parallax edges never reveal gaps */
  zoom?: boolean;
  priority?: boolean;
  sizes?: string;
}

/** Image that drifts vertically and reveals via a clip mask on scroll. */
export function ParallaxImage({
  src,
  alt,
  className,
  imgClassName,
  amount = 80,
  zoom = true,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [amount, -amount]);

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={cn(
            "object-cover",
            zoom && "scale-[1.18]",
            imgClassName
          )}
        />
      </motion.div>
    </div>
  );
}

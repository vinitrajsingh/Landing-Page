"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

interface UseGSAPOptions {
  scope?: React.RefObject<HTMLElement | null>;
  dependencies?: unknown[];
}

/**
 * Lightweight equivalent of @gsap/react's useGSAP: runs the callback inside a
 * gsap.context scoped to `scope`, and cleans up all animations/ScrollTriggers
 * created within it on unmount or dependency change.
 */
export function useGSAP(
  callback: () => void | (() => void),
  { scope, dependencies = [] }: UseGSAPOptions = {}
) {
  const cleanupRef = useRef<void | (() => void)>(undefined);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      cleanupRef.current = callback();
    }, scope?.current ?? undefined);

    return () => {
      if (typeof cleanupRef.current === "function") cleanupRef.current();
      ctx.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
}

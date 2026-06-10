"use client";

import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Magnetic } from "./magnetic";

const buttonVariants = cva(
  "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-medium tracking-tight transition-colors duration-300 will-change-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60",
  {
    variants: {
      variant: {
        primary:
          "bg-cream text-ink-950 hover:bg-white",
        gold: "bg-gold text-ink-950 hover:bg-gold-light",
        outline:
          "border border-white/15 bg-white/[0.03] text-cream hover:border-white/30",
        ghost: "text-cream/80 hover:text-cream",
      },
      size: {
        sm: "h-10 px-5 text-sm",
        md: "h-12 px-7 text-[15px]",
        lg: "h-14 px-9 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
  withArrow?: boolean;
  magnetic?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, children, withArrow, magnetic = true, ...props },
    ref
  ) => {
    const inner = (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      >
        {/* shimmer sweep */}
        <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
        <span className="relative z-10 flex items-center gap-2">
          {children}
          {withArrow && (
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          )}
        </span>
      </button>
    );

    if (magnetic) {
      return <Magnetic strength={0.4}>{inner}</Magnetic>;
    }
    return inner;
  }
);

Button.displayName = "Button";

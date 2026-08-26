"use client";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type Direction = "up" | "left" | "right" | "none";

function buildVariants(direction: Direction) {
  return {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 20 : 0,
      x: direction === "left" ? -24 : direction === "right" ? 24 : 0,
    },
    visible: { opacity: 1, y: 0, x: 0 },
  };
}

interface AnimateInProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function AnimateIn({
  children,
  direction = "up",
  delay = 0,
  duration = 0.55,
  className,
  style,
}: AnimateInProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className} style={style}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-48px" }}
      variants={buildVariants(direction)}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.08,
}: {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-48px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  direction = "up",
  className,
  style,
}: {
  children: ReactNode;
  direction?: Direction;
  className?: string;
  style?: React.CSSProperties;
}) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className} style={style}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      style={style}
      variants={buildVariants(direction)}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

// Legacy aliases
export { AnimateIn as FadeIn };
export { StaggerContainer as StaggerGrid };

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "../utils/cn";

export const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export function Counter({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const value = useMotionValue(0);
  const rounded = useTransform(value, (v) => Math.round(v).toLocaleString("en-US"));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(value, to, { duration: 1.4, ease: EASE });
    return () => controls.stop();
  }, [inView, to, value]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHead({ tag, title, sub }: { tag: string; title: string; sub?: string }) {
  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-[0.22em] text-brand">{tag}</p>
      <h2 className={cn("mt-3 font-display text-4xl leading-[0.95] tracking-[-0.03em] md:text-6xl")}>{title}</h2>
      {sub ? <p className="mt-4 max-w-xl text-base leading-relaxed text-muted md:text-lg">{sub}</p> : null}
    </div>
  );
}

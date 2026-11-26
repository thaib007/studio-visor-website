import { LOGO } from "../assets";
import { cn } from "../utils/cn";

/**
 * The real Studio Visor lockup (mark + wordmark), sized with font-size so any
 * `text-*` class scales it: <Logo className="text-[34px]" />
 */
export function Logo({ tone = "light", className }: { tone?: "light" | "dark"; className?: string }) {
  const dark = tone === "dark";
  return (
    <span className={cn("inline-flex items-center gap-[0.07em] pr-[0.08em] leading-none", className)}>
      <img src={dark ? LOGO.markB : LOGO.markW} alt="" className="h-[1em] w-auto select-none" draggable={false} />
      <img
        src={dark ? LOGO.wordB : LOGO.wordW}
        alt="Studio Visor"
        className="h-[1em] w-auto select-none"
        draggable={false}
      />
    </span>
  );
}

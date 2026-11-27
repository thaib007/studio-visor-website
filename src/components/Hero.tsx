import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { IG, MESSENGER } from "../data/site";
import { cn } from "../utils/cn";
import { EASE } from "./bits";
import { InstagramIcon, MessengerIcon } from "./icons";
import Scene3D from "./Scene3D";

const LINES = ["Edit.", "Thumbnail.", "Automate."];

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: EASE },
});

function Stat({ value, label }: { value: ReactNode; label: string }) {
  return (
    <div>
      <p className="font-display text-4xl leading-none md:text-5xl">{value}</p>
      <p className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-muted">{label}</p>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink pt-28 md:pt-40">
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 pb-10 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6 lg:pb-14">
        <div className="relative z-10">
          <motion.div
            {...fade(0)}
            className="glass inline-flex items-center gap-2.5 rounded-full px-4 py-2 font-mono text-[11px] uppercase tracking-[0.22em] text-[#cfe2fb]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            Uttara, Dhaka — worldwide
          </motion.div>

          <h1 className="mt-6 font-display text-[13vw] leading-[0.95] tracking-[-0.04em] sm:text-[64px] lg:text-[76px] xl:text-[92px]">
            {LINES.map((word, i) => (
              <span key={word} className="-mb-[0.08em] block overflow-hidden pb-[0.08em]">
                <motion.span
                  className={cn("block", i === 1 && "text-brand")}
                  initial={{ y: "108%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: 0.15 + i * 0.12, ease: EASE }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p {...fade(0.5)} className="mt-6 max-w-md text-base leading-relaxed text-muted md:text-lg">
            YouTube content production for creators and brands worldwide.
          </motion.p>

          <motion.div {...fade(0.62)} className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={MESSENGER}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-4 text-sm font-bold uppercase tracking-wider text-ink transition-colors hover:bg-bone active:scale-[0.98]"
            >
              <MessengerIcon className="h-4 w-4" />
              Message us
            </a>
            <a
              href={IG}
              target="_blank"
              rel="noreferrer"
              className="glass inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-bold uppercase tracking-wider text-fg transition-colors hover:border-brand active:scale-[0.98]"
            >
              <InstagramIcon className="h-4 w-4" />
              DM for free fuel
            </a>
          </motion.div>
        </div>

        <div className="relative">
          <Scene3D className="h-[360px] sm:h-[500px] lg:h-[600px]" />
          <p className="pointer-events-none absolute bottom-1 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
            Drag to rotate
          </p>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pb-16 md:px-10">
        <motion.div {...fade(0.8)} className="glass grid grid-cols-1 gap-8 rounded-3xl px-6 py-7 sm:grid-cols-3 md:px-10 md:py-8">
          <Stat value="3" label="Years of Studio Visor" />
          <Stat value="Worldwide" label="Creators and brands" />
          <Stat value="Always open" label="Road 17, Uttara, Dhaka" />
        </motion.div>
      </div>
    </section>
  );
}

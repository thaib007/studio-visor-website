import { MESSENGER, SCOPE, SERVICES, TOOLS } from "../data/site";
import { SectionHead } from "./bits";
import { Reveal } from "./bits";
import { ArrowUpRight } from "./icons";

export default function Services() {
  return (
    <section id="services" className="scroll-mt-20 text-fg">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
        <SectionHead tag="Services" title="What we do." sub="YouTube content production — from Dhaka to creators and brands worldwide." />

        <Reveal className="mt-8 flex flex-wrap gap-2">
          {SCOPE.map((s) => (
            <span key={s} className="rounded-full border border-rule px-4 py-2 font-mono text-xs text-muted">
              {s}
            </span>
          ))}
        </Reveal>

        <div className="mt-10 border-t border-rule md:mt-14">
          {SERVICES.map((s, i) => (
            <Reveal key={s.num} delay={i * 0.05}>
              <a
                href={MESSENGER}
                target="_blank"
                rel="noreferrer"
                className="group relative isolate grid grid-cols-[48px_1fr] items-start gap-x-4 gap-y-2 border-b border-rule py-8 md:grid-cols-[88px_auto_1fr_56px] md:items-center md:gap-x-8 md:py-10"
              >
                <span className="pt-2 font-mono text-sm text-brand md:pt-0 md:text-base">{s.num}</span>

                <span className="font-display text-[44px] uppercase leading-[0.95] transition-colors duration-300 group-hover:text-fg sm:text-6xl md:text-7xl">
                  {s.title}
                </span>

                <span className="col-start-2 max-w-md text-base leading-relaxed text-muted transition-colors duration-300 group-hover:text-[#cfe2fb] md:col-start-3 md:text-lg">
                  {s.line}
                </span>

                <span className="absolute right-0 top-8 grid h-11 w-11 place-items-center rounded-full border border-rule transition-colors duration-300 group-hover:border-fg group-hover:text-fg md:static md:h-14 md:w-14">
                  <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>

                {/* Black fill sweeps in behind the row on hover */}
                <span className="pointer-events-none absolute inset-0 -z-10 origin-top scale-y-0 bg-[#0a2347] transition-transform duration-300 ease-out group-hover:scale-y-100" />
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs uppercase tracking-[0.18em] text-muted">
          <span className="text-brand">Tools</span>
          {TOOLS.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

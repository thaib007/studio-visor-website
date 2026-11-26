import { TEAM } from "../data/site";
import { Reveal, SectionHead } from "./bits";
import TeamDeck from "./TeamDeck";

export default function Team() {
  return (
    <section id="team" className="scroll-mt-20">
      <div className="mx-auto max-w-7xl px-5 py-6 md:px-10 md:py-10">
        <Reveal>
          <div className="glass-strong grid gap-10 rounded-[32px] p-6 md:grid-cols-[0.9fr_1.1fr] md:gap-6 md:p-12 lg:p-16">
            <div className="self-center">
              <SectionHead tag="Team" title="The people behind your growth." sub="Dreamers, thinkers and doers under one roof." />
              <ul className="mt-8 space-y-2 font-mono text-xs uppercase tracking-[0.18em] text-muted">
                {TEAM.map((m) => (
                  <li key={m.id} className="flex justify-between gap-4 border-b border-rule pb-2">
                    <span className="text-fg">{m.name}</span>
                    <span className="text-right">{m.role}</span>
                  </li>
                ))}
              </ul>
            </div>
            <TeamDeck />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

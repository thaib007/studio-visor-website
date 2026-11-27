import { TEAM } from "../data/site";

export default function TeamDeck() {
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {TEAM.map((member, index) => (
        <article key={member.id} className="glass flex min-h-40 flex-col justify-between rounded-3xl p-5">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand">0{index + 1}</p>
          <div>
            <h3 className="font-display text-2xl leading-none">{member.name}</h3>
            <p className="mt-2 text-sm text-muted">{member.role}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

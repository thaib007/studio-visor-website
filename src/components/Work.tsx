import { IG, IG_BIO, WORKS } from "../data/works";
import { InstagramIcon } from "./icons";
import { Reveal, SectionHead } from "./bits";

export function WorkTeaser() {
  return (
    <section className="scroll-mt-20">
      <div className="mx-auto max-w-7xl px-5 py-8 md:px-10">
        <Reveal>
          <a href="#work" className="glass-strong block rounded-[32px] p-8 md:p-14">
            <SectionHead tag="Work" title="Recent cuts." sub={IG_BIO} />
            <p className="mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-brand">
              <InstagramIcon className="h-4 w-4" />
              Open the work page
            </p>
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export default function WorkPage() {
  return (
    <section className="px-5 pb-24 pt-32 md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHead tag="Work" title="From the feed." sub={IG_BIO} />
        {WORKS.length === 0 ? (
          <a
            href={IG}
            target="_blank"
            rel="noreferrer"
            className="glass mt-10 flex max-w-xl flex-col gap-4 rounded-[28px] p-8"
          >
            <InstagramIcon className="h-6 w-6 text-brand" />
            <p className="font-display text-4xl leading-none">@studio.visor</p>
            <p className="text-muted">Recent posts show up here once reel links are added to the fetch script.</p>
          </a>
        ) : (
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {WORKS.map((work) => (
              <a key={work.code} href={work.url} target="_blank" rel="noreferrer" className="group overflow-hidden rounded-3xl border border-rule">
                <img src={work.image} alt="" className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

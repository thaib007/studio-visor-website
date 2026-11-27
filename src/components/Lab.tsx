import { useState } from "react";
import { BACKGROUNDS } from "../assets";
import { Reveal, SectionHead } from "./bits";

export default function Lab() {
  const [active, setActive] = useState(BACKGROUNDS[0].id);
  const [title, setTitle] = useState("THIS CHANGED EVERYTHING");
  const bg = BACKGROUNDS.find((item) => item.id === active) ?? BACKGROUNDS[0];

  return (
    <section id="lab" className="scroll-mt-20">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
        <Reveal>
          <SectionHead
            tag="Lab"
            title="Thumbnail lab."
            sub="A quick look at how a cover comes together. Pick a plate, write the line."
          />
        </Reveal>

        <div className="mt-10 grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative aspect-video overflow-hidden rounded-[28px] border border-rule">
            <img src={bg.src} alt="" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#010b1c] via-transparent to-transparent" />
            <p className="absolute bottom-6 left-6 right-6 font-display text-4xl uppercase leading-[0.9] text-bone sm:text-6xl">
              {title || "YOUR TITLE"}
            </p>
          </div>

          <div>
            <label className="block font-mono text-[11px] uppercase tracking-[0.2em] text-muted" htmlFor="thumb-title">
              Cover line
            </label>
            <input
              id="thumb-title"
              value={title}
              maxLength={42}
              onChange={(event) => setTitle(event.target.value)}
              className="mt-3 w-full rounded-2xl border border-rule bg-deep px-4 py-3 text-fg outline-none focus-visible:border-brand"
            />
            <div className="mt-5 flex flex-wrap gap-2">
              {BACKGROUNDS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActive(item.id)}
                  className={`overflow-hidden rounded-xl border ${item.id === bg.id ? "border-brand" : "border-rule"}`}
                >
                  <img src={item.src} alt={item.label} className="h-14 w-20 object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

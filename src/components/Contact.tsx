import { IG, MESSENGER } from "../data/site";
import { InstagramIcon, MessengerIcon } from "./icons";
import { Reveal, SectionHead } from "./bits";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-28">
        <Reveal>
          <div className="glass-strong rounded-[32px] p-8 md:p-14">
            <SectionHead tag="Contact" title="DM for free fuel." sub="Road 17, Uttara, Dhaka. Creators and brands worldwide." />
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={MESSENGER}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold uppercase tracking-wider text-ink hover:bg-bone"
              >
                <MessengerIcon className="h-4 w-4" />
                Message us
              </a>
              <a
                href={IG}
                target="_blank"
                rel="noreferrer"
                className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold uppercase tracking-wider text-fg"
              >
                <InstagramIcon className="h-4 w-4" />
                Instagram
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Fab() {
  return (
    <a
      href={MESSENGER}
      target="_blank"
      rel="noreferrer"
      aria-label="Message Studio Visor"
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-brand text-ink shadow-lg transition-transform hover:scale-105"
    >
      <MessengerIcon className="h-6 w-6" />
    </a>
  );
}

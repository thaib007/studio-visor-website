import { MESSENGER } from "../data/site";
import { Logo } from "./Logo";

const LINKS = [
  { href: "#services", label: "Services" },
  { href: "#team", label: "Team" },
  { href: "#lab", label: "Lab" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-10">
        <a href="#top" className="text-fg" aria-label="Studio Visor home">
          <Logo className="text-[28px] md:text-[34px]" />
        </a>
        <nav className="hidden items-center gap-6 font-mono text-[11px] uppercase tracking-[0.18em] text-muted md:flex">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-fg">
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href={MESSENGER}
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-brand px-4 py-2 text-[11px] font-bold uppercase tracking-wider text-ink transition-colors hover:bg-bone"
        >
          Message
        </a>
      </div>
    </header>
  );
}

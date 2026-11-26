import { Component, useEffect, type ErrorInfo, type ReactNode } from "react";
import Contact, { Fab } from "./components/Contact";
import Hero from "./components/Hero";
import Lab from "./components/Lab";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Team from "./components/Team";
import WorkPage, { WorkTeaser } from "./components/Work";
import { useRoute } from "./hooks/useRoute";

class Boundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error(error, info);
  }

  render() {
    if (this.state.failed) {
      return (
        <div className="grid min-h-screen place-items-center bg-ink px-6 text-center text-fg">
          <div>
            <p className="font-display text-5xl leading-none">Something broke.</p>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="mt-6 rounded-full bg-brand px-6 py-3 text-sm font-bold uppercase tracking-wider text-ink transition-colors hover:bg-bone"
            >
              Reload
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function App() {
  const { route, anchor } = useRoute();

  // Route changes go to the top; section anchors scroll once the home page is mounted.
  useEffect(() => {
    if (route === "work") {
      window.scrollTo({ top: 0, behavior: "instant" });
      return;
    }
    if (anchor) {
      const el = document.getElementById(anchor);
      if (!el) return;
      requestAnimationFrame(() => el.scrollIntoView({ behavior: "smooth", block: "start" }));
      // smooth scrolls can be interrupted by layout settling — snap precisely afterwards
      const t = window.setTimeout(() => {
        const diff = el.getBoundingClientRect().top;
        if (Math.abs(diff) > 4) window.scrollBy({ top: diff, behavior: "auto" });
      }, 900);
      return () => window.clearTimeout(t);
    }
  }, [route, anchor]);

  return (
    <Boundary>
      <div className="relative min-h-screen font-sans text-fg antialiased">
        {/* Ambient light that the glass panels refract */}
        <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink">
          <div className="animate-drift absolute -top-48 right-[-12%] h-[760px] w-[760px] rounded-full bg-[radial-gradient(closest-side,rgba(4,181,255,0.3),transparent)]" />
          <div className="animate-drift-slow absolute left-[-16%] top-[35%] h-[680px] w-[680px] rounded-full bg-[radial-gradient(closest-side,rgba(4,116,255,0.28),transparent)]" />
          <div className="animate-drift absolute bottom-[-20%] right-[10%] h-[620px] w-[620px] rounded-full bg-[radial-gradient(closest-side,rgba(4,181,255,0.2),transparent)]" />
        </div>

        <Navbar />
        <main>
          {route === "work" ? (
            <WorkPage />
          ) : (
            <>
              <Hero />
              <Services />
              <Team />
              <Lab />
              <WorkTeaser />
              <Contact />
            </>
          )}
          {route === "work" && <Contact />}
        </main>
        <Fab />
      </div>
    </Boundary>
  );
}

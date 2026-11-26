import { useEffect, useState } from "react";

export type Route = "home" | "work";

interface Location {
  route: Route;
  /** section id when the hash points at an anchor (#services, #lab …) */
  anchor: string;
}

const parse = (): Location => {
  const h = window.location.hash.replace(/^#\/?/, "");
  if (h === "work") return { route: "work", anchor: "" };
  return { route: "home", anchor: h };
};

/** Tiny hash router: `#/work` is the Work page, anything else is the home page. */
export function useRoute(): Location {
  const [state, setState] = useState<Location>(parse);

  useEffect(() => {
    const onChange = () => setState(parse());
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  return state;
}

import markW from "./logo-mark-white.png?inline";
import markB from "./logo-mark-black.png?inline";
import wordW from "./logo-word-white.png?inline";
import wordB from "./logo-word-black.png?inline";
import gaming from "./gaming.jpg?inline";
import finance from "./finance.jpg?inline";
import podcast from "./podcast.jpg?inline";
import vlog from "./vlog.jpg?inline";
import fitness from "./fitness.jpg?inline";
import rgb from "./rgb.jpg?inline";

/** Real Studio Visor logo, cut from the Facebook profile picture (black + white versions). */
export const LOGO = { markW, markB, wordW, wordB };

export interface Background {
  id: string;
  label: string;
  src: string;
}

/** Sample backgrounds for the thumbnail lab. */
export const BACKGROUNDS: Background[] = [
  { id: "gaming", label: "Gaming", src: gaming },
  { id: "finance", label: "Finance", src: finance },
  { id: "podcast", label: "Podcast", src: podcast },
  { id: "vlog", label: "Vlog", src: vlog },
  { id: "fitness", label: "Fitness", src: fitness },
  { id: "setup", label: "Setup", src: rgb },
];

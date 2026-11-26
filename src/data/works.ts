/**
 * Recent works from Instagram (@studio.visor).
 *
 * Instagram only exposes posts to logged-in sessions, so this list is filled by
 * `scripts/fetch-ig.mjs`: paste post/reel links into scripts/ig-links.txt and run
 *   node scripts/fetch-ig.mjs
 * Until then the Work page shows the Instagram card instead of an empty grid.
 */
export const IG = "https://www.instagram.com/studio.visor/";

/** The studio's own Instagram bio, lightly reformatted. */
export const IG_BIO =
  "Helping YT owners · Video editing · Thumbnail design · Full automation production · DM for free fuel";

export interface Work {
  code: string;
  url: string;
  image: string;
  video: boolean;
}

export const WORKS: Work[] = [];

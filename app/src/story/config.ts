// Story config for "Two futures for one corner" (Option A).
// Every number shown on screen must come from a file in public/data/ with a source.
// Values marked null are awaiting data. Do not invent them.

export type ChapterId = "today" | "baseline" | "proposal" | "map" | "who";

export interface Chapter {
  id: ChapterId;
  title: string;
  headline: string;
  caveat: string;
  dataFile: string | null; // file under public/data/ that feeds the chapter
}

export const SITE = {
  name: "Lower East Side Cultural Center",
  address: "76 Delancey St, New York, NY 10002",
  rings: { innerMiles: 0.5, outerMiles: 1.0 },
} as const;

export const CHAPTERS: Chapter[] = [
  {
    id: "today",
    title: "The corner today",
    headline: "A public building closed in 1956.",
    caveat: "Site facts from the LESCC proposal deck. Source to confirm.",
    dataFile: "site.json",
  },
  {
    id: "baseline",
    title: "If food trucks stay",
    headline: "What the status quo delivers to the ring.",
    caveat: "Baseline revenue per unit is not public. Shown as a range, not a point.",
    dataFile: "baseline.json",
  },
  {
    id: "proposal",
    title: "If the center opens",
    headline: "Incremental value over the same 25-year term.",
    caveat: "Proposal figures are the applicant's model. Not independently verified.",
    dataFile: "proposal.json",
  },
  {
    id: "map",
    title: "Where the change lands",
    headline: "Activity inside the 0.5 mile ring vs the 1 mile ring.",
    caveat: "Comparison against matched control blocks. Correlation unless the design supports more.",
    dataFile: "map.json",
  },
  {
    id: "who",
    title: "Who it serves",
    headline: "Settlement houses, schools, ESL and youth programs nearby.",
    caveat: "Counts of institutions in the ring. Each needs a source before publication.",
    dataFile: "who.json",
  },
];

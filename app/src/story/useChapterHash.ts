import { useCallback, useEffect, useState } from "react";
import type { ChapterId } from "./config";

/**
 * Keeps the active chapter in sync with the URL hash (#today, #baseline, ...).
 * Unknown or empty hashes fall back to the first chapter.
 */
export function useChapterHash(
  ids: readonly ChapterId[],
): [number, (next: number) => void] {
  const readIndex = useCallback((): number => {
    const id = window.location.hash.replace("#", "") as ChapterId;
    const found = ids.indexOf(id);
    return found === -1 ? 0 : found;
  }, [ids]);

  const [index, setIndex] = useState<number>(readIndex);

  useEffect(() => {
    const onHashChange = () => setIndex(readIndex());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [readIndex]);

  const go = useCallback(
    (next: number) => {
      const clamped = Math.min(Math.max(next, 0), ids.length - 1);
      const target = `#${ids[clamped]}`;
      if (window.location.hash !== target) {
        window.location.hash = target;
      }
      setIndex(clamped);
    },
    [ids],
  );

  return [index, go];
}

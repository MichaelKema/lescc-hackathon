import { useEffect, useMemo } from "react";
import { CHAPTERS, SITE } from "./story/config";
import { useChapterHash } from "./story/useChapterHash";
import "./styles/tokens.css";
import "./App.css";

// One chapter (card) on screen at a time. Hash routes keep each card shareable.
// Numbers load from public/data/ once the pipeline writes them (see scripts/).
function App() {
  const ids = useMemo(() => CHAPTERS.map((chapter) => chapter.id), []);
  const [index, go] = useChapterHash(ids);
  const chapter = CHAPTERS[index];
  const last = CHAPTERS.length - 1;

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") go(index + 1);
      if (event.key === "ArrowLeft") go(index - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, go]);

  return (
    <main className="story">
      <header className="story-header">
        <p className="eyebrow">{SITE.name}</p>
        <h1>Two futures for one corner</h1>
        <p className="address">{SITE.address}</p>
      </header>

      <nav className="progress" aria-label="Chapters">
        {CHAPTERS.map((item, i) => (
          <button
            key={item.id}
            type="button"
            className={i <= index ? "progress-segment is-on" : "progress-segment"}
            aria-label={`Go to ${item.title}`}
            aria-current={i === index ? "step" : undefined}
            onClick={() => go(i)}
          />
        ))}
      </nav>

      {/* key remounts the card so the entrance motion replays on each change */}
      <article
        key={chapter.id}
        id={chapter.id}
        className="card"
        aria-labelledby={`${chapter.id}-title`}
      >
        <p className="chapter-index">
          {String(index + 1).padStart(2, "0")} / {String(CHAPTERS.length).padStart(2, "0")}
        </p>
        <h2 id={`${chapter.id}-title`}>{chapter.title}</h2>
        <p className="headline">{chapter.headline}</p>
        <p className="caveat">{chapter.caveat}</p>
      </article>

      <div className="controls">
        <button type="button" onClick={() => go(index - 1)} disabled={index === 0}>
          Previous
        </button>
        <button type="button" onClick={() => go(index + 1)} disabled={index === last}>
          Next
        </button>
      </div>
    </main>
  );
}

export default App;

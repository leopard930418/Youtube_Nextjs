"use client";

import { useMemo, useState, useEffect } from "react";
import Image from "next/image";
import { ADVICE_TOPICS } from "@/lib/advice-data";

function SearchInput({ value, onChange, resultCount, hasQuery, isLoaded }) {
  return (
    <div className="px-6 pb-6 text-center">
      <h1 className={`pb-4 text-3xl md:text-[2.75rem] font-extrabold tracking-[-0.035em] transition-all duration-[1200ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-12 opacity-0'}`}>Youtube Advice</h1>
      <div className="search-wrap flex justify-center px-0 px-[clamp(0,2vw,20px)] mb-4">
        <div className="search-shell w-full max-w-[560px] flex flex-col gap-3">
          <input
            type="text"
            placeholder="Search topics like thumbnails, ideas, retention..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
            autoComplete="off"
            style={{background: "linear-gradient(135deg, rgba(124, 58, 237, 0.2), rgba(59, 130, 246, 0.12)), rgba(13, 9, 24, 0.96)"}}
            className="w-full max-w-[560px] border border-[rgba(168,85,247,0.26)] rounded-[16px] px-[18px] py-[14px] text-[max(16px,clamp(0.88rem,2vw,0.98rem))] font-medium tracking-[0.01em] outline-none shadow-[0_10px_30px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.05)] transition-[border-color,background,box-shadow,transform] duration-[220ms]"
          />
          <div className="search-meta min-h-[22px] flex justify-center items-center text-[rgba(228,214,245,0.72)] text-[0.83rem] tracking-[0.01em] text-center">
            {hasQuery
              ? `${resultCount} topic${resultCount === 1 ? "" : "s"} found`
              : "Search across all advice topics."}
          </div>
        </div>
      </div>
    </div>
  );
}

function TopicCard({ topic }) {
  return (
    <button
      type="button"
      style={{
        "--accent": topic.accent,
      }}
      className="
        group relative
        h-[200px] w-full
        overflow-hidden
        text-left
        rounded-[14px]
        border border-white/10
        bg-black/40
        shadow-[0_4px_20px_rgba(0,0,0,0.4)]
        transition-all duration-300
        ease-[cubic-bezier(0.22,1,0.36,1)]
        hover:border-[var(--accent)]
        hover:shadow-[0_8px_30px_rgba(0,0,0,0.55),0_0_20px_var(--accent)]
        relative before:content-[''] before:absolute before:top-0 before:left-0 before:bottom-0 before:w-[3px] before:bg-[var(--accent)] before:z-3 before:rounded-l-[14px] before:rounded-tr-0 before:opacity-90
      "
    >
      {/* IMAGE */}
      <Image
        src={topic.image}
        alt={topic.title}
        fill
        className="
          object-cover
          transition-transform duration-500
          group-hover:scale-[1.06]
          "
        sizes="(max-width: 600px) 100vw, 33vw"
      />

      {/* DARK + ACCENT OVERLAY */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.88)), linear-gradient(135deg, color-mix(in srgb, var(--accent), transparent 64%), transparent 62%)',
        }}
      />

      {/* BOTTOM ACCENT GRADIENT */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[90px] pointer-events-none z-[1]"
        style={{
          background: 'linear-gradient(to_top, color-mix(in_srgb, var(--accent) 28%, transparent), transparent)',
        }}
      />

      {/* ACCENT GLOW LAYER */}
      <div
        className="
          absolute inset-0
          opacity-0  
          transition-opacity duration-300
          pointer-events-none
        "
        style={{
          background:
            "radial-gradient(circle at bottom, var(--accent), transparent 60%)",
        }}
      />

      {/* CONTENT */}
      <div className="absolute bottom-0 left-0 right-0 z-10 px-[18px] py-4 pb-[14px]">
        <h2 className="text-[1.15rem] font-extrabold text-white leading-[1.35] tracking-[-0.01em] mb-1">
          {topic.title}
        </h2>

        <p className="text-[0.78rem] text-white/70 leading-[1.6]">
          {topic.description}
        </p>
      </div>
    </button>
  );
}

function EmptyState({ query }) {
  return (
    <div className="px-6 py-16 text-center text-gray-300">
      No advice topics matched <strong>&ldquo;{query}&rdquo;</strong>.
      <p className="mt-2 text-sm text-gray-500">
        Try broader keywords like ideas, thumbnails, tools, retention, or
        branding.
      </p>
    </div>
  );
}

function TopicModal({ topic, onClose }) {
  if (!topic) return null;

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="max-h-[80vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-white/10 bg-surface-elevated p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <h2 className="text-2xl font-bold text-accent">{topic.title}</h2>
          <button
            type="button"
            onClick={onClose}
            className="text-2xl text-gray-400 hover:text-white"
            aria-label="Close"
          >
            &times;
          </button>
        </div>
        <p className="mt-4 text-gray-300">{topic.description}</p>
        <p className="mt-6 text-sm text-gray-500">
          Detailed advice content is coming soon. Check back for the full guide
          on {topic.title.toLowerCase()}.
        </p>
      </div>
    </div>
  );
}

export default function AdviceGrid() {
  const [query, setQuery] = useState("");
  const [activeTopic, setActiveTopic] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return ADVICE_TOPICS;
    return ADVICE_TOPICS.filter(
      (topic) =>
        topic.title.toLowerCase().includes(q) ||
        topic.description.toLowerCase().includes(q) ||
        topic.search.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <>
      <SearchInput
        value={query}
        onChange={setQuery}
        resultCount={filtered.length}
        hasQuery={query.trim().length > 0}
        isLoaded={isLoaded}
      />

      {filtered.length === 0 ? (
        <EmptyState query={query} />
      ) : (
        <div className={`mx-auto grid max-w-6xl grid-cols-1 gap-5 px-6 pb-16 sm:px-28 sm:grid-cols-2 lg:grid-cols-3 transition-all duration-[1200ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          {filtered.map((topic) => (
            <TopicCard
              key={topic.id}
              topic={topic}
            />
          ))}
        </div>
      )}

      <TopicModal topic={activeTopic} onClose={() => setActiveTopic(null)} />
    </>
  );
}

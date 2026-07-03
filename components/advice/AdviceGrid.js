"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { ADVICE_TOPICS } from "@/lib/advice-data";

function SearchInput({ value, onChange, resultCount, hasQuery }) {
  return (
    <div className="px-6 pb-6 pt-8 text-center">
      <h1 className="text-3xl font-bold md:text-4xl">YouTube Advice</h1>
      <div className="mx-auto mt-6 max-w-xl">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search topics like thumbnails, ideas, retention..."
          className="w-full rounded-2xl border border-white/15 bg-white/5 px-5 py-4 text-white placeholder:text-gray-500 outline-none focus:border-accent"
        />
        <p className="mt-2 text-sm text-gray-400">
          {hasQuery
            ? `${resultCount} topic${resultCount === 1 ? "" : "s"} found`
            : "Search across all advice topics."}
        </p>
      </div>
    </div>
  );
}

function TopicCard({ topic, onClick }) {
  return (
    <button
      type="button"
      onClick={() => onClick(topic)}
      className="group relative aspect-16/10 overflow-hidden rounded-2xl border border-white/10 text-left shadow-lg transition hover:-translate-y-1 hover:border-accent/50"
      style={{ "--accent-color": topic.accent }}
    >
      <Image
        src={topic.image}
        alt={topic.title}
        fill
        className="object-cover transition duration-300 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5">
        <h2 className="text-xl font-bold">{topic.title}</h2>
        <p className="mt-1 text-sm text-gray-300">{topic.description}</p>
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
      />

      {filtered.length === 0 ? (
        <EmptyState query={query} />
      ) : (
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 px-6 pb-16 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((topic) => (
            <TopicCard
              key={topic.id}
              topic={topic}
              onClick={setActiveTopic}
            />
          ))}
        </div>
      )}

      <TopicModal topic={activeTopic} onClose={() => setActiveTopic(null)} />
    </>
  );
}

"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { ADVICE_TOPICS } from "@/lib/advice-data";

function SearchInput() {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <div className="px-6 pb-6 pt-8 text-center">
      <h1 className="text-3xl font-bold md:text-4xl">YouTube Advice</h1>
      <div className="search-wrap flex justify-center px-0 px-[clamp(0,2vw,20px)] mb-4">
            <div className="search-shell w-full max-w-[560px] flex flex-col gap-3">
                <input
                    type="text"
                    placeholder="Search topics like thumbnails, ideas, retention..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoComplete="off"
                    className="w-full max-w-[560px] bg-[linear-gradient(135deg,rgba(124,58,237,0.2),rgba(59,130,246,0.12)),rgba(13,9,24,0.96)] border border-[rgba(168,85,247,0.26)] rounded-[16px] px-[18px] py-[14px] text-white font-sans text-[max(16px,clamp(0.88rem,2vw,0.98rem))] font-medium tracking-[0.01em] outline-none shadow-[0_10px_30px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.05)] transition-all duration-[220ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-[rgba(168,85,247,0.38)] hover:bg-[linear-gradient(135deg,rgba(124,58,237,0.24),rgba(59,130,246,0.15)),rgba(15,10,27,0.98)] focus:border-[rgba(168,85,247,0.6)] focus:bg-[linear-gradient(135deg,rgba(124,58,237,0.28),rgba(59,130,246,0.18)),rgba(16,10,30,1)] focus:shadow-[0_0_0_4px_rgba(168,85,247,0.16),0_18px_42px_rgba(88,28,135,0.22)] focus:-translate-y-1 placeholder:text-[rgba(228,214,245,0.62)]"
                />
                <div className="search-meta min-h-[22px] flex justify-center items-center text-[rgba(228,214,245,0.72)] text-[0.83rem] tracking-[0.01em] text-center">
                    Search across all advice topics.
                </div>
            </div>
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

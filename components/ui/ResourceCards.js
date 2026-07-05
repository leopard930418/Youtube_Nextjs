'use client';

import { useState, useEffect } from "react";
import Link from "next/link";

export default function ResourceCards({ items }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 px-6 py-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
      {items.map((item, index) => (
        <Link
          key={item.href}
          href={item.href}
          className="group flex h-72 flex-col items-center justify-center gap-4 rounded-3xl border-2 border-white/70 bg-white/[0.04] p-6 text-center shadow-[0_4px_24px_rgba(0,0,0,0.3)] transition hover:border-white/50 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)]"
          style={{
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
            transition: `all 700ms cubic-bezier(0.25,0.46,0.45,0.94) ${index * 100}ms`
          }}
        >
          <span className="text-7xl transition-transform duration-300 ease-out group-hover:scale-120 [text-shadow:0_0_8px_rgba(255,255,255,0.9),0_0_20px_rgba(255,255,255,0.5)]">
            {item.emoji}
          </span>
          <span className="text-lg font-semibold text-white mt-4 [text-shadow:0_0_8px_rgba(255,255,255,0.9),0_0_20px_rgba(255,255,255,0.5)]">{item.label}</span>
        </Link>
      ))}
    </div>
  );
}

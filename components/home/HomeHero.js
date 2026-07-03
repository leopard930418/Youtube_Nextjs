"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useAnimatedCounter } from "@/lib/hooks";

const THUMB_INDICES = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 1, 2, 3, 4, 5,
];

export default function HomeHero() {
  useEffect(() => {
    const key = "yggHomeThumbIntroSeen";
    const grid = document.querySelector(".thumbnails-multiline");
    if (grid) {
      let shouldAnimate = true;
      try {
        shouldAnimate = sessionStorage.getItem(key) !== "1";
        sessionStorage.setItem(key, "1");
      } catch {
        shouldAnimate = true;
      }
      grid.classList.toggle("thumbs-intro", shouldAnimate);
    }
  }, []);

  return (
    <section className="relative min-h-145 overflow-hidden bg-surface md:min-h-165">
      <GradientOrb className="-left-44 -top-28" color="accent" size={520} />
      <GradientOrb className="-bottom-20 -right-24" color="cyan" size={400} />

      <div className="thumbnails-multiline absolute inset-0 grid grid-cols-2 md:grid-cols-4 md:grid-rows-4">
        {THUMB_INDICES.map((num, i) => (
          <ThumbnailImage key={`${num}-${i}`} num={num} index={i} />
        ))}
      </div>

      <div className="absolute inset-0 z-2 bg-black/0" />

      <HeroOverlay />
    </section>
  );
}

function GradientOrb({ className, color, size }) {
  const colors = {
    accent: "rgba(255,31,143,0.28)",
    cyan: "rgba(0,212,255,0.22)",
  };

  return (
    <div
      className={`pointer-events-none absolute rounded-full ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${colors[color]} 0%, transparent 68%)`,
      }}
    />
  );
}

function ThumbnailImage({ num, index }) {
  return (
    <div className="hero-thumb-picture relative overflow-hidden">
      <Image
        src={`/Thumbnails/thumb${num}.webp`}
        alt={`Thumbnail ${index + 1}`}
        fill
        className="object-cover transition-transform duration-300 hover:scale-105"
        sizes="(max-width: 600px) 50vw, 25vw"
        priority={index === 0}
      />
    </div>
  );
}

function HeroOverlay() {
  return (
    <div className="absolute left-1/2 top-1/2 z-3 w-[min(88vw,690px)] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/10 bg-black/60 px-8 py-10 text-center backdrop-blur-md md:px-10">
      <p className="w-full text-center font-extrabold leading-[1.06] tracking-[-0.04em] text-[clamp(2.6rem,6vw,4.2rem)] text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.9)] [text-shadow:0_0_60px_rgba(0,0,0,0.7)] mb-5">
        We help overcome challenges
      </p>
      <p className="mt-3 px-3 text-2xl italic text-gray-300 md:text-2xl">
        Join the all-in-one ecosystem that helps guide creators for free
      </p>
      <Link
        href="/resources"
        className="relative inline-flex items-center justify-center px-10 py-4 rounded-full bg-[#FF2B9D] text-white font-semibold hover:bg-[#FF3AA8] transition-colors mt-6 after:content-[''] after:absolute after:inset-[-3px] after:rounded-[999px] after:shadow-[0_0_28px_rgba(255,31,143,0.55)] after:pointer-events-none"
      >
        Get started
      </Link>
    </div>
  );
}

export function StatsCounter({ target = 1000 }) {
  const ref = useAnimatedCounter(target);

  return (
    <div ref={ref} className="text-5xl font-extrabold tracking-tight">
      0+
    </div>
  );
}

'use client';

import { useState, useEffect } from "react";
import Image from "next/image";

export default function ComingSoon({
  title = "We're Extending Soon",
  description = "The YouTube Growth Guide is growing soon. Stay tuned!",
  image = "/comming.webp",
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-[720px] flex items-center justify-center overflow-hidden bg-[#05060f] px-6">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(79,140,255,0.18),transparent_60%)]" />

      {/* GRID DOT BACKGROUND */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(#2b2f55 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* CARD */}
      <div className="relative z-10 h-[500px] text-center border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.6)]">

        {/* TITLE */}
        <h1 className={`text-3xl md:text-[56px] font-extrabold leading-tight text-white transition-all duration-[1200ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-12 opacity-0'}`}>
          We&apos;re Extending{" "}
          <span className="text-[#7aa2ff]">Soon</span>
        </h1>

        {/* SUBTITLE */}
        <div className="flex justify-center">
          <p className="w-[65%] mt-4 text-gray-300 text-base md:text-lg">
            {description}
          </p>
        </div>

        {/* SPACED SOON TEXT */}
        <p className="mt-6 text-cyan-400 tracking-[0.35em] text-sm font-medium">
          SOON...
        </p>

        {/* IMAGE */}
        <div className="flex justify-center">
          <Image
            src={image}
            alt="Coming Soon"
            width={320}
            height={320}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
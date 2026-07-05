'use client';

import { useState, useEffect } from 'react';
import { TeamMemberCard } from "@/components/ui";
import { TEAM_MEMBERS } from "@/lib/site-config";

export default function TeamContent() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative w-full py-6 md:py-16 text-white bg-[#070812]">

      {/* TITLE */}
      <div className={`text-center transition-all duration-[700ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-12 opacity-0'}`}>
        <h2 className="flex flex-col items-center gap-[12px] text-center m-[0_0_clamp(22px,4vw,5px)] text-[32px] md:text-[48px] font-black leading-[.98] tracking-[-0.055em] animate-none bg-clip-text text-transparent" style={{
          backgroundImage: 'linear-gradient(92deg, #fff 0%, #dce9ff 42%, #9ed8ff 78%, #fff 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          Our Team
        </h2>

        {/* neon underline */}
        <div className="mx-auto mt-3 h-[3px] w-20 bg-[#ffd600] rounded-[2px] opacity-70" />
        <div className="mx-auto mt-3 h-1 w-25 bg-gradient-to-r from-transparent via-[#ffd43b] to-transparent rounded-[2px]" />
      </div>

      {/* TEAM CONTENT */}
      <div className="flex justify-center items-center">
        <div
          className={`py-12 md:mt-16 md:mb-16 w-full md:w-5/12 flex justify-center relative overflow-visible isolate rounded-xl shadow-[inset_0_0_28px_rgba(0,0,0,0.24),0_18px_55px_rgba(0,0,0,0.42)] before:content-[''] before:absolute before:inset-[8px_10%] before:bg-[radial-gradient(ellipse_at_center,rgba(255,214,0,0.18)_0%,rgba(255,214,0,0.08)_36%,transparent_72%)] before:blur-[12px] before:pointer-events-none before:z-0 bg-[#090d0e] transition-all duration-[700ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
        >

          {TEAM_MEMBERS.map((member) => (
            <TeamMemberCard key={member.name} member={member} showQuote={false} />
          ))}
        </div>
      </div>
    </section>
  );
}

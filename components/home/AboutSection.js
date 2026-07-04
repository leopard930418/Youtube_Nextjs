"use client";

import Image from "next/image";
import { HOME_PERKS, TEAM_MEMBERS } from "@/lib/site-config";
import { StatsCounter } from "./HomeHero";
import { TeamMemberCard } from "@/components/ui";

export default function AboutSection() {
  const owner = TEAM_MEMBERS[0];

  return (
    <>
      <div className="flex justify-center px-4 py-15">
        <Image
          src="/logo.svg"
          alt="YouTube Growth Guide Logo"
          width={1200}
          height={400}
          className="h-auto w-full max-w-3xl transition-transform duration-500 ease hover:scale-105 shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
        />
      </div>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid gap-5 md:grid-cols-2">
          <div 
            className="rounded-2xl border border-white/10 bg-[#141820]/80 px-17 py-8 text-center shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-all duration-300"
            style={{
              transition: 'border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.22)';
              e.currentTarget.style.boxShadow = '0 26px 78px rgba(0, 0, 0, 0.42), 0 0 54px rgba(79, 140, 255, 0.16)';
              e.currentTarget.style.transform = 'translateY(-8px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '';
              e.currentTarget.style.boxShadow = '';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >

            {/* TITLE */}
            <h2 className="text-3xl font-extrabold text-[#ff2d95] tracking-tight">
              Perks
            </h2>

            {/* SUBTITLE */}
            <p className="mt-2 text-xl text-white/90">
              Why use our website?
            </p>

            {/* GRID */}
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {HOME_PERKS.map((perk) => (
                <div
                  key={perk.label}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-left transition-all duration-200 hover:bg-white/10 hover:border-[#ff2d95]/30 hover:shadow-[0_0_20px_rgba(255,45,149,0.15)] shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
                >
                  <span className="text-xl">{perk.emoji}</span>
                  <span className="text-sm font-medium text-white/90">
                    {perk.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div 
            className="flex flex-col justify-center items-center rounded-2xl border border-white/10 bg-[#141820]/80 p-8 text-center shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-all duration-300"
            style={{
              transition: 'border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.22)';
              e.currentTarget.style.boxShadow = '0 26px 78px rgba(0, 0, 0, 0.42), 0 0 54px rgba(79, 140, 255, 0.16)';
              e.currentTarget.style.transform = 'translateY(-8px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '';
              e.currentTarget.style.boxShadow = '';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <div className="flex flex-col justify-center items-center text-center">
              <h2 className="text-3xl font-extrabold text-[#ff2d95] tracking-tight">
                By the Numbers
              </h2>
              <StatsCounter target={1000} />
              <p className="mt-2 text-5xl font-extrabold text-gray-400">
                Members
              </p>
            </div>
          </div>

          <div 
            className="rounded-2xl border border-white/10 bg-[#141820]/80 p-6 text-center md:col-span-2 transition-all duration-300"
            style={{
              transition: 'border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.22)';
              e.currentTarget.style.boxShadow = '0 26px 78px rgba(0, 0, 0, 0.42), 0 0 54px rgba(79, 140, 255, 0.16)';
              e.currentTarget.style.transform = 'translateY(-8px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '';
              e.currentTarget.style.boxShadow = '';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <h2 className="text-3xl font-extrabold text-accent">Our Mission</h2>
            <p className="mx-auto mt-4 max-w-3xl text-gray-200">
              We provide the best resources to help make your content creation
              journey easier — at the cost of nothing.
            </p>
          </div>

          <div 
            className="flex justify-center rounded-2xl border border-white/10 bg-[#15151f] p-6 md:col-span-2 transition-all duration-300"
            style={{
              transition: 'border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.22)';
              e.currentTarget.style.boxShadow = '0 26px 78px rgba(0, 0, 0, 0.42), 0 0 54px rgba(79, 140, 255, 0.16)';
              e.currentTarget.style.transform = 'translateY(-8px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '';
              e.currentTarget.style.boxShadow = '';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <TeamMemberCard member={owner} showQuote />
          </div>
        </div>
      </section>
    </>
  );
}

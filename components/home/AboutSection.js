import Image from "next/image";
import { HOME_PERKS, TEAM_MEMBERS } from "@/lib/site-config";
import { StatsCounter } from "./HomeHero";
import { TeamMemberCard } from "@/components/ui";

export default function AboutSection() {
  const owner = TEAM_MEMBERS[0];

  return (
    <>
      <div className="flex justify-center px-4 py-8">
        <Image
          src="/logo.svg"
          alt="YouTube Growth Guide Logo"
          width={600}
          height={200}
          className="h-auto w-full max-w-3xl"
        />
      </div>

      <section className="mx-auto max-w-4xl px-6 pb-16">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-surface-elevated p-6 text-center transition hover:border-accent/50">
            <h2 className="text-2xl font-extrabold text-accent">Perks</h2>
            <p className="mt-2 text-lg text-white">Why use our website?</p>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {HOME_PERKS.map((perk) => (
                <div
                  key={perk.label}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/2.5 p-3 text-left"
                >
                  <span className="text-xl">{perk.emoji}</span>
                  <span className="text-sm font-medium">{perk.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-surface-elevated p-6 text-center">
            <h2 className="text-2xl font-extrabold text-accent">
              By the Numbers
            </h2>
            <StatsCounter />
            <div className="mt-1 text-4xl font-extrabold">Members</div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-surface-elevated p-6 text-center md:col-span-2">
            <h2 className="text-2xl font-extrabold text-accent">Our Mission</h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-200">
              We provide the best resources to help make your content creation
              journey easier — at the cost of nothing.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-surface-elevated p-6 md:col-span-2">
            <TeamMemberCard member={owner} showQuote />
          </div>
        </div>
      </section>
    </>
  );
}

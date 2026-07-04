import { PageLayout } from "@/components/layout";
import { PageHero, TeamMemberCard } from "@/components/ui";
import { TEAM_MEMBERS } from "@/lib/site-config";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Our Team",
  description: "Meet the team behind YouTube Growth Guide.",
  path: "/team",
});

export default function TeamPage() {
  return (
    <PageLayout>
      <section className="relative w-full py-20 text-white bg-[#070812]">

        {/* TITLE */}
        <div className="text-center">
          <h2 className="flex flex-col items-center gap-[12px] text-center m-[0_0_clamp(26px,4vw,5px)] text-[clamp(2.35rem,5vw,4.25rem)] font-black leading-[.98] tracking-[-0.055em] animate-none bg-clip-text text-transparent" style={{
            backgroundImage: 'linear-gradient(92deg, #fff 0%, #dce9ff 42%, #9ed8ff 78%, #fff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Our Team
          </h2>

          {/* neon underline */}
          <div className="mx-auto mt-3 h-[3px] w-24 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 rounded-full" />
        </div>

        {/* TEAM CONTENT */}
        <div className="flex justify-center items-center">
          <div
            className="py-12 mb-16 w-5/12 flex justify-center relative overflow-visible isolate rounded-xl border-2 border-black shadow-[inset_0_0_28px_rgba(0,0,0,0.24),0_18px_55px_rgba(0,0,0,0.42)] before:content-[''] before:absolute before:inset-[8px_10%] before:bg-[radial-gradient(ellipse_at_center,rgba(255,214,0,0.18)_0%,rgba(255,214,0,0.08)_36%,transparent_72%)] before:blur-[12px] before:pointer-events-none before:z-0 bg-[#090d0e]"
          >

            {TEAM_MEMBERS.map((member) => (
              <TeamMemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

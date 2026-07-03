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
      <PageHero title="Our Team" />
      <div className="flex justify-center items-center">
        <div
          className="py-12 mb-16 w-5/12 flex justify-center relative overflow-visible isolate rounded-xl border-2 border-black shadow-[inset_0_0_28px_rgba(0,0,0,0.24),0_18px_55px_rgba(0,0,0,0.42)] before:content-[''] before:absolute before:inset-[8px_10%] before:bg-[radial-gradient(ellipse_at_center,rgba(255,214,0,0.18)_0%,rgba(255,214,0,0.08)_36%,transparent_72%)] before:blur-[12px] before:pointer-events-none before:z-0 bg-[#090d0e]"
        >

          {TEAM_MEMBERS.map((member) => (
            <TeamMemberCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </PageLayout>
  );
}

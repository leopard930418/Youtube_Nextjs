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
      <div className="mx-auto flex max-w-md flex-col items-center gap-8 px-6 pb-16">
        {TEAM_MEMBERS.map((member) => (
          <TeamMemberCard key={member.name} member={member} />
        ))}
      </div>
    </PageLayout>
  );
}

import { PageLayout } from "@/components/layout";
import { PageHero, TeamMemberCard } from "@/components/ui";
import { TEAM_MEMBERS } from "@/lib/site-config";
import { createMetadata } from "@/lib/metadata";
import TeamContent from "./TeamContent";

export const metadata = createMetadata({
  title: "Our Team",
  description: "Meet the team behind YouTube Growth Guide.",
  path: "/team",
});

export default function TeamPage() {
  return (
    <PageLayout>
      <TeamContent />
    </PageLayout>
  );
}

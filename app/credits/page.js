import { PageLayout } from "@/components/layout";
import { PageHero, SectionContainer } from "@/components/ui";
import { CreditsList } from "@/components/credits";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Credits",
  description: "Contributors to YouTube Growth Guide.",
  path: "/credits",
});

export default function CreditsPage() {
  return (
    <PageLayout>
      <PageHero
        title="Credits"
        subtitle="Thank you to everyone who has contributed their work to the YouTube Growth Guide website! This whole project wouldn't be possible without the amazing work you've allowed us to put in."
      />
      <SectionContainer size="narrow">
        <CreditsList />
      </SectionContainer>
    </PageLayout>
  );
}

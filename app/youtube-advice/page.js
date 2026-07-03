import { PageLayout } from "@/components/layout";
import { AdviceGrid } from "@/components/advice";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "YouTube Advice",
  description: "Free YouTube growth advice and creator tips.",
  path: "/youtube-advice",
});

export default function YoutubeAdvicePage() {
  return (
    <PageLayout>
      <AdviceGrid />
    </PageLayout>
  );
}

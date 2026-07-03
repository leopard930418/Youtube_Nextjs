import { PageLayout } from "@/components/layout";
import { ComingSoon } from "@/components/ui";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Assets - YouTube Growth Guide",
  description:
    "Explore creator assets and resources from YouTube Growth Guide.",
  path: "/assets",
});

export default function AssetsPage() {
  return (
    <PageLayout>
      <ComingSoon
        title="We're Extending Soon"
        description="The YouTube Growth Guide is growing soon. Stay tuned!"
      />
    </PageLayout>
  );
}

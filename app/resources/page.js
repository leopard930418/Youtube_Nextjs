import { PageLayout } from "@/components/layout";
import { HeroBanner, ResourceCards } from "@/components/ui";
import { RESOURCE_CARDS } from "@/lib/site-config";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "YouTube Resources",
  description:
    "Access free YouTube advice, tutorials, and creator resources.",
  path: "/resources",
});

export default function ResourcesPage() {
  return (
    <PageLayout>
      <HeroBanner
        title="Get The Best Resources"
        subtitle="Access the highest-quality YouTube advice for free to help you reach your goals."
      />
      <ResourceCards items={RESOURCE_CARDS} />
    </PageLayout>
  );
}

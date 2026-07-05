import { PageLayout } from "@/components/layout";
import { HeroBanner, ResourceCards } from "@/components/ui";
import { RESOURCE_CARDS } from "@/lib/site-config";
import { createMetadata } from "@/lib/metadata";
import ResourcesContent from "./ResourcesContent";

export const metadata = createMetadata({
  title: "YouTube Resources",
  description:
    "Access free YouTube advice, tutorials, and creator resources.",
  path: "/resources",
});

export default function ResourcesPage() {
  return (
    <PageLayout>
      <ResourcesContent />
    </PageLayout>
  );
}

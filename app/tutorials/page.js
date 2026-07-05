import { PageLayout } from "@/components/layout";
import TutorialsLegacyContent from "@/components/tutorials/TutorialsLegacyContent";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Tutorials",
  description: "Free editing, graphic design, and motion design tutorials.",
  path: "/tutorials",
});

export default function TutorialsPage() {
  return (
    <PageLayout className="tutorials-page" showFooter={false}>
      <TutorialsLegacyContent />
    </PageLayout>
  );
}

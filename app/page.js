import { PageLayout } from "@/components/layout";
import { HomeHero, AboutSection } from "@/components/home";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "YouTube Growth Guide",
  description:
    "We provide the best high-quality resources available to help make your content creation journey easier — at the cost of nothing.",
  path: "/",
});

export default function HomePage() {
  return (
    <PageLayout>
      <HomeHero />
      <AboutSection />
    </PageLayout>
  );
}

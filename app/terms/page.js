import { PageLayout } from "@/components/layout";
import { LegalContent } from "@/components/legal";
import { CONTACT_EMAIL } from "@/lib/site-config";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Terms of Service",
  description: "Terms of Service for YouTube Growth Guide.",
  path: "/terms",
});

const TERMS_CONTENT = [
  {
    title: "1. Acceptance of Terms",
    content:
      "By accessing and using YouTube Growth Guide, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Website.",
  },
  {
    title: "2. Use of Resources",
    content:
      "All resources provided on YouTube Growth Guide are available for free for both personal and commercial use, unless otherwise stated on the specific resource. Some assets may require attribution to the original creator, which will be clearly indicated on the resource page.",
  },
  {
    title: "3. Limitation of Liability",
    content:
      "All resources and tools on YouTube Growth Guide are provided \"as is\" without any warranties, expressed or implied. In no event shall YouTube Growth Guide be liable for any damages including, but not limited to, direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use the Website, its resources, or its tools.",
  },
  {
    title: "4. Copyright and Intellectual Property",
    content:
      "The content on YouTube Growth Guide, including but not limited to text, graphics, logos, and software, is either the property of YouTube Growth Guide or used with permission from the respective creators.",
  },
  {
    title: "5. Copyright Issues",
    content:
      "YouTube Growth Guide is a free library of community-submitted and openly available resources for content creators. While we strive to ensure that most assets are copyright-free or licensed for commercial use, we do not and cannot guarantee that every resource is completely copyright-free.",
  },
  {
    title: "6. User Conduct",
    content: "Users of YouTube Growth Guide agree not to:",
    list: [
      "Use the Website for any unlawful or malicious purpose",
      "Attempt to gain unauthorized access to any part of the Website or its servers",
      "Resell, redistribute, or reupload resources from the Website as their own",
      "Falsely claim ownership or authorship of any resource found on the Website",
    ],
  },
  {
    title: "7. Changes to Terms",
    content:
      "YouTube Growth Guide reserves the right to modify or update these Terms of Service at any time without prior notice.",
  },
];

export default function TermsPage() {
  return (
    <PageLayout>
      <LegalContent title="Terms of Service" lastUpdated="March 14, 2026">
        <p>
          Welcome to YouTube Growth Guide. These Terms of Service
          (&ldquo;Terms&rdquo;) govern your use of our website and services. By
          accessing or using our platform, you agree to be bound by these Terms.
        </p>
        {TERMS_CONTENT.map((section) => (
          <section key={section.title}>
            <h3>{section.title}</h3>
            <p>{section.content}</p>
            {section.list && (
              <ul>
                {section.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
        <h3>8. Contact Information</h3>
        <p>
          If you have any questions about these Terms of Service, please reach
          out at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </p>
      </LegalContent>
    </PageLayout>
  );
}

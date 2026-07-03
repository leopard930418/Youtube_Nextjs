import { PageLayout } from "@/components/layout";
import { LegalContent } from "@/components/legal";
import { CONTACT_EMAIL } from "@/lib/site-config";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description: "Privacy Policy for YouTube Growth Guide.",
  path: "/privacy",
});

const PRIVACY_CONTENT = [
  {
    title: "1. Information We Collect",
    content: `YouTube Growth Guide is committed to protecting your privacy. We do not collect personal information such as names, emails, or phone numbers. The only data we collect is limited to standard web server logs.`,
    list: [
      "IP addresses",
      "Browser type and version",
      "Device type",
      "Pages visited and referring URLs",
      "Time and date of access",
    ],
  },
  {
    title: "2. How We Use Information",
    content:
      "The information we collect is used exclusively to monitor site performance, detect technical issues, and understand general usage trends to improve the website experience.",
  },
  {
    title: "3. Cookies",
    content:
      "YouTube Growth Guide uses cookies for essential site functionality and user experience. These cookies do not contain personal data and are never used for advertising or tracking you across other websites.",
  },
  {
    title: "4. Third-Party Services",
    content:
      "We may use privacy-respecting analytics tools to understand aggregate website traffic and usage.",
  },
  {
    title: "5. External Links",
    content:
      "Our website may link to third-party sites or tools. We are not responsible for the content or privacy practices of those external websites.",
  },
  {
    title: "6. Data Security",
    content:
      "We take reasonable steps to secure all data collected through encrypted connections (HTTPS) and limited-access server environments.",
  },
  {
    title: "7. Children's Privacy",
    content: "YouTube Growth Guide is not intended for children under the age of 13.",
  },
  {
    title: "8. Your Data Rights",
    content:
      "You have the right to request access to any data we may hold about you, or to request deletion of that data.",
  },
  {
    title: "9. Changes to This Policy",
    content:
      "We may update this Privacy Policy to reflect changes to our practices or for legal reasons.",
  },
];

export default function PrivacyPage() {
  return (
    <PageLayout>
      <LegalContent title="Privacy Policy" lastUpdated="March 14, 2026">
        {PRIVACY_CONTENT.map((section) => (
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
        <h3>10. Contact Information</h3>
        <p>
          If you have any questions about your privacy on YouTube Growth Guide,
          please send us a message at{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </p>
      </LegalContent>
    </PageLayout>
  );
}

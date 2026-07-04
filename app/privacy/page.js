import { PageLayout } from "@/components/layout";
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
  {
    title: "10. Contact Information",
    content: "If you have any questions about your privacy on YouTube Growth Guide, please send us a message at",
    email: CONTACT_EMAIL,
  },
];

export default function PrivacyPage() {
  return (
    <PageLayout showFooter={false}>
      <section className="relative w-full py-20 text-white bg-[#070812]">

        {/* TITLE */}
        <div className="text-center">
          <h2 className="flex flex-col items-center gap-[12px] text-center m-[0_0_clamp(26px,4vw,5px)] text-[clamp(2.35rem,5vw,4.25rem)] font-black leading-[.98] tracking-[-0.055em] animate-none bg-clip-text text-transparent" style={{
            backgroundImage: 'linear-gradient(92deg, #fff 0%, #dce9ff 42%, #9ed8ff 78%, #fff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Privacy Policy
          </h2>

          {/* neon underline */}
          <div className="mx-auto mt-3 h-[3px] w-24 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 rounded-full" />
        </div>

        {/* MAIN CARD */}
        <div className="w-full flex justify-center mt-8">
          <div className="relative p-12 w-[min(95vw,960px)] rounded-4xl border border-white/10 bg-[#141722]/80 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.6)] overflow-hidden">

            {/* TOP ACCENT LINE */}
            <div className="bg-[linear-gradient(90deg,#ff1f8f,#ffd600,#00d4ff)] opacity-95 shadow-[0_0_20px_rgba(255,31,143,0.25)] absolute top-0 left-0 right-0 h-[3px] " />

            {/* INTRO BOX */}
            <div className="flex justify-center">
              <div className="w-[870px] mb-6 rounded-xl border border-white/10 px-6 py-3 text-left text-gray-200 text-[clamp(0.96rem,1.1vw,1.04rem)] leading-[2]">
                Last Updated: March 14, 2026
              </div>
            </div>

            {/* CONTENT */}
            <div>
              {PRIVACY_CONTENT.map((section, i) => (
                <div
                  key={section.title}
                  className={`mb-8`}
                  style={i > 0 ? {
                    borderImage: 'linear-gradient(90deg, transparent 0%, rgba(156,163,175,0.58) 10%, rgba(156,163,175,0.58) 90%, transparent 100%) 1',
                  } : {}}
                >
                  {/* SECTION TITLE */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-[4px] h-4 rounded-full bg-gradient-to-b from-[#ff1f8f] to-[#00d4ff] shadow-[0_0_18px_rgba(255,31,143,0.35)]" />
                    <h3 className="text-[#ff2f9b] text-[clamp(1.05rem,1.8vw,1.32rem)] font-extrabold tracking-wide whitespace-nowrap">
                      {section.title}
                    </h3>
                  </div>

                  {/* CONTENT */}
                  <p className="text-gray-200 text-[clamp(0.96rem,1.1vw,1.04rem)] leading-[2] mb-5">
                    {section.content}
                    {section.email && (
                      <a
                        href={`mailto:${section.email}`}
                        className="text-[#64dfff] font-bold no-underline border-b border-[rgba(100,223,255,0.35)] ml-1 hover:text-[#ff2f9b] hover:border-[rgba(255,47,155,0.35)] transition-colors"
                      >
                        {section.email}
                      </a>
                    )}
                  </p>

                  {/* LIST */}
                  {section.list && (
                    <ul className="space-y-2 ml-6 text-gray-200 text-[clamp(0.96rem,1.1vw,1.04rem)] leading-[2]">
                      {section.list.map((item) => (
                        <li key={item} className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:rounded-full before:bg-[#ff1f8f] before:shadow-[0_0_12px_rgba(255,31,143,0.7)]">
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

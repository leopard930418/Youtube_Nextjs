import { PageLayout } from "@/components/layout";
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
  {
    title: "8. Contact Information",
    content: "If you have any questions about these Terms of Service, please reach out at",
    email: CONTACT_EMAIL,
  },
];

export default function TermsPage() {
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
            Terms of Service
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
                Late Updated: March 14, 2026
              </div>
            </div>

            <div className="flex justify-center">
              <div className="w-[870px] text-left text-gray-200 text-[clamp(0.96rem,1.1vw,1.04rem)] leading-[2]">
                Welcome to YouTube Growth Guide. These Terms of Service ("Terms") govern your use of our website and services. By accessing or using our platform, you agree to be bound by these Terms.
              </div>
            </div>
            
            {/* CONTENT */}
            <div >
              {TERMS_CONTENT.map((section, i) => (
                <div
                  key={section.title}
                  className={`mb-8}`}
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

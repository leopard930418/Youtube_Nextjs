import Link from "next/link";
import { FOOTER_LINKS, SOCIAL_LINKS, SITE_NAME } from "@/lib/site-config";

function FooterLink({ link, showDivider }) {
  return (
    <span className="flex items-center gap-2">
      {showDivider && <span className="text-white/30">|</span>}
      <Link
        href={link.href}
        className="transition-colors hover:text-accent"
      >
        {link.label}
      </Link>
    </span>
  );
}

function SocialButton({ href, label, icon, bgColor }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex max-w-[160px] items-center justify-center gap-2 rounded-4xl px-4 py-3 text-sm font-medium text-white transition-all hover:scale-105 ${bgColor}`}
    >
      <span aria-hidden="true" className="text-lg" dangerouslySetInnerHTML={{ __html: icon }} />
      {label}
    </a>
  );
}

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-white/10 bg-[#141820]/80 px-6 py-12">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
        <nav
          className="flex flex-wrap items-center justify-center gap-2 text-sm text-gray-300"
          aria-label="Footer navigation"
        >
          {FOOTER_LINKS.map((link, index) => (
            <FooterLink
              key={link.href}
              link={link}
              showDivider={index > 0}
            />
          ))}
        </nav>

        <p className="max-w-2xl text-[15px] leading-relaxed text-gray-400">
          Stay in the loop of YouTube updates and resources by following our
          social media accounts and connect with our community!
        </p>

        <div className="flex flex-row items-center justify-center w-full max-w-md gap-3 sm:max-w-lg">
          {SOCIAL_LINKS.map((social) => (
            <SocialButton key={social.href} {...social} />
          ))}
        </div>
        <p className="text-[0.85rem] text-[var(--muted)] mt-[var(--s-5)] pt-5 border-t border-[#2a2a2a]">
          &copy; 2025 {SITE_NAME}. All rights reserved.
        </p>
      </div>


    </footer>
  );
}

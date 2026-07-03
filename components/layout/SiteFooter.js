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

function SocialButton({ href, label, icon, colorClass }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-medium transition-all ${colorClass}`}
    >
      <span aria-hidden="true">{icon}</span>
      {label}
    </a>
  );
}

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-white/10 bg-surface px-6 py-12">
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

        <p className="max-w-xl text-sm leading-relaxed text-gray-400">
          Stay in the loop of YouTube updates and resources by following our
          social media accounts and connect with our community!
        </p>

        <div className="grid w-full max-w-md grid-cols-2 gap-3 sm:max-w-lg">
          {SOCIAL_LINKS.map((social) => (
            <SocialButton key={social.href} {...social} />
          ))}
        </div>

        <p className="text-xs text-gray-500">
          &copy; {currentYear} {SITE_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

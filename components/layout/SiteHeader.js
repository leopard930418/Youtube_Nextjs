"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/site-config";

function isActive(pathname, href) {
  const current = pathname.replace(/\/$/, "") || "/";
  const target = href.replace(/\/$/, "") || "/";
  return current === target;
}

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 px-4 pt-3">
      <nav
        id="mobile-navbar"
        className="mx-auto flex w-fit max-w-[calc(100vw-48px)] items-center justify-center gap-6 rounded-full border border-white/10 bg-[#141828]/90 px-6 py-2.5 backdrop-blur-md md:gap-10 md:px-11"
      >
        <Link href="/" className="shrink-0">
          <Image
            src="/logo-header.webp"
            alt="Header Logo"
            width={38}
            height={38}
            className="h-[38px] w-[38px] object-contain"
            priority
          />
        </Link>
        <ul id="mobile-nav-links" className="flex items-center gap-2 md:gap-3">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`nav-btn rounded-full px-3.5 py-2 text-sm font-medium transition-colors md:px-4 md:text-[0.95rem] ${
                  isActive(pathname, href)
                    ? "highlight bg-accent text-white shadow-[0_0_20px_rgba(255,31,143,0.35)]"
                    : "text-gray-200 hover:bg-white/10 hover:text-white"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

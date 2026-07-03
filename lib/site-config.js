export const SITE_NAME = "YouTube Growth Guide";
export const SITE_URL = "https://thegrowthguide.net";
export const CONTACT_EMAIL = "contact@thegrowthguide.net";
export const GA_ID = "G-WKGKV34NEQ";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/team", label: "Our Team" },
  { href: "/resources", label: "Resources" },
];

export const FOOTER_LINKS = [
  { href: "/terms", label: "Terms of Service" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/credits", label: "Credits" },
];

export const SOCIAL_LINKS = [
  {
    href: "https://www.youtube.com/@growthguide-gg",
    label: "YouTube",
    icon: "▶",
    colorClass: "hover:border-red-500 hover:text-red-400",
  },
  {
    href: "https://discord.gg/2vnmBftqQ5",
    label: "Discord",
    icon: "💬",
    colorClass: "hover:border-indigo-400 hover:text-indigo-300",
  },
  {
    href: "https://www.instagram.com/growthguide.gg/?hl=en",
    label: "Instagram",
    icon: "◎",
    colorClass: "hover:border-pink-400 hover:text-pink-300",
  },
  {
    href: "https://www.tiktok.com/@growthguide.gg",
    label: "TikTok",
    icon: "♪",
    colorClass: "hover:border-cyan-400 hover:text-cyan-300",
  },
];

export const RESOURCE_CARDS = [
  {
    href: "/youtube-advice",
    emoji: "📚",
    label: "YouTube Advice",
  },
  {
    href: "/tutorials",
    emoji: "🎓",
    label: "Tutorials",
  },
  {
    href: "/assets",
    emoji: "🗃️",
    label: "Assets",
  },
];

export const HOME_PERKS = [
  { emoji: "💡", label: "Free YouTube Resources" },
  { emoji: "🎓", label: "Free Tutorials" },
  { emoji: "📦", label: "Hundreds of Assets" },
  { emoji: "👥", label: "Commissions Team" },
  { emoji: "💬", label: "Helpful Staff Members" },
  { emoji: "🏆", label: "And More..." },
];

export const TEAM_MEMBERS = [
  {
    name: "Hugo",
    role: "Status: Owner",
    image: "/profile.webp",
    quote:
      "My goal is to help creators make original videos they're proud of.",
  },
];

export function getOwner() {
  return TEAM_MEMBERS[0];
}

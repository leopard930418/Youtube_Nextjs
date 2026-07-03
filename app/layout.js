import "./globals.css";
import { SITE_NAME, SITE_URL, GA_ID } from "@/lib/site-config";

export const metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Free YouTube growth resources, tutorials, and creator advice.",
  icons: {
    icon: "/logo-header.webp",
    shortcut: "/logo-header.webp",
    apple: "/logo-header.webp",
  },
  metadataBase: new URL(SITE_URL),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

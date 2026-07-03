import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import GoogleAnalytics from "./GoogleAnalytics";

export default function PageLayout({ children, className = "" }) {
  return (
    <div className={`flex min-h-screen flex-col ${className}`.trim()}>
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
      <GoogleAnalytics />
    </div>
  );
}

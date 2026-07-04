import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import GoogleAnalytics from "./GoogleAnalytics";

export default function PageLayout({ children, className = "", showFooter = true }) {
  return (
    <div className={`flex min-h-screen flex-col ${className}`.trim()}>
      <SiteHeader />
      <main className="flex-1">{children}</main>
      {showFooter && <SiteFooter />}
      <GoogleAnalytics />
    </div>
  );
}

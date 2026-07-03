/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/team.html", destination: "/team", permanent: true },
      { source: "/resources.html", destination: "/resources", permanent: true },
      { source: "/assets.html", destination: "/assets", permanent: true },
      { source: "/tutorials.html", destination: "/tutorials", permanent: true },
      { source: "/youtube-advice.html", destination: "/youtube-advice", permanent: true },
      { source: "/advice.html", destination: "/advice", permanent: true },
      { source: "/terms.html", destination: "/terms", permanent: true },
      { source: "/privacy.html", destination: "/privacy", permanent: true },
      { source: "/credits.html", destination: "/credits", permanent: true },
    ];
  },
};

export default nextConfig;

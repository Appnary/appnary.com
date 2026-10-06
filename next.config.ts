import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1"],
  experimental: {
    inlineCss: true,
  },
  async headers() {
    return [
      {
        source: "/badges/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=604800, stale-while-revalidate=86400" }],
      },
      {
        source: "/:path*",
        headers: [{ key: "Content-Signal", value: "search=yes, ai-train=yes, ai-input=yes" }],
      },
    ];
  },
  async redirects() {
    return [
      { source: "/blog/announcing-appnary-public-launch", destination: "/vigil", permanent: true },
      { source: "/blog/pixel-tracker-launch-preview", destination: "/vigil", permanent: true },
      { source: "/pixel-tracker", destination: "/vigil", permanent: true },
      { source: "/pixel-tracker/:path*", destination: "/vigil", permanent: true },
      { source: "/vs", destination: "/vigil", permanent: true },
      { source: "/vs/:path*", destination: "/vigil", permanent: true },
      { source: "/alternatives", destination: "/vigil", permanent: true },
      { source: "/alternatives/:path*", destination: "/vigil", permanent: true },
      { source: "/compare", destination: "/interest", permanent: true },
      { source: "/integrations", destination: "/vigil", permanent: true },
      { source: "/tools", destination: "/vigil", permanent: true },
      { source: "/tools/:path*", destination: "/vigil", permanent: true },
    ];
  },
};

export default nextConfig;

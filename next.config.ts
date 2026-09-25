import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    inlineCss: true,
  },
  async headers() {
    return [{
      source: "/badges/:path*",
      headers: [{ key: "Cache-Control", value: "public, max-age=604800, stale-while-revalidate=86400" }],
    }];
  },
  async redirects() {
    return [
      {
        source: "/blog/announcing-appnary-public-launch",
        destination: "/blog/pixel-tracker-launch-preview",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

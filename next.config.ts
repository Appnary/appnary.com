import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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

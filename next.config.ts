import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "QahwaX.https://www.instagram.com/ms6.fy/",
      },
    ],
  },
};

export default nextConfig;

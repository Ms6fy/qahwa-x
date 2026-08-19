import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "eleven.ahmedgamal.dev",
      },
    ],
  },
};

export default nextConfig;

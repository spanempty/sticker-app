import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ["http://localhost:4000", "http://172.20.10.4:3000"],
  experimental: {
    allowedDevOrigins: ["http://localhost:3000", "http://localhost:4000", "*"],
  },
};

export default nextConfig;

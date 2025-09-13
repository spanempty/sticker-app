import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: [
    "http://localhost:4000",
    "http://172.20.10.4:3000",
    "sticker-app-tawny.vercel.app",
  ],
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep production builds separate so they cannot overwrite live preview assets.
  distDir: process.env.NODE_ENV === "development" ? ".next-preview" : ".next-production",
  turbopack: { root: process.cwd() },
};

export default nextConfig;

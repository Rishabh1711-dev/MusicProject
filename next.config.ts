import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Clean configuration for Next.js 16
  typescript: {
    ignoreBuildErrors: true,
  },
  // In v16, ESLint ignore is handled differently or via CLI
  // Removed invalid 'turbo' and 'eslint' keys
};

export default nextConfig;
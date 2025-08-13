import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  distDir: "dist",
  output: 'export',
  // Optional: Add trailingSlash if hosting on GitHub Pages or similar
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
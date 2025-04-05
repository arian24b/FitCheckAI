import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/repo-name",
  assetPrefix: "/repo-name/",
  // output: "standalone",
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
    viewTransition: true,
  },
  reactStrictMode: true,
};

export default nextConfig;

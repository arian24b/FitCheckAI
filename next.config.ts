import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // output: "standalone",
  basePath: "/repo-name",
  assetPrefix: "/repo-name/",
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

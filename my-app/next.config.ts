import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove static export for faster development
  // output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  
  // Fast development settings
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  
  // Minimal webpack config for speed
  webpack: (config, { dev }) => {
    if (dev) {
      config.optimization.minimize = false;
    }
    return config;
  },
};

export default nextConfig;

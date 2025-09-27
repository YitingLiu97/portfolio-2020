import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel deployment - no static export needed
  trailingSlash: true,
  images: {
    unoptimized: false, // Vercel handles image optimization
  },
  
  // Production build settings
  typescript: {
    ignoreBuildErrors: false, // Enable type checking for production
  },
  eslint: {
    ignoreDuringBuilds: true, // Temporarily ignore lint errors
  },
  
  // Minimal webpack config
  webpack: (config, { dev }) => {
    if (dev) {
      config.optimization.minimize = false;
    }
    return config;
  },
};

export default nextConfig;

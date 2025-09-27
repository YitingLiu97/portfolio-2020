import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable for Vercel deployment - supports both static and SSR
  // output: 'export', // Disable for Vercel (enables API routes & ISR)
  trailingSlash: true,
  images: {
    unoptimized: false, // Vercel handles image optimization
  },
  
  // Production build settings
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: true, // Temporary: ignore lint errors during build
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

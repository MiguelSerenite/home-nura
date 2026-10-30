import type { NextConfig } from "next";
import withBundleAnalyzer from "@next/bundle-analyzer";

// Phase W: opt-in bundle size introspection. Run `npm run analyze` to get
// client + server treemaps under .next/analyze — a regression probe we
// can diff between PRs when we suspect a dep has bloated the bundle.
const analyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 31536000, // 1 year cache for optimized images
    // Never add an Amazon image host: the Associates Operating Agreement
    // forbids hotlinking or caching Amazon product images outside its
    // product API (tests/lib/amazon-compliance.test.ts enforces it).
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default analyzer(nextConfig);

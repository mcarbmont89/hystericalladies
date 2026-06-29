/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // Original Hostinger/Zyro CDN — keep during migration so you can swap
      // images progressively. Remove once you've moved assets to /public.
      { protocol: "https", hostname: "assets.zyrosite.com" },
      { protocol: "https", hostname: "cdn.jsdelivr.net" },
    ],
  },
};

export default nextConfig;

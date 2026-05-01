// Problem:
// Next.js development mode এ React Strict Mode এর কারণে component double render হয়
// এজন্য সবকিছু duplicate মনে হচ্ছে

// FIX:
// next.config.mjs

const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "covers.openlibrary.org",
      },
    ],
  },
};

export default nextConfig;
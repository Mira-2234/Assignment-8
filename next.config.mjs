const nextConfig = {
  reactStrictMode: false,
  images: {
     domains: ["img.freepik.com", "covers.openlibrary.org"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "covers.openlibrary.org",
      },
       {
        protocol: "https",
        hostname: "*.googleusercontent.com", 
      },
    ],
  },
};

export default nextConfig;
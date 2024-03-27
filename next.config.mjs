/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["image.clerk.dev"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;

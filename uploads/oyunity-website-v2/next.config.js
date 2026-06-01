/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "d22po4pjz3o32e.cloudfront.net" },
    ],
  },
};
module.exports = nextConfig;

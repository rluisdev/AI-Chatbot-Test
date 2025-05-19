/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Temporarily ignore TypeScript errors during development
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;

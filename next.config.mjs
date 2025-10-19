/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ Completely disable the black build/loading circle
  devIndicators: {
    buildActivity: false,
  },

  // Recommended defaults
  reactStrictMode: true,
  swcMinify: true,
};

export default nextConfig;
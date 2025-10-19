/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    cssChunking: 'strict',
  },
  // Disable development indicators
  devIndicators: {
    position: 'bottom-right',
  },
};

export default nextConfig;

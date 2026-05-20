/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Static mode
  images: {
    unoptimized: true, // Required for static export
  },
  experimental: {
    appDir: true
  }
};

export default nextConfig;

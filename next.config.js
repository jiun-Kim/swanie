/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    reactRoot: true,
    scrollRestoration: true,
  },
  swcMinify: true,
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  // Produce a static export in `out/` during build
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    optimizePackageImports: ['@material-ui/core', '@material-ui/icons'],
  },
};

module.exports = nextConfig;

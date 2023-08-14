const { i18n } = require("./next-i18next.config");

// Rest of your code

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  images: {
    domains: []
  },
  i18n,
};

module.exports = nextConfig;
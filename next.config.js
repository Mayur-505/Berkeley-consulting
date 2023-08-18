// const { i18n } = require("./next-i18next.config");
// // /** @type {import('next').NextConfig} */

// // Rest of your code

// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
//   typescript: {
//     // !! WARN !!
//     // Dangerously allow production builds to successfully complete even if
//     // your project has type errors.
//     // !! WARN !!
//     ignoreBuildErrors: true,
//   },
//   images: {
//     domains: []
//   },
//   i18n,
// };

// module.exports = nextConfig;

/** @type {import('next').NextConfig} */

const nextConfig = {

  reactStrictMode: true,
  swcMinify: true,
  // output: 'export',
  // distDir: '_static',
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

}

module.exports = nextConfig
/** @type {import('next').NextConfig} */
const contentlayer = require("next-contentlayer")

module.exports = contentlayer.withContentlayer({
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['raw.githubusercontent.com'],
  },
})

const contentlayer = require("next-contentlayer")

module.exports = contentlayer.withContentlayer({
  images: {
    domains: ['raw.githubusercontent.com'],
  }
})
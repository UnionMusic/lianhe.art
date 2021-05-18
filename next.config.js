const isProd = process.env.NODE_ENV === 'production'
const STATIC_URL = "https://static.lianhe.art";

module.exports = {
  env: {
    STATIC_URL: isProd ? STATIC_URL : ''
  },
  assetPrefix: isProd ? STATIC_URL : '',
  poweredByHeader: false,
  future: {
    webpack5: true,
  },
  distDir: 'dist',
}

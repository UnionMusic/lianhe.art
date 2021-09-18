module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.lianhe.art',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      }
    ]
  },
  additionalSitemaps: [
    'https://www.lianhe.art/sitemap.xml'
  ]
}
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_BASE_URL || "https://instiki.developer.club",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  priority: 0.7,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};

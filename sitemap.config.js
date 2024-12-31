module.exports = {
  siteUrl: 'https://sakait-blog.web.app',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    transformRobotsTxt: async (_, robotsTxt) => {
      return robotsTxt
        .split('\n')
        .filter(line => !line.startsWith('# Host') && !line.startsWith('Host:'))
        .join('\n')
        .replace(/\n{2,}/g, '\n\n');
      },
  },
  sitemapSize: 7000,
  outDir: './out',
};

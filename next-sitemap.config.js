/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://extractemailsfrompdf.com',
    generateRobotsTxt: true,
    outDir: 'public',
  
    additionalPaths: async (config) => [
      await config.transform(config, '/'),
      await config.transform(config, '/extract-emails-from-pdf'),
      await config.transform(config, '/find-emails-in-pdf'),
      await config.transform(config, '/get-email-addresses-from-pdf'),
      await config.transform(config, '/extract-emails-from-scanned-pdf'),
      await config.transform(config, '/extract-emails-from-pdf-free'),
      await config.transform(config, '/extract-emails-from-pdf-online'),
    ],
  }
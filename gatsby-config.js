module.exports = {
  siteMetadata: {
    title: `Joschua Schneider - building software driven by passion`,
    description: `I'm a Javascript developer and active member of the OpenSource community based in Hanover, Germany. I build software driven by passion.`,
    author: `@joschuadots`,
    siteUrl: `https://www.joschuaschneider.de`,
  },
  plugins: [
    // React helmet SSR
    `gatsby-plugin-react-helmet`,
    // SEO: Sitemap generation
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: ["/donate"],
      },
    },
    // SEO: robots.txt generation
    `gatsby-plugin-robots-txt`,
    // Sources: images in src/images
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // Sources: JSON and Markdown files in /content
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    // Transform JSON
    `gatsby-transformer-json`,
    // Transform Markdown with prismjs and emojis
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-prismjs`, `gatsby-remark-emoji`],
      },
    },
    // Transform images with sharp
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // Use sass
    `gatsby-plugin-sass`,
    // Transform relative links in markdown
    `gatsby-plugin-catch-links`,
    // Use legacy central-layout system for route animations
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve("./src/components/layout/index-layout.js"),
      },
    },
    // Use Google Analytics
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-140227263-1",
        head: true,
        anonymize: true,
        respectDNT: true,
        exclude: ["/preview/**"],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `joschuaschneider.de`,
        short_name: `joschuaschneider`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#c93e3e`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`,
      },
    },
  ],
}

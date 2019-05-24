module.exports = {
  siteMetadata: {
    title: `Joschua Schneider - building software driven by passion`,
    description: `I'm a Javascript developer and active member of the OpenSource community based in Hanover, Germany. I build software driven by passion.`,
    author: `@joschuadots`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-prismjs`],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve("./src/components/layout/index-layout.js"),
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-140227263-1",
        head: true,
        anonymize: true,
        respectDNT: true,
        exclude: ["/preview/**"]
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

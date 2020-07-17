module.exports = {
  siteMetadata: {
    title: `Seed Icons`,
    description: `The icon set that makes finding and leveraging optimized, quality, consistent brand SVG icons a little less painful`,
    author: `@_rossmoody`,
    link: `<link href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:300,300i,400,400i,500,500i,700,700i&display=swap" rel="stylesheet">`,
  },
  plugins: [
    'gatsby-plugin-styled-components',
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-react-svg',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/static`,
      },
    },
    'gatsby-plugin-use-query-params',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `seed-icons`,
        short_name: `High quality brand & app icons.`,
        start_url: `/`,
        icon: `src/static/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-170212032-1',
        anonymize: true,
      },
    },
  ],
}

module.exports = {
  siteMetadata: {
    title: `Seed Icons`,
    description: `High quality brand & app icons.`,
    author: `@_rossmoody`,
    link: `<link href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:300,300i,400,400i,500,500i,700,700i&display=swap" rel="stylesheet">`,
  },
  plugins: [
    'gatsby-plugin-styled-components',
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/static`,
      },
    },
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
  ],
}

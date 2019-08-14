module.exports = {
  siteMetadata: {
    title: 'Seed – Open source icons in their simplest form.',
    description:
      'Seed is a collection of simply beautiful open source icons. Each icon is designed on a 24x24 grid with an emphasis on simplicity, consistency and readability.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Seed Icons',
        short_name: 'Seed',
        description: 'Open source icons in their simplest form',
        start_url: '/',
        theme_color: `#06f`,
        background_color: `#fff`,
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: '',
        anonymize: true,
      },
    },
  ],
}

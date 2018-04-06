module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['ubuntu:300,500,700', 'lora'],
      },
    },
  ],
  pathPrefix: '/dougmillett.com',
}

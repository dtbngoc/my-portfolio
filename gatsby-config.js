module.exports = {
  siteMetadata: {
    title: 'Ngoc Dang',
  },
  plugins: [

    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`,
      },
    },
  
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/logo.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    `gatsby-plugin-transition-link`,

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
     //'gatsby-plugin-offline',

  //    {
  //     resolve: "gatsby-plugin-transition-link",
  //     options: {
  //         layout: require.resolve(`./src/components/layout`)
  //       }
  //  }
  ],
}

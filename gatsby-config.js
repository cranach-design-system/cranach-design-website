module.exports = {
  siteMetadata: {
    title: "Cranach Design",
    description: "Eine Designsprache des Cranach Digital Archives",
    keywords: "gatsby,theme,carbon",
  },
  plugins: [
    'gatsby-theme-carbon',
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        theme: {
          homepage: 'white',
          interior: 'white',
        },
        navigationStyle: 'header',
        name: "Cranach Design",
        icon: "./src/images/favicon.svg",
        short_name: "Cranach Design",
        start_url: "/",
        background_color: "#ffffff",
        display: "browser",
      },
    },
  ],
};

module.exports = {
  title: "Apps from Scratch",
  tagline: "The tagline of my course",
  url: "https://github.com/newnewline/apps-from-scratch",
  baseUrl: "/",
  favicon: "tools/docusaurus/static/img/favicon.ico",
  organizationName: "newline", // Usually your GitHub org/user name.
  projectName: "apps-from-scratch", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "My Course",
      logo: {
        alt: "newline Logo",
        src: "tools/docusaurus/static/img/logo.svg"
      }
    }
  },

  presets: [
    [
      {
        docs: {
          homePageId: "welcome",
          sidebarPath: require.resolve("./tools/docusaurus/sidebars.js"),
          path: "./tools/docusaurus/docs"
        },
        theme: {}
      }
    ]
  ]
};

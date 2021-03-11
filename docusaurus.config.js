module.exports = {
  title: "Apps from Scratch",
  tagline: "Open-source examples of real-world, production-ready apps",
  url: "https://github.com/newnewline/apps-from-scratch",
  baseUrl: "/",
  favicon: "tools/docusaurus/static/img/favicon.ico",
  organizationName: "newline", // Usually your GitHub org/user name.
  projectName: "apps-from-scratch", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Apps from Scratch",
      logo: {
        alt: "newline Logo",
        src: "static/img/logo.svg"
      }
    }
  },

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/newnewline/apps-from-scratch/edit/master/"
        },
        blog: {
          showReadingTime: true,
          editUrl:
            "https://github.com/newnewline/apps-from-scratch/edit/master/"
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ]
};

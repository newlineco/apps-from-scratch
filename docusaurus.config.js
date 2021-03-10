module.exports = {
  title: "My Course",
  tagline: "The tagline of my course",
  url: "https://newline.co/courses/my-course",
  baseUrl: "/",
  favicon: "tools/docusaurus/static/img/favicon.ico",
  organizationName: "newline", // Usually your GitHub org/user name.
  projectName: "my-course", // Usually your repo name.
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
      "@fullstackio/docusaurus-preset-newline",
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

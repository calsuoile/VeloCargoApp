module.exports = {
  assetsDir: "public/",
  skipComponentsWithoutExample: true,
  ignore: ["**/*index.js"],
  pagePerSection: true,
  usageMode: "expand",
  template: {
    head: {
      scripts: [
        {
          src: "https://kit.fontawesome.com/4c273e6d43.js",
        },
      ],
      links: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i&display=swap",
        },
      ],
    },
  },
  sections: [
    {
      name: "Introduction",
      content: "./README.md",
      sectionDepth: 1,
      exampleMode: "hide",
      usageMode: "hide",
    },
    {
      name: "Atoms",
      sectionDepth: 2,
      exampleMode: "collapse",
      usageMode: "expand",
      components: "./src/components/atoms/**/*.js",
    },
    {
      name: "Molecules",
      sectionDepth: 2,
      exampleMode: "collapse",
      usageMode: "expand",
      components: "./src/components/molecules/**/*.js",
    },
    {
      name: "Organisms",
      sectionDepth: 2,
      exampleMode: "collapse",
      usageMode: "expand",
      components: "./src/components/organisms/**/*.js",
    },
  ],
};

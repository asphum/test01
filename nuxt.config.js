 

export default {
  //mode: 'universal',
  mode: "spa",
  modern: false,
  render: {
    resourceHints: false
  },
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Sarabun:400,500,600,700,800&display=swap"
      }
    ],
    script: [
      {
        crossorigin: "anonymous",
        src: "https://kit.fontawesome.com/a6d1b79aac.js"
      }
    ]
  },
  loading: { color: "#fff" },
  css: ["~/assets/css/bootstrap.min.css", "~/assets/css/style.css"],
  plugins: [],
  buildModules: [],
  modules: [
    '@nuxtjs/axios'
  ],

  axios: {
    // proxyHeaders: false
  }
};

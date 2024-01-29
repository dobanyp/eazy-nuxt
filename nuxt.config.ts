// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    httpEndpoint: "https://eazydigital.test.hungarodo.hu/graphql/event_demo",
    db: "db_hs23030915215507",
    login: "graphql_demo",
    accessToken: "graphql_demo",
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Montserrat: {
            wght: [100, 200, 300, 400, 500, 600, 700, 800, 900],
            ital: [100, 200, 400],
          },
          "Josefin+Sans": {
            wght: [100, 200, 300, 400, 500, 600],
          },
          Barlow: {
            wght: [700, 800],
          },
        },
        display: "swap",
        prefetch: false,
        preconnect: false,
        preload: false,
        download: true,
        base64: false,
      },
    ],
  ],
});

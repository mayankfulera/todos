// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: "2024-07-03",
  routeRules: {
    '/': { prerender: true },
    '/todos/**': { prerender: true }
  },
  // hooks: {
  //   'prerender:routes' ({ routes }) {
  //     routes.clear() // Do not generate any routes (except the defaults)
  //   }
  // },
})
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  devtools: { enabled: true },

  modules: ['@nuxt/eslint', '@nuxt/test-utils', '@vueuse/nuxt'],

  runtimeConfig: {
    // Private keys are only available on the server
    nytimesApiKey: process.env.NUXT_NYTIMES_API_KEY,
    nytimesApiBaseUrl: process.env.NUXT_NYTIMES_API_BASE_URL,
  },
});

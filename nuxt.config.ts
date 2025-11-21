// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/test-utils', '@nuxt/image', '@nuxt/content'],
  css: ['~/assets/css/main.css'],
  content: {
    // highlight: {
    //   theme: 'github-dark'
    // }
  },
  ui: {
    theme: {
      colors: ['primary', 'secondary', 'success', 'info', 'warning', 'error', 'purple', 'green']
    }
  }

})
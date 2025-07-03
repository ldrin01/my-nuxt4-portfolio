// nuxt.config.ts
export default defineNuxtConfig({
  // Disable SSR for a purely client-side rendered SPA suitable for GitHub Pages
  ssr: false,

  // THIS IS THE CRITICAL PART FOR GITHUB PAGES PROJECT SITES
  // It MUST match your repository name, including leading and trailing slashes.
  // The browser is requesting: https://ldrin01.github.io/my-nuxt4-portfolio/_nuxt/
  // So, baseURL MUST be '/my-nuxt4-portfolio/'
  app: {
    baseURL: '/my-nuxt4-portfolio', // <--- CONFIRM THIS IS EXACTLY '/my-nuxt4-portfolio/'
    buildAssetsDir: 'nuxt/', // <--- Keep this as the default relative path
  },

  nitro: {
    preset: 'github-pages' // Add this for GitHub Pages
  },

  // Ensure these modules are listed if you installed them:
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'
  ],

  // Configure Google Fonts (adjust families as needed for your project)
  googleFonts: {
    families: {
      'Plus Jakarta Sans': [300, 400, 600, 700],
      Inter: [400, 700],
    },
    display: 'swap' // Recommended for performance
  },

  // Other Nuxt configurations can go here
})
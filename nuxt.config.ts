// nuxt.config.ts
export default defineNuxtConfig({
  // Disable SSR for a purely client-side rendered SPA suitable for GitHub Pages
  ssr: false,

  // IMPORTANT: Set the base URL to your repository name
  // This tells Nuxt where to find assets (CSS, JS) when hosted on GitHub Pages
  app: {
    baseURL: '/my-nuxt4-portfolio/', // Make sure this matches your repository name exactly
    buildAssetsDir: '_nuxt/', // Default, but good to be explicit
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
// nuxt.config.ts
export default defineNuxtConfig({
  // ... other configurations like modules, etc.

  // Disable SSR for a purely client-side rendered SPA suitable for GitHub Pages
  ssr: false,

  // If you were to have multiple pages (e.g., /about, /projects)
  // and wanted them pre-rendered as static HTML files:
  // nitro: {
  //   prerender: {
  //     routes: ['/', '/about', '/projects'] // List all your routes here
  //   }
  // },

  // Set the base URL for your GitHub Pages site
  // Replace 'your-username' and 'your-repo-name' with your actual GitHub details
  app: {
    baseURL: '/my-nuxt4-portfolio/', // Replace with your repository name if it's a project page
    // For a user/organization page (username.github.io or orgname.github.io), use:
    // baseURL: '/',
    buildAssetsDir: '_nuxt/', // Default, but good to be explicit
  },

  // If you are using Google Fonts as a module, ensure it's configured:
  googleFonts: {
    families: {
      'Plus Jakarta Sans': [300, 400, 600, 700],
      Inter: [400, 700],
    },
    display: 'swap'
  },

  // Tailwind CSS module (if you installed it)
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'
  ],
})
import { defineConfig } from 'vite'
import ValaxyDevtools from '@valaxyjs/devtools'

// vite plugins
// import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    // https://vite-pwa-org.netlify.app/
    // VitePWA(),
    ValaxyDevtools(),
  ],

  optimizeDeps: {
    include: ['@waline/client/component'],
  },
})

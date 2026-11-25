import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import prerender from '@prerenderer/rollup-plugin'
import Renderer from '@prerenderer/renderer-puppeteer'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(),
    prerender({
      staticDir: path.join(__dirname, 'dist'),
      routes: [
        '/', 
        '/demo',
        '/services', 
        '/solutions', 
        '/pricing', 
        '/about', 
        '/contact', 
        '/privacy', 
        '/terms', 
        '/security',
        '/refund'
      ],
      renderer: new Renderer({
        renderAfterTime: 500,
        headless: true,
      })
    })
  ],
})

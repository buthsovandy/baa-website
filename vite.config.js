import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages serves a project repo from /<repo>/, Cloudflare Pages serves from /.
// `npm run build:gh` sets DEPLOY_TARGET=gh; a plain `npm run build` stays root-relative.
const base = process.env.DEPLOY_TARGET === 'gh' ? '/baa-website/' : '/'

export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
})

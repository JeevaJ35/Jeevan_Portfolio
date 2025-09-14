import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  root: 'client',
  plugins: [react()],
  base: "/Jeevan_Portfolio/",  // GitHub repository name
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
})


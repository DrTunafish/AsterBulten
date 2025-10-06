import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // PDF.js ayrı chunk'a alınır (büyük kütüphane)
          'react-pdf': ['react-pdf', 'pdfjs-dist'],
        },
      },
    },
  },
  // PDF.js worker dosyaları için
  assetsInclude: ['**/*.pdf'],
})


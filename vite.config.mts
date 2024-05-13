import { defineConfig } from 'vite'
import { resolve } from 'path'
import rails from 'vite-plugin-rails'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    rails(),
    vue(),
  ],

  resolve: {
    alias: {
      '@': resolve(__dirname, 'app/frontend'),
    }
  }
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // penting agar bisa diakses dari luar kontainer
    port: 5173,
    allowedHosts: ['vimedika.com'], // <--- tambahkan ini
  },
})
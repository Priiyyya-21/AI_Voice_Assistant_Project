import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy:{
      "/call-details":{
        target:"https://127.0.0.1:5000",
        changeOrigin: true,
        secure:false

      }
    }
  }
})

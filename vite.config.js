import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   server: {
    host: '0.0.0.0', // Accept connections from all IPs
    port: 3001 ,// Optional: specify port
    allowedHosts: ['fe3f0765a916.ngrok-free.app']  
  }
})

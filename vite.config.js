import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base:  '/React-vite_navbar/',
  
  plugins: [react()],
})

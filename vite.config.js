import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    host:true
  },
  base:'/sample-webpage-vite/',
  built:{
    outDir:'docs',
  },
  plugins: [react()],
})

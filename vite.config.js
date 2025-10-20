import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    tailwindcss()
  ],
  server: {
    proxy: {
      '/api':{
        target: "http://localhost:5050"
        // target:`${import.meta.env.API_ENDPINT}:${import.meta.env.PORT}`,
      }
    },
  },
})

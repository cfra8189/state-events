import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "https://cfra8189.github.io/state-events/",
  plugins: [react()],
})

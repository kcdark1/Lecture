import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' hace que los archivos se carguen con rutas relativas.
// Así funciona tanto en https://usuario.github.io/  como en
// https://usuario.github.io/nombre-repo/  sin cambiar nada.
export default defineConfig({
  plugins: [react()],
  base: './',
})

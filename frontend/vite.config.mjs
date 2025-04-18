import path from "path";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  base: "/map-viewer-app/",
  plugins: [
    tailwindcss()
  ],
  build: {
    outDir: "./dist",
    assetsDir: "assets",
    rollupOptions: {
      input: "./index.html"
    }
  },
  server: {
    open: true
  }
})
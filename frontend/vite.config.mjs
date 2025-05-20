import path from "path";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

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
    open: true,
    fs: {
      allow: [
        path.resolve(__dirname),
        path.join(path.resolve(__dirname, ".."), 'node_modules/@arcgis/core/assets'),
      ]
    }
  }
})
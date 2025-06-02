import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://astro.build/config
export default defineConfig({
  site: "https://archont561.github.io",
  base: "map-viewer-app",
  vite: {
    plugins: [tailwindcss()],
    server: {
      fs: {
        allow: [
          ".",
          path.join(path.resolve(__dirname, ".."), 'node_modules'),
        ],
      },
    },
  },
});

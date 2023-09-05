import { defineConfig, normalizePath, build } from "vite";
import laravel from "laravel-vite-plugin";

import path, { resolve } from "path";
import { fileURLToPath } from "url";
import { viteStaticCopy } from "vite-plugin-static-copy";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  root: resolve(__dirname, "./"),
  plugins: [
    laravel({
      input: ["resources/css/app.css", "resources/js/app.js"],
      refresh: true,
    }),
    viteStaticCopy({
      targets: [
        {
          src: normalizePath(
            resolve(__dirname, "./node_modules/admin-lte/dist")
          ),
          dest: "../adminlte3",
        },
        {
          src: normalizePath(
            resolve(__dirname, "./node_modules/admin-lte/plugins")
          ),
          dest: "../adminlte3",
        },
      ],
    }),
  ],
});

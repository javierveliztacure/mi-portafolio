import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import mkcert from "vite-plugin-mkcert";
import { readFileSync } from "fs";

const pkg = JSON.parse(readFileSync("./package.json", "utf-8"));

export default defineConfig({
  plugins: [react(), tailwindcss(), mkcert()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    rolldownOptions: {
      output: {
        // Librerías base en su propio chunk: cambian poco entre despliegues,
        // así el navegador las mantiene en caché y tras cada deploy solo se
        // descarga el código de la app. Las pantallas van en chunks aparte
        // por las rutas con lazy (src/app/paginas.ts).
        codeSplitting: {
          groups: [
            {
              name: "vendor",
              test: /node_modules[\\/](react|react-dom|react-router|react-router-dom|scheduler|axios|zustand)[\\/]/,
            },
          ],
        },
      },
    },
  },
  define: {
    __APP_VERSION__: JSON.stringify(pkg.version),
    __BUILD_DATE__: JSON.stringify(new Date().toISOString()),
  },
});

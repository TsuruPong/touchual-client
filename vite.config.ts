import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  base: "/",
  server: {
    proxy: {
      "/touchual": {
        target: "",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/touchual/, '')
      }
    }
  },
  css: {
    modules: {
      localsConvention: 'dashes',
    }
  }
});

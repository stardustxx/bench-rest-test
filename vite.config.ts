import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      ui: path.resolve(__dirname, "./src/ui"),
      types: path.resolve(__dirname, "./src/types"),
      hooks: path.resolve(__dirname, "./src/hooks"),
      components: path.resolve(__dirname, "./src/components"),
      utils: path.resolve(__dirname, "./src/utils"),
      themes: path.resolve(__dirname, "./src/themes"),
      pages: path.resolve(__dirname, "./src/pages"),
      layouts: path.resolve(__dirname, "./src/layouts"),
      router: path.resolve(__dirname, "./src/router")
    },
  },
});

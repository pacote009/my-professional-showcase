import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

const repositoryName = "my-professional-showcase";

// https://vitejs.dev/config/
export default defineConfig(() => ({
  base: `/${repositoryName}/`,
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));

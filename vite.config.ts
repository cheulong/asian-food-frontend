import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    APP_VERSION: JSON.stringify(process.env.npm_package_version),
  },
});

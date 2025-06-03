/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    APP_VERSION: JSON.stringify(process.env.npm_package_version),
  },
  test: {
    browser: {
      provider: "playwright",
      screenshotFailures: false,
      enabled: true,
      headless: true,
      instances: [{ browser: "chromium" }],
    },
    exclude: ["**/node_modules/**", "**/dist/**", "**/e2e/**"],
  },
});

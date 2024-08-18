import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "autumn-ui": path.resolve(__dirname, "./src/index.ts"),
    },
  },
  // test: { globals: true },
});

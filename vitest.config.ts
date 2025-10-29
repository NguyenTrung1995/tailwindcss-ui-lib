import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./test/setup.ts"],
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      exclude: [
        "node_modules/",
        "test/",
        "**/*.stories.tsx",
        "**/*.config.{ts,js}",
        ".storybook/",
        ".next/",
        "public/",
        "stories/",
      ],
    },
  },
  resolve: {
    alias: {
      "@app": path.resolve(__dirname, "./app"),
    },
  },
});

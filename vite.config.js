import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Đường dẫn tương đối giúp website hoạt động ở cả GitHub Pages dạng
  // username.github.io và username.github.io/ten-repository/.
  base: "./",
});

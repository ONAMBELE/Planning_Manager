import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Planning_Manager/Frontend/", // ✅ Chemin correct pour GitHub Pages
});

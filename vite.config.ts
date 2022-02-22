import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

const vite = {
  plugins: [svelte()],
};

export default defineConfig(vite);

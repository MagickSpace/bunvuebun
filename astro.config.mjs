import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from "@astrojs/react";
import million from "million/compiler";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [million.vite({
      mode: "react",
      server: true,
      auto: {
        threshold: 0.05,
        skip: ["useBadHook", /badVariable/g]
      }
    }), tailwindcss()]
  },
  integrations: [react()],
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});
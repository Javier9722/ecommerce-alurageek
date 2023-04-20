import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://javier9722.github.io",
  base: "/ecommerce-alurageek",
  output: "server",
  integrations: [tailwind(), react()],
});

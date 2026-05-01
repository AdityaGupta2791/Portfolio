import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],

  // Single-page portfolio served from the domain root.
  base: "/",

  build: {
    // Generate source maps for prod debugging (small file, off main bundle).
    sourcemap: false,

    // Split heavy third-party deps into their own chunks so a content
    // edit doesn't bust the (much bigger) framer-motion / icons cache.
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom"],
          "framer-motion": ["framer-motion"],
          icons: ["react-icons", "lucide-react"],
        },
      },
    },
  },
});

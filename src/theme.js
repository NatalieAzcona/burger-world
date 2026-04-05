import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        ketchup: { value: "#ff4f5e" },
        mustard: { value: "#ffd64a" },
        lettuce: { value: "#46c96b" },
        cheese: { value: "#ffb347" },
        bun: { value: "#c9894b" },
        pickle: { value: "#2fa85e" },
        sky: { value: "#4f9dff" },
        grape: { value: "#9f63ff" },
        cream: { value: "#fff7e8" },
        choco: { value: "#523726" },
        berry: { value: "#ff6bb3" },
        ash: { value: "#808080" },
      },
    },
    semanticTokens: {
      colors: {
        appBg: { value: "{colors.cream}" },
        appText: { value: "{colors.choco}" },
        appAccent: { value: "{colors.ketchup}" },
        appHighlight: { value: "{colors.mustard}" },
        appSuccess: { value: "{colors.lettuce}" },
        appCard: { value: "#fff2d9" },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);

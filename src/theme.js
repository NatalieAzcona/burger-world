import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        ketchup: { value: "#ff4f5e" },
        bun: { value: "#c9894b" },
        choco: { value: "#523726" },
        berry: { value: "#ff6bb3" },
        ash: { value: "#808080" },
        paper: { value: "#fff8f6" },
        mint: { value: "#f0faf3" },
        blush: { value: "#fff0f0" },
        snowpink: { value: "#fff7f7" },
        rosepale: { value: "#ffefef" },
        peach: { value: "#fff1ef" },
        salmon: { value: "#ffe2dd" },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);

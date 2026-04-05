//Layers debe ser mayor a 5

import { ingredients } from "../data/ingredients";

const fillings = ingredients.filter(
  (i) => i.id !== "bun-top" && i.id !== "bun-bottom",
);
const bunTop = ingredients.find((i) => i.id === "bun-top");
const bunBottom = ingredients.find((i) => i.id === "bun-bottom");

export const buildHamburger = (layers) => {
  const randomLayers = [];
  for (let i = 0; i < layers; i++) {
    randomLayers.push(fillings[Math.floor(Math.random() * fillings.length)]);
  }

  if (!randomLayers.some((i) => i.id === "beef")) {
    const randomIndex = Math.floor(Math.random() * layers);
    randomLayers[randomIndex] = fillings.find((i) => i.id === "beef");
  }

  return [bunTop, ...randomLayers, bunBottom];
};

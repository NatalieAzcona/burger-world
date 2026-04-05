const compareHamburger = (targetBurger, builtBurger) => {
  const targetBurgerIdArray = targetBurger.map((ing) => ing.id);

  if (targetBurgerIdArray.join(",") === builtBurger.join(",")) {
    return true;
  } else {
    return false;
  }
};

export default compareHamburger;

/* //targetBurger [
  { id: "bun-top", name: "Pan superior", className: "bun bun--top" },
  { id: "onions", name: "cebolla", className: "onions" },
  { id: "beef", name: "Carne", className: "beef" },
  { id: "bun-bottom", name: "Pan inferior", className: "bun bun--bottom" },
]

//

builtBurger ["bun-top", "onions", "beef", "bun-bottom"]
 */

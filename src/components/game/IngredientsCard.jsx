import React from "react";
import "../../assets/styles/ingredients.scss";
import { ingredients } from "../../data/ingredients";

export const IngredientPiece = ({ className }) => {
  if (className === "tomatos") {
    return (
      <div className="tomatos">
        <div className="tomato tomato--1"></div>
        <div className="tomato tomato--2"></div>
      </div>
    );
  } else if (className === "onions") {
    return (
      <div className="onions">
        <div className="onion onion--1"></div>
        <div className="onion onion--2"></div>
      </div>
    );
  }

  return <div className={className}></div>;
};

function IngredientsCard() {
  return (
    <section className="ingredients-view">
      <div className="hamburger">
        {ingredients.map((ingredient) => (
          <IngredientPiece
            key={ingredient.id}
            className={ingredient.className}
          />
        ))}
      </div>
    </section>
  );
}

export default IngredientsCard;

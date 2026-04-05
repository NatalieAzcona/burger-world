import React from "react";
import Draggable from "./Draggable";
import { IngredientPiece } from "./IngredientsCard";
import { ingredients } from "../../data/ingredients";

const IngredientsPanel = () => {
  return (
    <div className="hamburger">
      <h3>Usa estos ingredientes</h3>
      {ingredients.map((i) => (
        <Draggable key={i.id} id={i.id}>
          <IngredientPiece className={i.className} />
        </Draggable>
      ))}
    </div>
  );
};

export default IngredientsPanel;

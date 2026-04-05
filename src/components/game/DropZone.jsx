import React from "react";
import { ingredients } from "../../data/ingredients";
import { IngredientPiece } from "./IngredientsCard";
import Droppable from "./Droppable";
import "./DropZone.scss";

const DropZone = ({ builtBurger }) => {
  return (
    <div>
      <Droppable id="drop-zone" className="drop-zone">
        <h3>Construye tu hamburguesa</h3>
        {builtBurger.map((i, index) => {
          const ingredient = ingredients.find((ing) => ing.id === i);
          return (
            <IngredientPiece key={index} className={ingredient.className} />
          );
        })}
      </Droppable>
    </div>
  );
};

export default DropZone;

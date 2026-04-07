import { ingredients } from "../../data/ingredients";
import { IngredientPiece } from "./IngredientPiece";
import Droppable from "./Droppable";
import "./DropZone.scss";

const DropZone = ({ builtBurger }) => {
  return (
    <div className="drop-zone-container">
      <h3>Preparación:</h3>
      <div className="drop-zone-wrapper">
        <Droppable id="drop-zone" className="drop-zone">
          {builtBurger.map((i, index) => {
            const ingredient = ingredients.find((ing) => ing.id === i);
            return (
              <IngredientPiece key={index} className={ingredient.className} />
            );
          })}
        </Droppable>
      </div>
    </div>
  );
};

export default DropZone;

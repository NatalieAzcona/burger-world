import Draggable from "./Draggable";
import { IngredientPiece } from "./IngredientPiece";
import { ingredients } from "../../data/ingredients";

const IngredientsPanel = () => {
  return (
    <div className="hamburger hamburger--panel">
      <h3>Ingredientes:</h3>
      {ingredients.map((i) => (
        <Draggable key={i.id} id={i.id}>
          <IngredientPiece className={i.className} />
        </Draggable>
      ))}
    </div>
  );
};

export default IngredientsPanel;

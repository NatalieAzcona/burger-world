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

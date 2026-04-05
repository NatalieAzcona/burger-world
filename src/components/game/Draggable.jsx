import { useDraggable } from "@dnd-kit/react";
import React from "react";

const Draggable = ({ id, children }) => {
  const { ref } = useDraggable({ id }); //ref conecta al elemento del DOM

  return (
    <div
      ref={ref}
      className="draggable"
      style={{ cursor: "grab" }}
    >
      {children}
    </div>
  );
};

export default Draggable;

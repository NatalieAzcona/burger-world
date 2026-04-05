import { useDroppable } from "@dnd-kit/react";
import React from "react";

const Droppable = ({ id, children, className }) => {
  const { ref } = useDroppable({ id });

  return (
    <div className={className} ref={ref}>
      {children}
    </div>
  );
};

export default Droppable;

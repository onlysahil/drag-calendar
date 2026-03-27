import { DndContext } from "@dnd-kit/core";

const DragDropProvider = ({ children, onDragEnd }) => {
  return <DndContext onDragEnd={onDragEnd}>{children}</DndContext>;
};

export default DragDropProvider;
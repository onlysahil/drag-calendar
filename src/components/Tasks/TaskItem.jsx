import { useDraggable } from "@dnd-kit/core";

const TaskItem = ({ task }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task.id,
    data: task,
  });

  const style = {
    transform: transform
      ? `translate(${transform.x}px, ${transform.y}px)`
      : undefined,
  };

  return (
   <div
  ref={setNodeRef}
  style={style}
  {...listeners}
  {...attributes}
  className="task"
>
  {task.title}
</div>
  );
};

export default TaskItem;
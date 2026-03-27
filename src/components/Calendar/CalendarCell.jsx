import { useDroppable } from "@dnd-kit/core";

const CalendarCell = ({ date, tasks = [], onMoreClick }) => {
  const { setNodeRef, isOver } = useDroppable({
    id: date || "empty",
  });

  if (!date) {
    return <div className="empty-cell" />;
  }

  const [year, month, day] = date.split("-");

  // format date properly (YYYY-MM-DD)
  const formattedDate = `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;

  const today = new Date().toISOString().split("T")[0];
  const isToday = today === formattedDate;

  return (
    <div
      ref={setNodeRef}
      className={`cell ${isOver ? "cell-hover" : ""}`}
    >
      <div className={`date ${isToday ? "today" : ""}`}>
        {day}
      </div>

      <div className="tasks">
        {tasks.slice(0, 2).map((task) => (
          <div key={task.id} className="cell-task">
            {task.title}
          </div>
        ))}

        {tasks.length > 2 && (
          <div
            className="more clickable"
            onClick={() => onMoreClick && onMoreClick(date)}
          >
            +{tasks.length - 2} more
          </div>
        )}
      </div>
    </div>
  );
};

export default CalendarCell;
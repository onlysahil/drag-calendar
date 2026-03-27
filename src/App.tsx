import TaskList from "./components/Tasks/TaskList";
import Calendar from "./components/Calendar/Calendar";
import DragDropProvider from "./components/DragDrop/DragDropProvider";

import { tasks } from "./data/dummyTasks";
import { useTasks } from "./hooks/useTasks";

function App() {
  const { tasksByDate, addTaskToDate } = useTasks();

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (!over) return;

    const taskId = active.id;
    const date = over.id;

    const task = tasks.find((t: any) => t.id === taskId);

    if (!task) return;

    addTaskToDate(date, task);
  };

  return (
    <DragDropProvider onDragEnd={handleDragEnd}>
      <div className="app">
        <div className="sidebar">
          <div className="sidebar-card">
            <TaskList />
          </div>
        </div>

        <div className="calendar">
          <div className="calendar-card">
            <Calendar tasksByDate={tasksByDate} />
          </div>
        </div>
      </div>
    </DragDropProvider>
  );
}

export default App;
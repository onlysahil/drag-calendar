import { useState, useEffect } from "react";

export const useTasks = () => {
  const [tasksByDate, setTasksByDate] = useState(() => {
    const saved = localStorage.getItem("tasksByDate");
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem("tasksByDate", JSON.stringify(tasksByDate));
  }, [tasksByDate]);

  const addTaskToDate = (date, task) => {
    setTasksByDate((prev) => ({
      ...prev,
      [date]: [...(prev[date] || []), task],
    }));
  };

  return { tasksByDate, addTaskToDate };
};
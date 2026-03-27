import { useState } from "react";
import CalendarGrid from "./CalendarGrid";
import { getMonthData } from "../../utils/dateUtils";

const Calendar = ({ tasksByDate, setSelectedDate }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const { month, year, dates } = getMonthData(currentDate);

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1)
    );
  };

  return (
    <div>
      <div className="calendar-header">
        <div className="calendar-left">
          <button onClick={handlePrevMonth} className="btn">←</button>
          <button onClick={handleNextMonth} className="btn">→</button>

          <h2 className="calendar-title">
            {month} {year}
          </h2>
        </div>

        <button
          onClick={() => setCurrentDate(new Date())}
          className="btn today-btn"
        >
          Today
        </button>
      </div>

      <CalendarGrid
        dates={dates}
        tasksByDate={tasksByDate}
        onMoreClick={setSelectedDate} 
      />
    </div>
  );
};

export default Calendar;
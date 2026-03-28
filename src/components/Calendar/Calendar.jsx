import { useState } from "react";
import CalendarGrid from "./CalendarGrid";
import { getMonthData } from "../../utils/dateUtils";

const Calendar = ({ tasksByDate }) => {
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
          <button onClick={handlePrevMonth} className="btn"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="currentColor" d="M448 440a16 16 0 0 1-12.61-6.15c-22.86-29.27-44.07-51.86-73.32-67C335 352.88 301 345.59 256 344.23V424a16 16 0 0 1-27 11.57l-176-168a16 16 0 0 1 0-23.14l176-168A16 16 0 0 1 256 88v80.36c74.14 3.41 129.38 30.91 164.35 81.87C449.32 292.44 464 350.9 464 424a16 16 0 0 1-16 16"/></svg></button>
          <button onClick={handleNextMonth} className="btn"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="currentColor" d="M48 399.26C48 335.19 62.44 284 90.91 247c34.38-44.67 88.68-68.77 161.56-71.75V72L464 252L252.47 432V329.35c-44.25 1.19-77.66 7.58-104.27 19.84c-28.75 13.25-49.6 33.05-72.08 58.7L48 440Z"/></svg></button>

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
        onMoreClick={() => {}}
      />
    </div>
  );
};

export default Calendar;
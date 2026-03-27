import CalendarCell from "./CalendarCell";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const CalendarGrid = ({ dates = [], tasksByDate = {}, onMoreClick }) => {
  return (
    <div>
      {/* Day Names */}
      <div className="days">
        {days.map((day) => (
          <div key={day} className="day">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Cells */}
      <div className="grid">
        {dates.map((date, index) => (
          <CalendarCell
            key={index}
            date={date}
            tasks={date ? tasksByDate?.[date] || [] : []}
            onMoreClick={onMoreClick}
          />
        ))}
      </div>
    </div>
  );
};

export default CalendarGrid;
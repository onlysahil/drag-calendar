export const getMonthData = (currentDate) => {
  const year = currentDate.getFullYear();
  const monthIndex = currentDate.getMonth();

  const monthNames = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];

  const firstDay = new Date(year, monthIndex, 1).getDay();
  const totalDays = new Date(year, monthIndex + 1, 0).getDate();

  const dates = [];

  // empty slots before first day
  for (let i = 0; i < firstDay; i++) {
    dates.push(null);
  }

  // actual dates (✅ FIXED FORMAT)
  for (let i = 1; i <= totalDays; i++) {
    const formattedDate = `${year}-${String(monthIndex + 1).padStart(2, "0")}-${String(i).padStart(2, "0")}`;
    dates.push(formattedDate);
  }

  return {
    year,
    month: monthNames[monthIndex],
    dates,
  };
};
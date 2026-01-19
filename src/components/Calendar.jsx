import { useState } from "react";
import "../styles/calendar.css";

function Calendar() {

    const today = new Date();
    const [currentMonthIndex, setCurrentMonthIndex] = useState(0);

    // Array with 28 days (4 weeks) from today's date
    const days = Array.from({ length:28 }, (_, index) => {
        const date = new Date(today);
        date.setDate(today.getDate() + index);
        return date;
    });

    // Build a display array grouped by month
    const months = [];
    let currentMonth = days[0].getMonth();
    let currentYear = days[0].getFullYear();
    let monthDays = [];

    for (let i = 0; i < days.length; i++) {
      const date = days[i];
      if (date.getMonth() !== currentMonth) {
        months.push({ 
            month: currentMonth, 
            year: currentYear,
            days: monthDays });
        currentMonth = date.getMonth();
        currentYear = date.getFullYear();
        monthDays = [];
      }
      monthDays.push(date);
    }
    months.push({ 
        month: currentMonth, 
        year: currentYear,
        days: monthDays });

    // Current displayed month
    const displayedMonth = months[currentMonthIndex];

    // Month and year label
    const monthLabel = new Date(displayedMonth.year, displayedMonth.month).toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
    });

    // For viewing two separate months
    const handlePrev = () => {
        if (currentMonthIndex > 0) {
            setCurrentMonthIndex(currentMonthIndex - 1);
        }
    };

  const handleNext = () => {
    if (currentMonthIndex < months.length -1) {
        setCurrentMonthIndex(currentMonthIndex + 1);
    }
  };

  return (
    <div className="calendar-container">
        <div className="calendar-header">
        <button
          type="button"
          onClick={handlePrev}
          disabled={currentMonthIndex === 0}
        >‹</button>
        <span>{monthLabel}</span>
        <button
          type="button"
          onClick={handleNext}
          disabled={currentMonthIndex === months.length -1}
        >›</button>
      </div>
      <div className="calendar-weekdays">
        <span>MON</span>
        <span>TUE</span>
        <span>WED</span>
        <span>THU</span>
        <span>FRI</span>
        <span>SAT</span>
        <span>SUN</span>
      </div>

      <div className="calendar-days">
        {displayedMonth.days.map((date, index) => (
            <div key={index} className="calendar-day">
              {date.getDate()}
            </div>
          ))}
      </div>
    </div>
  );
}

export default Calendar;
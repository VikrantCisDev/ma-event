import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "../../styles/calendarCustom.css";

const CalendarCustom = () => {
  const [value, onChange] = useState(new Date());

  return (
    <>
      <Calendar onChange={onChange} value={value} className="customCalendar" />
    </>
  );
}

export default CalendarCustom;
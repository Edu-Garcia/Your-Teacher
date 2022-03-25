import React from "react";
import  "@fullcalendar/react/dist/vdom" ; 
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

export const Calendar = () => {

  const handleClick = (dateClickInfo) => {
    const { date, dateStr } = dateClickInfo
    
    console.log(date)
    console.log(dateStr)
  }

  return (
    <FullCalendar
      plugins={[timeGridPlugin, interactionPlugin]}
      initialView="timeGridWeek"
      dateClick={handleClick}
    />
  );
}
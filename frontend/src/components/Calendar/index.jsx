import React, { useCallback, useContext, useEffect, useReducer, useState } from "react";
import "@fullcalendar/react/dist/vdom" ; 
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import brLocale from '@fullcalendar/core/locales/pt-br';
import api from '../../config/api'
import { Auth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const Calendar = ({ isTeacher, helloMessage, phoneTeacher, announcement_id}) => {

  const [events, setEvents] = useState([]);

  const [any, forceUpdate] = useReducer(num => num + 1, 0);
  function handleChange(){
    forceUpdate();
  }

  useEffect(() => {
    try {
      api.get(`/api/schedules/${announcement_id}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      }).then(response => {
        const newEvents = response.data.map((item) => ({
          id: item.schedule_id,
          title: item.title,
          start: item.start,
          end: item.end,
          announcement_id: item.announcement_id
        }))
        setEvents(newEvents);
      })
    } catch (error) {
      console.log(error);
    }
  }, [any])

  const { token } = useContext(Auth);

  const eventClick = (eventClickInfo) => {
    const { event } = eventClickInfo
    const message = `${helloMessage}%20Gostaria%20de%20marcar%20uma%20aula%20com%20você%20no%20dia%20${event.start.toLocaleDateString()}%20às%20${event.start.toLocaleTimeString()}.`;
    
    window.open(`https://web.whatsapp.com/send?phone=55${phoneTeacher}&text=${message}`)
  }
  
  const deleteEvent = (eventClickInfo) => {
    const { event } = eventClickInfo

    if (confirm(`Deseja excluir o evento ${event.title}?`)) {
      try {
        api.delete(`/api/schedules/${event.id}`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          }
        }).then(() => handleChange())
      } catch (error) {
        console.log(error);
      }
    }
  }
  
  const dateClick = (dateClickInfo, announcement_id) => {
    const { date } = dateClickInfo

    if(date.toJSON() < new Date().toJSON()) {
      alert('Horário indisponível');
      return;
    }

    if (!confirm('Deseja adicionar um evento?')) return

    const end = new Date(date.getTime());
    end.setHours(end.getHours() + 1)

    const data = {
      title: 'Marcar Aula',
      start: date.toJSON(),
      end: end.toJSON(),
      announcement_id,
    }

    try {
      api.post('/api/schedules', data, {
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      }).then(() => handleChange())
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <FullCalendar
      locale={brLocale}
      plugins={[timeGridPlugin, interactionPlugin]}
      initialView="timeGridWeek"
      headerToolbar={{
        center: 'title',
        left: 'today prev,next',
        right: ''
      }}
      allDaySlot={false}
      dateClick={isTeacher ? (e) => dateClick(e, announcement_id) : null}
      events={events}
      eventClick={isTeacher ? deleteEvent : eventClick}
    />
  );
}
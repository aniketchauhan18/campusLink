import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import eventsData from '../events.json'
import {
  Divider,
} from "@chakra-ui/react"


const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showEvent, setShowEvent] = useState(false);

  useEffect(() => {
    setEvents(eventsData);
  }, []);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setShowEvent(true);
  }

  const customDayPropGetter = (date) => {
    if (moment(date).day() === 6 || moment(date).day() === 0) { // for Saturday and Sunday
      return {
        style: {
          backgroundColor: '#f7f7f7',
        },
      };
    }
  }
 
  return (
    <div className='w-full mt-10 p-4 flex flex-col gap-4  h-screen'>
      <div className='flex justify-center text-zinc-700 items-center  text-8xl font-bold mb-10'>
        Discover College Events
      </div>
      <Divider orientation='horizontal' className='mb-10' />
      <div className='flex justify-center items-center gap-10'>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          onSelectEvent={handleEventClick}
          onSelectSlot={() => setShowEvent(false)}
          dayPropGetter={customDayPropGetter}
          className='h-[60vh] w-full border-2 border-gray-500 rounded-md p-2  p-2 bg-white'
          eventPropGetter={(event) => {
            let newStyle = "bg-zinc-300 text-black hover:text-white hover:bg-zinc-400 rounded py-1 px-3 "
            if (event.isMine) {
              newStyle = "bg-gray-200 rounded py-1 px-3"
            }
            return {
              className: newStyle,
            }
          }}
          views={['month', 'agenda']}
        />
        <div className='flex justify-center  items-center w-1/2 h-auto bg-zinc-200 ml-1 mr-2 rounded-md text-white scheduler-text'>
          {showEvent && (
            <div className='flex justify-center items-center w-3/4 flex-col p-3'>
              <div className=' mb-5 text-xl text-zinc-500 scheduler-title'>
                {selectedEvent.title}
              </div>
              <img src={selectedEvent.image} className='w-3/4  rounded-md shadow transform hover:scale-105 transition ease-in-out duration-300 '/>
              <div className='mt-4 py-1 px-3 bg-zinc-500 rounded'>
                Location: {selectedEvent.location}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyCalendar;
import { useState } from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, addMonths, subMonths } from 'date-fns';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaCalendarAlt } from 'react-icons/fa';
import EventModal from './EventModal';

const Calendar = ({ events }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const getEventsForDate = (date) => {
    return events.filter(event => isSameDay(new Date(event.date), date));
  };

  const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));
  const prevMonth = () => setCurrentDate(subMonths(currentDate, 1));

  const handleDateClick = (date) => {
    setSelectedDate(date);
    const dateEvents = getEventsForDate(date);
    if (dateEvents.length > 0) {
      setShowModal(true);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={prevMonth}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <FaChevronLeft className="text-gray-600" />
        </button>
        
        <h2 className="text-xl font-bold flex items-center gap-2">
          <FaCalendarAlt className="text-primary" />
          {format(currentDate, 'MMMM yyyy')}
        </h2>
        
        <button
          onClick={nextMonth}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <FaChevronRight className="text-gray-600" />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-2 mb-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="text-center font-medium text-sm py-2">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2">
        {daysInMonth.map((day, idx) => {
          const dayEvents = getEventsForDate(day);
          const isCurrentMonth = isSameMonth(day, currentDate);
          
          return (
            <motion.button
              key={idx}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleDateClick(day)}
              className={`
                relative p-2 h-20 rounded-lg border transition-colors
                ${isCurrentMonth ? 'text-gray-900' : 'text-gray-400'}
                ${dayEvents.length > 0 ? 'bg-primary bg-opacity-10' : ''}
                hover:border-primary
              `}
            >
              <span className="text-sm">{format(day, 'd')}</span>
              {dayEvents.length > 0 && (
                <div className="absolute bottom-2 left-2 right-2">
                  <div className="text-xs bg-primary text-dark px-1 py-0.5 rounded truncate">
                    {dayEvents[0].title}
                    {dayEvents.length > 1 && ` +${dayEvents.length - 1}`}
                  </div>
                </div>
              )}
            </motion.button>
          );
        })}
      </div>

      {showModal && selectedDate && (
        <EventModal
          date={selectedDate}
          events={getEventsForDate(selectedDate)}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default Calendar;
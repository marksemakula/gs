import { useState } from 'react';
import { motion } from 'framer-motion';
import Calendar from '../components/calendar/Calendar';
import EventList from '../components/calendar/EventList';

const Events = () => {
  // Sample events data - in a real application, this would come from an API
  const [events] = useState([
    {
      title: "Term 2 Reporting Day",
      description: "Students report back for Term 2 academic session",
      date: "2024-04-15T08:00:00",
      location: "School Campus",
      category: "Academic"
    },
    {
      title: "Lake Mburo Trip",
      description: "Educational trip to explore wildlife and nature",
      date: "2024-05-01T07:00:00",
      location: "Lake Mburo National Park",
      category: "Field Trip"
    },
    {
      title: "STEM Innovation Fair",
      description: "Showcase of student projects in science and technology",
      date: "2024-05-15T09:00:00",
      location: "School Hall",
      category: "STEM"
    },
    {
      title: "Parent-Teacher Meeting",
      description: "Term 2 progress review with parents",
      date: "2024-06-01T14:00:00",
      location: "School Hall",
      category: "Meeting"
    }
  ]);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">School Calendar & Events</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with all school activities, academic calendar, and important events throughout the year.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Calendar events={events} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <EventList events={events} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Events;
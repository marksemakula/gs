import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { FaClock, FaMapMarkerAlt } from 'react-icons/fa';

const EventList = ({ events }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-6">Upcoming Events</h2>
      
      <div className="space-y-4">
        {events.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-3">{event.description}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <FaClock />
                    <span>{format(new Date(event.date), 'MMM d, yyyy h:mm a')}</span>
                  </div>
                  {event.location && (
                    <div className="flex items-center gap-1">
                      <FaMapMarkerAlt />
                      <span>{event.location}</span>
                    </div>
                  )}
                </div>
              </div>
              {event.category && (
                <span className="bg-primary bg-opacity-10 text-dark px-3 py-1 rounded-full text-sm">
                  {event.category}
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EventList;
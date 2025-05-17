import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { FaTimes, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

const EventModal = ({ date, events, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-lg p-6 max-w-md w-full mx-4"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">
            Events for {format(date, 'MMMM d, yyyy')}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <FaTimes />
          </button>
        </div>

        <div className="space-y-4">
          {events.map((event, index) => (
            <div
              key={index}
              className="border-l-4 border-primary pl-4 py-2"
            >
              <h4 className="font-bold text-lg mb-2">{event.title}</h4>
              <p className="text-gray-600 mb-2">{event.description}</p>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <FaClock />
                  <span>{format(new Date(event.date), 'h:mm a')}</span>
                </div>
                {event.location && (
                  <div className="flex items-center gap-1">
                    <FaMapMarkerAlt />
                    <span>{event.location}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default EventModal;
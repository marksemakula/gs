import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Uganda MoES Term 2 reopening: first Monday of June each year
const getNextTerm2Date = () => {
  const now = new Date();
  const tryYear = (y) => {
    const june1 = new Date(y, 5, 1, 8, 0, 0);
    const dayOfWeek = june1.getDay();
    const daysUntilMonday = dayOfWeek === 1 ? 0 : (8 - dayOfWeek) % 7;
    return new Date(y, 5, 1 + daysUntilMonday, 8, 0, 0);
  };
  let date = tryYear(now.getFullYear());
  if (date <= now) date = tryYear(now.getFullYear() + 1);
  return date;
};

// Next future occurrence of a fixed month/day, rolling to next year if passed
const nextOccurrence = (month, day) => {
  const now = new Date();
  const candidate = new Date(now.getFullYear(), month - 1, day);
  if (candidate <= now) candidate.setFullYear(now.getFullYear() + 1);
  return candidate;
};

const fmt = (date) => date.toLocaleDateString('en-UG', { year: 'numeric', month: 'long', day: 'numeric' });

const events = [
  {
    id: 1,
    title: "Term 2 Reporting Day",
    date: fmt(getNextTerm2Date()),
    description: "All students report back for Term 2 academic session",
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800"
  },
  {
    id: 2,
    title: "Lake Mburo National Park Trip",
    date: fmt(nextOccurrence(5, 1)),
    description: "Educational trip to explore wildlife and nature",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800"
  },
  {
    id: 3,
    title: "STEM Innovation Fair",
    date: fmt(nextOccurrence(5, 15)),
    description: "Showcasing student projects in science and technology",
    image: "/images/STEM.png",
  }
];

const EventCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === events.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? events.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Upcoming Events</h2>
      
      <div className="relative h-[400px] overflow-hidden rounded-xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <div className="relative h-full">
              <img
                src={events[currentIndex].image}
                alt={events[currentIndex].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end">
                <div className="p-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">{events[currentIndex].title}</h3>
                  <p className="text-primary mb-2">{events[currentIndex].date}</p>
                  <p className="text-gray-200">{events[currentIndex].description}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
        >
          <FaChevronLeft className="text-dark" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
        >
          <FaChevronRight className="text-dark" />
        </button>
      </div>

      <div className="flex justify-center mt-4 gap-2">
        {events.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? 'bg-primary' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default EventCarousel;
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const partners = [
  {
    id: 1,
    name: "Partner 1",
    logo: "https://via.placeholder.com/150?text=Partner+1"
  },
  {
    id: 2,
    name: "Partner 2",
    logo: "https://via.placeholder.com/150?text=Partner+2"
  },
  {
    id: 3,
    name: "Partner 3",
    logo: "https://via.placeholder.com/150?text=Partner+3"
  },
  {
    id: 4,
    name: "Partner 4",
    logo: "https://via.placeholder.com/150?text=Partner+4"
  }
];

const PartnerCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === partners.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Partners</h2>
        
        <div className="flex justify-center items-center gap-8 flex-wrap">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-4 rounded-lg shadow-md"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-32 h-32 object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerCarousel;
import { motion } from 'framer-motion';
import EventCarousel from '../components/EventCarousel';
import PartnerCarousel from '../components/PartnerCarousel';
import STEMPortal from '../components/STEMPortal';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1920')"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center">
          <div className="flex flex-col md:flex-row items-center w-full gap-8">
            {/* Text Content - Left Side */}
            <div className="text-white md:w-1/2">
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-4xl sm:text-5xl font-bold mb-4"
              >
                Welcome to Good Shepherd School
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-lg sm:text-xl mb-8"
              >
                Nurturing Excellence in Education Since 2002
              </motion.p>
              <motion.button
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="bg-primary text-dark px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition-colors"
              >
                Learn More
              </motion.button>
            </div>
            
            {/* Logo - Right Side */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="md:w-1/2 flex justify-center"
            >
              <img 
                src="/images/Good Shepherd School Kawaala Logo.png" 
                alt="Good Shepherd School Logo"
                className="max-h-64 md:max-h-80 w-auto object-contain"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4">Academic Excellence</h3>
              <p>Providing quality education with a focus on STEM and emerging technologies.</p>
            </motion.div>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4">Christian Values</h3>
              <p>Developing character strength and moral values in our students.</p>
            </motion.div>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4">Holistic Development</h3>
              <p>Focusing on academic, artistic, and athletic excellence.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STEM E-Learning Portal Section */}
      <STEMPortal />

      {/* Events Carousel */}
      <EventCarousel />

      {/* Partners Carousel */}
      <PartnerCarousel />
    </div>
  );
};

export default Home;
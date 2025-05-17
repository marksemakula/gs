import { motion } from 'framer-motion';
import STEMPortal from '../components/STEMPortal';

const STEM = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[400px] bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/blueboard.png')"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center">
          <div className="text-white">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl font-bold mb-4"
            >
              STEM Education
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl max-w-2xl"
            >
              Empowering students with cutting-edge technology and innovative learning approaches in Science, Technology, Engineering, and Mathematics.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* STEM Portal */}
      <STEMPortal />

      {/* Additional STEM Resources */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center mb-12"
          >
            Additional Resources
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4">Teacher Resources</h3>
              <p className="mb-4">Access lesson plans, teaching materials, and professional development resources.</p>
              <button className="text-secondary hover:text-primary transition-colors">
                Learn More →
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4">Parent Guide</h3>
              <p className="mb-4">Help your child excel in STEM subjects with our comprehensive parent resources.</p>
              <button className="text-secondary hover:text-primary transition-colors">
                Learn More →
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default STEM;
import { motion } from 'framer-motion';
import { FaRobot, FaLaptopCode, FaMicroscope, FaCalculator } from 'react-icons/fa';

const STEMPortal = () => {
  const resources = [
    {
      icon: <FaLaptopCode className="text-4xl text-primary" />,
      title: "Coding & Programming",
      description: "Interactive coding lessons and projects for all levels",
      link: "/stem/coding"
    },
    {
      icon: <FaRobot className="text-4xl text-primary" />,
      title: "Robotics Lab",
      description: "Virtual robotics simulations and hands-on projects",
      link: "/stem/robotics"
    },
    {
      icon: <FaMicroscope className="text-4xl text-primary" />,
      title: "Science Experiments",
      description: "Virtual lab experiences and scientific demonstrations",
      link: "/stem/science"
    },
    {
      icon: <FaCalculator className="text-4xl text-primary" />,
      title: "Mathematics",
      description: "Interactive math problems and visual learning tools",
      link: "/stem/math"
    }
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">STEM E-Learning Portal</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our digital learning resources designed to enhance STEM education through interactive experiences and emerging technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  {resource.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <button 
                  className="bg-secondary text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-colors"
                  onClick={() => console.log(`Navigate to ${resource.link}`)}
                >
                  Explore
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <button className="bg-primary text-dark font-bold px-8 py-3 rounded-full hover:bg-opacity-90 transition-colors">
            Access Full E-Learning Platform
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default STEMPortal;
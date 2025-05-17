import { motion } from 'framer-motion';
import EnrollmentForm from '../components/enrollment/EnrollmentForm';

const Enroll = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Enroll at Good Shepherd School</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join our community of learners and experience quality education that shapes future leaders.
            Complete the enrollment form below to begin your journey with us.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-lg shadow-lg p-6"
        >
          <EnrollmentForm />
        </motion.div>
      </div>
    </div>
  );
};

export default Enroll;
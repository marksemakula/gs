import { motion } from 'framer-motion';
import { FaGraduationCap, FaBook, FaLaptop, FaSchool } from 'react-icons/fa';

const donationOptions = [
  {
    id: 'scholarship',
    title: 'Scholarship Fund',
    icon: <FaGraduationCap className="text-4xl text-primary" />,
    description: 'Support underprivileged students with quality education',
    amounts: [50000, 100000, 200000, 500000],
    currency: 'UGX'
  },
  {
    id: 'library',
    title: 'Library Resources',
    icon: <FaBook className="text-4xl text-primary" />,
    description: 'Help expand our library with books and learning materials',
    amounts: [30000, 60000, 100000, 250000],
    currency: 'UGX'
  },
  {
    id: 'technology',
    title: 'Technology Fund',
    icon: <FaLaptop className="text-4xl text-primary" />,
    description: 'Support our STEM program with modern technology',
    amounts: [100000, 250000, 500000, 1000000],
    currency: 'UGX'
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure Development',
    icon: <FaSchool className="text-4xl text-primary" />,
    description: 'Contribute to school facilities improvement',
    amounts: [500000, 1000000, 2500000, 5000000],
    currency: 'UGX'
  }
];

const DonationOptions = ({ onSelect }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {donationOptions.map((option, index) => (
        <motion.div
          key={option.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
        >
          <div className="flex flex-col items-center text-center mb-6">
            {option.icon}
            <h3 className="text-xl font-bold mt-4 mb-2">{option.title}</h3>
            <p className="text-gray-600">{option.description}</p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {option.amounts.map((amount) => (
              <button
                key={amount}
                onClick={() => onSelect(option.id, amount)}
                className="bg-gray-50 hover:bg-primary hover:text-dark py-2 px-4 rounded-lg transition-colors"
              >
                {option.currency} {amount.toLocaleString()}
              </button>
            ))}
          </div>

          <button
            onClick={() => onSelect(option.id, 'custom')}
            className="w-full mt-3 text-secondary hover:text-primary transition-colors"
          >
            Enter custom amount
          </button>
        </motion.div>
      ))}
    </div>
  );
};

export default DonationOptions;
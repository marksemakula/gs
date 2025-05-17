import { motion } from 'framer-motion';

const ProgressBar = ({ currentStep, totalSteps }) => {
  const steps = [
    'Personal Info',
    'Guardian Info',
    'Academic Info',
    'Documents',
    'Review'
  ];

  return (
    <div className="w-full">
      <div className="flex justify-between mb-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center relative flex-1"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className={`w-8 h-8 rounded-full flex items-center justify-center mb-2
                ${index + 1 <= currentStep ? 'bg-primary text-dark' : 'bg-gray-200 text-gray-600'}`}
            >
              {index + 1}
            </motion.div>
            <span className="text-sm text-center hidden md:block">{step}</span>
            {index < steps.length - 1 && (
              <div
                className={`absolute top-4 -right-1/2 w-full h-0.5 
                  ${index + 1 < currentStep ? 'bg-primary' : 'bg-gray-200'}`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
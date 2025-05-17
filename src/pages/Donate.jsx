import { useState } from 'react';
import { motion } from 'framer-motion';
import DonationOptions from '../components/donation/DonationOptions';
import DonationForm from '../components/donation/DonationForm';
import PartnershipForm from '../components/donation/PartnershipForm';

const Donate = () => {
  const [view, setView] = useState('options'); // options, donate, partner
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedAmount, setSelectedAmount] = useState(null);

  const handleDonationSelect = (option, amount) => {
    setSelectedOption(option);
    setSelectedAmount(amount);
    setView('donate');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Support Our Mission</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Your support helps us provide quality education and develop future leaders. 
            Choose how you'd like to contribute to our mission.
          </p>

          <div className="flex justify-center gap-4">
            <button
              onClick={() => setView('options')}
              className={`px-6 py-2 rounded-full transition-colors
                ${view === 'options' ? 'bg-primary text-dark' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              Make a Donation
            </button>
            <button
              onClick={() => setView('partner')}
              className={`px-6 py-2 rounded-full transition-colors
                ${view === 'partner' ? 'bg-primary text-dark' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              Become a Partner
            </button>
          </div>
        </motion.div>

        {view === 'options' && (
          <DonationOptions onSelect={handleDonationSelect} />
        )}

        {view === 'donate' && (
          <DonationForm
            selectedOption={selectedOption}
            amount={selectedAmount}
            onBack={() => setView('options')}
          />
        )}

        {view === 'partner' && (
          <PartnershipForm />
        )}
      </div>
    </div>
  );
};

export default Donate;
import { useState } from 'react';
import { motion } from 'framer-motion';

const DonationForm = ({ selectedOption, amount, onBack }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    amount: amount === 'custom' ? '' : amount,
    paymentMethod: '',
    isAnonymous: false,
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Donation form submitted:', formData);
    // Handle form submission
  };

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData(prev => ({
      ...prev,
      [e.target.name]: value
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-lg p-6"
    >
      <button
        onClick={onBack}
        className="text-secondary hover:text-primary mb-6 transition-colors"
      >
        ← Back to donation options
      </button>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Amount (UGX)</label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary"
              required
              min="1000"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Payment Method</label>
          <select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary"
            required
          >
            <option value="">Select Payment Method</option>
            <option value="mobile_money">Mobile Money</option>
            <option value="bank_transfer">Bank Transfer</option>
            <option value="card">Credit/Debit Card</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Message (Optional)</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="3"
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary"
          />
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            name="isAnonymous"
            checked={formData.isAnonymous}
            onChange={handleChange}
            className="mr-2"
          />
          <label className="text-sm">Make this donation anonymous</label>
        </div>

        <button
          type="submit"
          className="w-full bg-secondary text-white py-3 rounded-lg hover:bg-opacity-90 transition-colors"
        >
          Complete Donation
        </button>
      </form>
    </motion.div>
  );
};

export default DonationForm;
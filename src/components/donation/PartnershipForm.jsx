import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBuilding, FaHandshake, FaChalkboardTeacher, FaLaptopCode } from 'react-icons/fa';

const partnershipTypes = [
  {
    id: 'corporate',
    title: 'Corporate Partnership',
    icon: <FaBuilding className="text-4xl text-primary" />,
    description: 'Partner with us through CSR initiatives and long-term support programs'
  },
  {
    id: 'community',
    title: 'Community Partnership',
    icon: <FaHandshake className="text-4xl text-primary" />,
    description: 'Collaborate on community development and educational initiatives'
  },
  {
    id: 'academic',
    title: 'Academic Partnership',
    icon: <FaChalkboardTeacher className="text-4xl text-primary" />,
    description: 'Join our network of educational institutions for knowledge sharing'
  },
  {
    id: 'technical',
    title: 'Technical Partnership',
    icon: <FaLaptopCode className="text-4xl text-primary" />,
    description: 'Support our STEM programs through technical expertise and resources'
  }
];

// Rest of the component remains the same
const PartnershipForm = () => {
  const [formData, setFormData] = useState({
    organizationType: '',
    name: '',
    email: '',
    phone: '',
    organization: '',
    partnershipType: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Partnership form submitted:', formData);
    // Handle form submission
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {partnershipTypes.map((type, index) => (
          <motion.div
            key={type.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`bg-white rounded-lg p-6 cursor-pointer transition-all
              ${formData.partnershipType === type.id ? 'ring-2 ring-primary shadow-lg' : 'shadow hover:shadow-lg'}
            `}
            onClick={() => handleChange({ target: { name: 'partnershipType', value: type.id } })}
          >
            <div className="flex flex-col items-center text-center">
              {type.icon}
              <h3 className="text-xl font-bold mt-4 mb-2">{type.title}</h3>
              <p className="text-gray-600">{type.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.form
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-white rounded-lg shadow-lg p-6 space-y-4"
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Organization Type</label>
            <select
              name="organizationType"
              value={formData.organizationType}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary"
              required
            >
              <option value="">Select Type</option>
              <option value="corporate">Corporate</option>
              <option value="ngo">NGO</option>
              <option value="educational">Educational Institution</option>
              <option value="government">Government</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Organization Name</label>
            <input
              type="text"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Contact Person</label>
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
          <label className="block text-sm font-medium mb-1">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-secondary text-white py-2 rounded-lg hover:bg-opacity-90 transition-colors"
        >
          Submit Partnership Request
        </button>
      </motion.form>
    </div>
  );
};

export default PartnershipForm;
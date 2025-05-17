import { useState } from 'react';
import { motion } from 'framer-motion';
import PersonalInfo from './steps/PersonalInfo';
import GuardianInfo from './steps/GuardianInfo';
import AcademicInfo from './steps/AcademicInfo';
import Documents from './steps/Documents';
import Review from './steps/Review';
import ProgressBar from './ProgressBar';

const EnrollmentForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    // Guardian Information
    guardianName: '',
    relationship: '',
    phone: '',
    email: '',
    address: '',
    // Academic Information
    previousSchool: '',
    gradeApplying: '',
    academicYear: '',
    // Documents
    birthCertificate: null,
    previousReports: null,
    passport: null
  });

  const updateFormData = (data) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  const nextStep = () => {
    setStep(prev => Math.min(prev + 1, 5));
  };

  const prevStep = () => {
    setStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    // Navigate to success page or show success message
  };

  const steps = {
    1: <PersonalInfo data={formData} updateData={updateFormData} />,
    2: <GuardianInfo data={formData} updateData={updateFormData} />,
    3: <AcademicInfo data={formData} updateData={updateFormData} />,
    4: <Documents data={formData} updateData={updateFormData} />,
    5: <Review data={formData} />
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <ProgressBar currentStep={step} totalSteps={5} />
      
      <motion.div
        key={step}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        className="mt-8"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          {steps[step]}
          
          <div className="flex justify-between mt-8">
            {step > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="bg-gray-200 text-dark px-6 py-2 rounded-full hover:bg-gray-300 transition-colors"
              >
                Previous
              </button>
            )}
            
            {step < 5 ? (
              <button
                type="button"
                onClick={nextStep}
                className="bg-primary text-dark px-6 py-2 rounded-full hover:bg-opacity-90 transition-colors ml-auto"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="bg-secondary text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-colors ml-auto"
              >
                Submit Application
              </button>
            )}
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default EnrollmentForm;
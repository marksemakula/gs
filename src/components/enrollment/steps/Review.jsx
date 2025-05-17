const Review = ({ data }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-6">Review Your Application</h2>
      
      <div className="space-y-6">
        <section className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-bold mb-3">Personal Information</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600">Full Name</p>
              <p className="font-medium">{data.firstName} {data.lastName}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Date of Birth</p>
              <p className="font-medium">{data.dateOfBirth}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Gender</p>
              <p className="font-medium">{data.gender}</p>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-bold mb-3">Guardian Information</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600">Guardian Name</p>
              <p className="font-medium">{data.guardianName}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Relationship</p>
              <p className="font-medium">{data.relationship}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Contact</p>
              <p className="font-medium">{data.phone}</p>
              <p className="font-medium">{data.email}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Address</p>
              <p className="font-medium">{data.address}</p>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-bold mb-3">Academic Information</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600">Previous School</p>
              <p className="font-medium">{data.previousSchool}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Grade Applying For</p>
              <p className="font-medium">{data.gradeApplying}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Academic Year</p>
              <p className="font-medium">{data.academicYear}</p>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-bold mb-3">Documents Uploaded</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Birth Certificate</li>
            <li>Previous School Reports</li>
            <li>Passport Photo</li>
          </ul>
        </section>

        <div className="bg-yellow-50 p-4 rounded-lg">
          <p className="text-sm">
            Please review all information carefully before submitting. By submitting this application,
            you confirm that all provided information is accurate and complete.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Review;
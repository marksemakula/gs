const Documents = ({ data, updateData }) => {
  const handleFileChange = (e) => {
    updateData({ [e.target.name]: e.target.files[0] });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-6">Required Documents</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Birth Certificate</label>
          <input
            type="file"
            name="birthCertificate"
            onChange={handleFileChange}
            accept=".pdf,.jpg,.jpeg,.png"
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary"
            required
          />
          <p className="text-sm text-gray-500 mt-1">
            Upload a scanned copy of the birth certificate (PDF, JPG, PNG)
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Previous School Reports</label>
          <input
            type="file"
            name="previousReports"
            onChange={handleFileChange}
            accept=".pdf"
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary"
            required
          />
          <p className="text-sm text-gray-500 mt-1">
            Upload recent academic reports (PDF format)
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Passport Photo</label>
          <input
            type="file"
            name="passport"
            onChange={handleFileChange}
            accept=".jpg,.jpeg,.png"
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary"
            required
          />
          <p className="text-sm text-gray-500 mt-1">
            Upload a recent passport-sized photograph (JPG, PNG)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Documents;
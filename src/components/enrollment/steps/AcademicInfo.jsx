const AcademicInfo = ({ data, updateData }) => {
  const handleChange = (e) => {
    updateData({ [e.target.name]: e.target.value });
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-6">Academic Information</h2>
      
      <div>
        <label className="block text-sm font-medium mb-1">Previous School</label>
        <input
          type="text"
          name="previousSchool"
          value={data.previousSchool}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary"
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Grade Applying For</label>
          <select
            name="gradeApplying"
            value={data.gradeApplying}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary"
            required
          >
            <option value="">Select Grade</option>
            <option value="nursery">Nursery</option>
            <option value="p1">Primary 1</option>
            <option value="p2">Primary 2</option>
            <option value="p3">Primary 3</option>
            <option value="p4">Primary 4</option>
            <option value="p5">Primary 5</option>
            <option value="p6">Primary 6</option>
            <option value="p7">Primary 7</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Academic Year</label>
          <select
            name="academicYear"
            value={data.academicYear}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary"
            required
          >
            <option value="">Select Year</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default AcademicInfo;
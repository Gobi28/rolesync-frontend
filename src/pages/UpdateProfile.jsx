import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UpdateProfile = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: 'Gobi R',
    email: 'gobi@example.com',
    phone: '9876543210',
    education: 'B.Tech IT - PSNA College',
    softSkills: 'Communication, Teamwork, Adaptability',
    technicalSkills: 'HTML, CSS, JavaScript, React, Node.js',
    certifications: 'Full Stack Development - Udemy',
    projects: 'RoleSync AI System',
    experience: '1 Year - Frontend Developer at XYZ Corp',
    resume: 'https://example.com/resume.pdf'
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would update the database/backend
    alert("Profile Updated!");
    navigate('/employee/profile');
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-200 to-pink-200 p-6 flex justify-center">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-xl w-full max-w-3xl space-y-4">
        <h2 className="text-2xl font-bold text-center text-gray-800">Update Profile</h2>
        {Object.keys(formData).map((key, index) => (
          <div key={index}>
            <label className="block text-sm font-medium capitalize text-gray-600">{key.replace(/([A-Z])/g, ' $1')}</label>
            <input
              type="text"
              name={key}
              value={formData[key]}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md"
            />
          </div>
        ))}
        <button type="submit" className="w-full bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;

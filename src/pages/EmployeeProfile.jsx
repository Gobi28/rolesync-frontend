// src/pages/EmployeeProfile.jsx
import React, { useState } from 'react';
import {
  FaUser, FaTools, FaLightbulb, FaCertificate, FaBriefcase,
  FaGraduationCap, FaProjectDiagram, FaFileAlt, FaEdit, FaSignOutAlt, FaComments
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const sampleEmployee = {
  name: 'Gobi R',
  email: 'gobi@example.com',
  phone: '9876543210',
  education: 'B.Tech IT - PSNA College',
  softSkills: ['Communication', 'Teamwork', 'Adaptability'],
  technicalSkills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
  certifications: ['Full Stack Development - Udemy'],
  projects: ['RoleSync AI System'],
  experience: '1 Year - Frontend Developer at XYZ Corp',
  resume: 'https://example.com/resume.pdf',
  predictedRole: 'Frontend Engineer',
  isFirstTime: false // simulate if profile was already submitted
};

const EmployeeProfile = () => {
  const [requested, setRequested] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  const handleRequestRole = () => {
    setRequested(true);
    alert(`Role request for "${sampleEmployee.predictedRole}" sent to Admin.`);
  };

  const handleUpdateProfile = () => {
    navigate('/employee/update-profile');
  };

  const handleFeedback = () => {
    navigate('/employee/feedback');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 p-6 sm:p-10">
      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-xl p-6 sm:p-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">👤 Employee Profile</h2>
          <div className="space-x-4">
            <button onClick={() => navigate('/')} className="text-sm text-blue-600 hover:underline">🏠 Home</button>
            <button onClick={handleLogout} className="text-sm text-red-600 hover:underline"><FaSignOutAlt className="inline" /> Logout</button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <ProfileCard icon={<FaUser />} title="Personal Info" content={
            <>
              <p><strong>Name:</strong> {sampleEmployee.name}</p>
              <p><strong>Email:</strong> {sampleEmployee.email}</p>
              <p><strong>Phone:</strong> {sampleEmployee.phone}</p>
              <p><strong>Education:</strong> {sampleEmployee.education}</p>
            </>
          } />

          <ProfileCard icon={<FaTools />} title="Technical Skills" content={
            <ul className="list-disc ml-5">{sampleEmployee.technicalSkills.map((skill, i) => <li key={i}>{skill}</li>)}</ul>
          } />

          <ProfileCard icon={<FaLightbulb />} title="Soft Skills" content={
            <ul className="list-disc ml-5">{sampleEmployee.softSkills.map((skill, i) => <li key={i}>{skill}</li>)}</ul>
          } />

          <ProfileCard icon={<FaCertificate />} title="Certifications" content={
            <ul className="list-disc ml-5">{sampleEmployee.certifications.map((cert, i) => <li key={i}>{cert}</li>)}</ul>
          } />

          <ProfileCard icon={<FaBriefcase />} title="Experience" content={<p>{sampleEmployee.experience}</p>} />
          <ProfileCard icon={<FaGraduationCap />} title="Projects" content={
            <ul className="list-disc ml-5">{sampleEmployee.projects.map((proj, i) => <li key={i}>{proj}</li>)}</ul>
          } />
          <ProfileCard icon={<FaFileAlt />} title="Resume" content={
            <a href={sampleEmployee.resume} target="_blank" rel="noreferrer" className="text-blue-600 underline">View Resume</a>
          } />
        </div>

        <div className="mt-10 p-6 bg-gradient-to-r from-green-200 to-green-400 rounded-lg shadow-lg text-center">
          <h3 className="text-2xl font-semibold text-green-900">🎯 AI-Predicted Role:</h3>
          <p className="text-3xl font-bold mt-2 text-green-800">{sampleEmployee.predictedRole}</p>

          <div className="mt-4 space-x-4">
            <button
              onClick={handleRequestRole}
              disabled={requested}
              className={`px-4 py-2 rounded font-semibold text-white ${requested ? 'bg-gray-500' : 'bg-green-600 hover:bg-green-700'}`}
            >
              {requested ? 'Requested' : 'Request this Role'}
            </button>

            {!sampleEmployee.isFirstTime && (
              <button
                onClick={handleUpdateProfile}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded font-semibold"
              >
                <FaEdit className="inline mr-1" /> Update Profile
              </button>
            )}

            <button
              onClick={handleFeedback}
              className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded font-semibold"
            >
              <FaComments className="inline mr-1" /> Feedback to Admin
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProfileCard = ({ icon, title, content }) => (
  <div className="bg-gray-50 p-4 rounded-md shadow-md">
    <div className="flex items-center gap-2 text-gray-700 mb-2 text-lg font-semibold">
      {icon} {title}
    </div>
    <div className="text-sm text-gray-800">{content}</div>
  </div>
);

export default EmployeeProfile;

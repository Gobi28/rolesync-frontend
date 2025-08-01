import React from 'react';
import { useParams } from 'react-router-dom';

const AdminEmployeeDetails = () => {
  const { id } = useParams();

  // Dummy data (replace with backend/API call later)
  const employee = {
    id,
    name: "John Doe",
    role: "Frontend Developer",
    email: "john@example.com",
    skills: ["React", "Tailwind", "JavaScript"],
    experience: "3 years",
    education: "B.Tech in IT",
    projects: ["Project A", "Project B"],
    certifications: ["React Certified", "JavaScript Pro"],
    feedback: "Great team player, skilled in UI/UX",
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Employee Details</h2>
        <p><strong>ID:</strong> {employee.id}</p>
        <p><strong>Name:</strong> {employee.name}</p>
        <p><strong>Email:</strong> {employee.email}</p>
        <p><strong>Role:</strong> {employee.role}</p>
        <p><strong>Experience:</strong> {employee.experience}</p>
        <p><strong>Education:</strong> {employee.education}</p>

        <div className="mt-4">
          <strong>Skills:</strong>
          <ul className="list-disc ml-6">
            {employee.skills.map((skill, index) => <li key={index}>{skill}</li>)}
          </ul>
        </div>

        <div className="mt-4">
          <strong>Projects:</strong>
          <ul className="list-disc ml-6">
            {employee.projects.map((project, index) => <li key={index}>{project}</li>)}
          </ul>
        </div>

        <div className="mt-4">
          <strong>Certifications:</strong>
          <ul className="list-disc ml-6">
            {employee.certifications.map((cert, index) => <li key={index}>{cert}</li>)}
          </ul>
        </div>

        <div className="mt-4">
          <strong>Feedback:</strong>
          <p>{employee.feedback}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminEmployeeDetails;

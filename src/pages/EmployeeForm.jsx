import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const EmployeeForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    employeeId: "",
    name: "",
    email: "",
    phone: "",
    technicalSkills: "",
    softSkills: "",
    education: "",
    experience: "",
    currentRole: "",
    certificationLink: "",
    certificationFile: null,
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (e) => {
    const { name, files } = e.target;
    setFormData((prev) => ({ ...prev, [name]: files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Optional validation
    const requiredFields = [
      "employeeId",
      "name",
      "email",
      "phone",
      "technicalSkills",
      "softSkills",
      "education",
      "experience",
      "currentRole",
      "certificationLink",
      "certificationFile",
      "resume",
    ];

    const allFilled = requiredFields.every((field) => formData[field]);
    if (!allFilled) {
      alert("Please fill out all fields.");
      return;
    }

    // Simulate successful submission
    console.log("Form submitted:", formData);
    navigate("/employee/profile");
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-indigo-200 via-purple-300 to-pink-200 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">
          Employee Details Form
        </h2>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          {/* Employee ID */}
          <FormField label="Employee ID" name="employeeId" value={formData.employeeId} onChange={handleChange} placeholder="e.g., EMP123" />

          {/* Name */}
          <FormField label="Name" name="name" value={formData.name} onChange={handleChange} />

          {/* Email */}
          <FormField label="Email" name="email" type="email" value={formData.email} onChange={handleChange} />

          {/* Phone */}
          <FormField label="Phone" name="phone" type="tel" maxLength="10" value={formData.phone} onChange={handleChange} />

          {/* Technical Skills */}
          <FormField label="Technical Skills" name="technicalSkills" value={formData.technicalSkills} onChange={handleChange} placeholder="e.g., Java, React" />

          {/* Soft Skills */}
          <FormField label="Soft Skills" name="softSkills" value={formData.softSkills} onChange={handleChange} placeholder="e.g., Communication" />

          {/* Education */}
          <FormField label="Education" name="education" value={formData.education} onChange={handleChange} placeholder="e.g., B.Tech IT" />

          {/* Experience */}
          <FormField label="Experience" name="experience" value={formData.experience} onChange={handleChange} placeholder="e.g., 2 years" />

          {/* Current Role */}
          <FormField label="Current Role" name="currentRole" value={formData.currentRole} onChange={handleChange} />

          {/* Certification Link */}
          <FormField label="Certification Link" name="certificationLink" type="url" value={formData.certificationLink} onChange={handleChange} placeholder="https://..." />

          {/* Certification File */}
          <FileField label="Certification File (PDF/Image)" name="certificationFile" onChange={handleFileUpload} accept="application/pdf,image/*" />

          {/* Resume */}
          <FileField label="Upload Resume" name="resume" onChange={handleFileUpload} accept=".pdf" />

          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200">
            Submit Details
          </button>
        </form>
      </div>
    </div>
  );
};

// Reusable input field component
const FormField = ({ label, name, value, onChange, placeholder = "", type = "text", maxLength }) => (
  <div className="mb-4">
    <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      maxLength={maxLength}
      className="input-style"
      required
    />
  </div>
);

// Reusable file input field
const FileField = ({ label, name, onChange, accept }) => (
  <div className="mb-4">
    <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">{label}</label>
    <input
      type="file"
      name={name}
      accept={accept}
      onChange={onChange}
      className="input-style"
      required
    />
  </div>
);

export default EmployeeForm;

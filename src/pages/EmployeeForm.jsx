// src/pages/EmployeeForm.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const EmployeeForm = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    skills: "",
    softSkills: "",
    certifications: "",
    experience: "",
    education: "",
    projects: "",
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({
      ...form,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Send form data to backend
    navigate("/employee/profile");
  };

  return (
    <motion.div
      className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">
          Employee Information Form
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-2 rounded border dark:bg-gray-700 dark:text-white"
            required
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-2 rounded border dark:bg-gray-700 dark:text-white"
            required
          />

          {/* Phone */}
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="w-full p-2 rounded border dark:bg-gray-700 dark:text-white"
            required
          />

          {/* Technical Skills */}
          <textarea
            name="skills"
            placeholder="Technical Skills"
            value={form.skills}
            onChange={handleChange}
            className="w-full p-2 rounded border dark:bg-gray-700 dark:text-white"
          />

          {/* Soft Skills */}
          <textarea
            name="softSkills"
            placeholder="Soft Skills"
            value={form.softSkills}
            onChange={handleChange}
            className="w-full p-2 rounded border dark:bg-gray-700 dark:text-white"
          />

          {/* Certifications */}
          <input
            type="text"
            name="certifications"
            placeholder="Certifications"
            value={form.certifications}
            onChange={handleChange}
            className="w-full p-2 rounded border dark:bg-gray-700 dark:text-white"
          />

          {/* Experience */}
          <textarea
            name="experience"
            placeholder="Work Experience"
            value={form.experience}
            onChange={handleChange}
            className="w-full p-2 rounded border dark:bg-gray-700 dark:text-white"
          />

          {/* Education */}
          <textarea
            name="education"
            placeholder="Education"
            value={form.education}
            onChange={handleChange}
            className="w-full p-2 rounded border dark:bg-gray-700 dark:text-white"
          />

          {/* Projects */}
          <textarea
            name="projects"
            placeholder="Projects"
            value={form.projects}
            onChange={handleChange}
            className="w-full p-2 rounded border dark:bg-gray-700 dark:text-white"
          />

          {/* Resume Upload */}
          <input
            type="file"
            name="resume"
            accept=".pdf,.doc,.docx"
            onChange={handleChange}
            className="w-full p-2 rounded border dark:bg-gray-700 dark:text-white"
          />

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
          >
            Save & Continue
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default EmployeeForm;

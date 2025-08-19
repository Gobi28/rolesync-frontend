import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const EmployeeForm = () => {
  const navigate = useNavigate();
  const [employeeId, setEmployeeId] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
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

  const email = localStorage.getItem("employeeEmail");

  useEffect(() => {
    const fetchEmployeeId = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/employees/email/${email}`);
        if (!response.ok) throw new Error("Failed to fetch employee ID");
        const data = await response.json();
        setEmployeeId(data.id);
      } catch (error) {
        console.error("Error fetching employee ID:", error);
        alert("Session expired. Please log in again.");
        navigate("/employee/login");
      }
    };

    if (email) {
      fetchEmployeeId();
    } else {
      alert("Email not found. Please login again.");
      navigate("/employee/login");
    }
  }, [email, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (e) => {
    const { name, files } = e.target;
    setFormData((prev) => ({ ...prev, [name]: files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requiredFields = [
      "name",
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

    const allFilled = requiredFields.every((field) => {
      const value = formData[field];
      return value instanceof File ? value.size > 0 : value.trim() !== "";
    });

    if (!allFilled || !email) {
      alert("Please fill out all fields.");
      return;
    }

    const data = new FormData();
    data.append("email", email);
    data.append("employeeId", employeeId || ""); // fallback
    data.append("name", formData.name);
    data.append("phone", formData.phone);
    data.append("technicalSkills", formData.technicalSkills);
    data.append("softSkills", formData.softSkills);
    data.append("education", formData.education);
    data.append("experience", formData.experience);
    data.append("currentRole", formData.currentRole);
    data.append("certificationLink", formData.certificationLink);
    data.append("certificationFile", formData.certificationFile);
    data.append("resume", formData.resume);

    try {
      const response = await fetch("http://localhost:5000/api/employees/submit-profile", {
        method: "POST",
        body: data,
      });

      const contentType = response.headers.get("content-type");

      if (!response.ok) {
        const errorData = contentType?.includes("application/json")
          ? await response.json()
          : await response.text();

        console.error("Server Error:", errorData);
        alert(
          typeof errorData === "string"
            ? "Server returned unexpected error."
            : errorData.message || "Profile submission failed."
        );
        return;
      }

      const responseData = await response.json();
      console.log("Success:", responseData);
      alert("Profile submitted successfully!");
      navigate("/employee/profile");
    } catch (err) {
      console.error("Network or unexpected error:", err);
      alert("Submission failed. Check your backend server and network.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-indigo-200 via-purple-300 to-pink-200 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">
          Employee Details Form
        </h2>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          {employeeId && (
            <div className="mb-4">
              <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">
                Employee ID
              </label>
              <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded text-gray-900 dark:text-white">
                {employeeId}
              </div>
            </div>
          )}

          <FormField label="Name" name="name" value={formData.name} onChange={handleChange} />
          <FormField label="Phone" name="phone" type="tel" maxLength="10" value={formData.phone} onChange={handleChange} />
          <FormField label="Technical Skills" name="technicalSkills" value={formData.technicalSkills} onChange={handleChange} placeholder="e.g., Java, React" />
          <FormField label="Soft Skills" name="softSkills" value={formData.softSkills} onChange={handleChange} placeholder="e.g., Communication" />
          <FormField label="Education" name="education" value={formData.education} onChange={handleChange} placeholder="e.g., B.Tech IT" />
          <FormField label="Experience" name="experience" value={formData.experience} onChange={handleChange} placeholder="e.g., 2 years" />
          <FormField label="Current Role" name="currentRole" value={formData.currentRole} onChange={handleChange} />
          <FormField label="Certification Link" name="certificationLink" type="url" value={formData.certificationLink} onChange={handleChange} placeholder="https://..." />
          <FileField label="Certification File (PDF/Image)" name="certificationFile" onChange={handleFileUpload} accept="application/pdf,image/*" />
          <FileField label="Upload Resume" name="resume" onChange={handleFileUpload} accept=".pdf" />

          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200">
            Submit Details
          </button>
        </form>
      </div>
    </div>
  );
};

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

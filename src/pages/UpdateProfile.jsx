import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UpdateProfile = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    education: '',
    softSkills: '',
    technicalSkills: '',
    certifications: '',
    projects: '',
    experience: '',
  });
  const [resumeFile, setResumeFile] = useState(null);
  const [certFile, setCertFile] = useState(null);
  const [resumeUrl, setResumeUrl] = useState('');
  const [certFileUrl, setCertFileUrl] = useState('');
  const [employeeId, setEmployeeId] = useState(null);

  const loggedInEmail = localStorage.getItem('employeeEmail');

  // Fetch existing data
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/employees/email/${loggedInEmail}`);
        if (!res.ok) throw new Error('Failed to load profile');
        const data = await res.json();

        setEmployeeId(data._id);
        setResumeUrl(data.resumeUrl || '');
        setCertFileUrl(data.certificationFileUrl || '');

        setFormData({
          name: data.personalDetails?.name || '',
          email: data.email || '',
          phone: data.personalDetails?.phone || '',
          education: data.education || '',
          softSkills: (data.softSkills || []).join(', '),
          technicalSkills: (data.technicalSkills || []).join(', '),
          certifications: (data.certifications || []).map(c => c.name).join(', '),
          projects: (data.projects || []).join(', '),
          experience: data.workExperience || '',
        });
      } catch (err) {
        console.error('Error fetching profile:', err);
      }
    };

    if (loggedInEmail) {
      fetchProfile();
    }
  }, [loggedInEmail]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    if (e.target.name === 'resume') {
      setResumeFile(e.target.files[0]);
    } else if (e.target.name === 'certificationFile') {
      setCertFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const body = new FormData();

      // Basic fields
      body.append('email', formData.email);
      body.append('education', formData.education);
      body.append('workExperience', formData.experience);

      // Nested object (personalDetails) as JSON
      body.append(
        'personalDetails',
        JSON.stringify({
          name: formData.name,
          phone: formData.phone,
        })
      );

      // Arrays as JSON
      body.append(
        'softSkills',
        JSON.stringify(
          formData.softSkills
            .split(',')
            .map(s => s.trim())
            .filter(Boolean)
        )
      );
      body.append(
        'technicalSkills',
        JSON.stringify(
          formData.technicalSkills
            .split(',')
            .map(s => s.trim())
            .filter(Boolean)
        )
      );
      body.append(
        'certifications',
        JSON.stringify(
          formData.certifications
            .split(',')
            .map(c => c.trim())
            .filter(Boolean)
            .map(name => ({ name }))
        )
      );
      body.append(
        'projects',
        JSON.stringify(
          formData.projects
            .split(',')
            .map(p => p.trim())
            .filter(Boolean)
        )
      );

      // Files
      if (resumeFile) body.append('resume', resumeFile);
      if (certFile) body.append('certificationFile', certFile);

      const res = await fetch(`http://localhost:5000/api/employees/update-profile/${employeeId}`, {
        method: 'PUT',
        body,
      });

      if (!res.ok) throw new Error('Failed to update profile');

      alert('Profile updated successfully!');
      navigate('/employee/profile');
    } catch (err) {
      console.error('Error updating profile:', err);
      alert('Error updating profile');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-200 to-pink-200 p-6 flex justify-center">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-xl w-full max-w-3xl space-y-4">
        <h2 className="text-2xl font-bold text-center text-gray-800">Update Profile</h2>

        {Object.keys(formData).map((key, index) => (
          <div key={index}>
            <label className="block text-sm font-medium capitalize text-gray-600">
              {key.replace(/([A-Z])/g, ' $1')}
            </label>
            <input
              type="text"
              name={key}
              value={formData[key]}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md"
            />
          </div>
        ))}

        {/* Resume File */}
        <div>
          <label className="block text-sm font-medium text-gray-600">Resume</label>
          <input
            type="file"
            name="resume"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="w-full mt-1 p-2 border rounded-md"
          />
          {resumeUrl && (
            <p className="mt-1 text-sm">
              Current:{' '}
              <a
                href={`http://localhost:5000${resumeUrl}`}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 underline"
              >
                View Resume
              </a>
            </p>
          )}
        </div>

        {/* Certification File */}
        <div>
          <label className="block text-sm font-medium text-gray-600">Certification File</label>
          <input
            type="file"
            name="certificationFile"
            accept=".pdf,.jpg,.png"
            onChange={handleFileChange}
            className="w-full mt-1 p-2 border rounded-md"
          />
          {certFileUrl && (
            <p className="mt-1 text-sm">
              Current:{' '}
              <a
                href={`http://localhost:5000${certFileUrl}`}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 underline"
              >
                View Certification
              </a>
            </p>
          )}
        </div>

        <button type="submit" className="w-full bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;

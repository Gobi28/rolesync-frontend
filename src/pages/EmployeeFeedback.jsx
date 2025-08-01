import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EmployeeFeedback = () => {
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send feedback to backend/admin
    alert("Feedback submitted successfully!");
    setMessage('');
    navigate('/employee/profile');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-orange-200 flex items-center justify-center p-4">
      <form onSubmit={handleSubmit} className="bg-white shadow-xl p-6 rounded-lg w-full max-w-xl">
        <h2 className="text-2xl font-bold text-center mb-4 text-gray-700">📣 Feedback to Admin</h2>
        <textarea
          rows="6"
          placeholder="Enter your feedback here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="w-full p-3 border border-gray-300 rounded-md"
        ></textarea>
        <button type="submit" className="mt-4 w-full bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600">
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default EmployeeFeedback;

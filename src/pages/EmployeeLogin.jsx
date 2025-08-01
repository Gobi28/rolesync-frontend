import React from 'react';
import { useNavigate } from 'react-router-dom';

const EmployeeLogin = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simulate login success
    const hasSubmittedDetails = false; // 🔁 Change to true if already submitted

    if (hasSubmittedDetails) {
      navigate('/employee/profile');
    } else {
      navigate('/employee/form');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100">
      <div className="bg-white p-8 rounded shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4 text-center">Employee Login</h2>
        <input
          type="text"
          placeholder="Email or Phone"
          className="w-full px-4 py-2 border rounded mb-4"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 border rounded mb-6"
        />
        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Log In
        </button>
      </div>
    </div>
  );
};

export default EmployeeLogin;

import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate login success
    navigate('/admin/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-4">
      <form onSubmit={handleLogin} className="bg-gray-800 p-8 rounded-lg w-full max-w-sm shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
        <input
          type="email"
          placeholder="Email"
          required
          className="w-full p-2 mb-4 rounded bg-gray-700 focus:outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          required
          className="w-full p-2 mb-6 rounded bg-gray-700 focus:outline-none"
        />
        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded text-white font-semibold">
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;

// src/pages/VerifyOtp.jsx
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const VerifyOtp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const emailFromRegister = location.state?.email || ''; // from register page

  const [email, setEmail] = useState(emailFromRegister);
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleVerify = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      await axios.post('http://localhost:5000/api/employees/verify-otp', {
        email,
        otp,
      });

      setSuccess('✅ Account verified! Redirecting to login...');
      setTimeout(() => navigate('/login/employee'), 1500);
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || 'OTP verification failed.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-indigo-200 via-purple-300 to-pink-200 dark:from-gray-900 dark:to-gray-800 transition-all duration-500">
      <div className="bg-white/40 dark:bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-md transform hover:scale-[1.02] transition-all duration-300">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white">
          🔐 Verify OTP
        </h2>

        <form onSubmit={handleVerify} className="space-y-4">
          {error && <div className="text-red-600 font-semibold text-center">{error}</div>}
          {success && <div className="text-green-600 font-semibold text-center">{success}</div>}

          {/* Email */}
          <div>
            <label className="block mb-1 text-gray-700 dark:text-gray-200 font-semibold">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* OTP */}
          <div>
            <label className="block mb-1 text-gray-700 dark:text-gray-200 font-semibold">
              OTP
            </label>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
              placeholder="Enter 6-digit OTP"
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all duration-300"
          >
            Verify OTP
          </button>
        </form>

        {/* Back to Login */}
        <p className="text-center text-sm mt-4 text-gray-700 dark:text-gray-300">
          Already verified?{' '}
          <span
            onClick={() => navigate('/login/employee')}
            className="text-blue-600 hover:underline cursor-pointer font-semibold"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default VerifyOtp;

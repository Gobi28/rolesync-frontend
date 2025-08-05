import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const EmployeeRegister = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const res = await axios.post('http://localhost:5000/api/employees/register', {
        email,
        password,
      });

      const { token } = res.data;

      // Store the JWT token for later authenticated requests
      localStorage.setItem('employeeToken', token);

      setSuccess('✅ Registered successfully! Redirecting to profile setup...');

      // Navigate to employee form page (do NOT set isProfileFilled here!)
      navigate('/employee/form');

    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || 'Registration failed.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-indigo-200 via-purple-300 to-pink-200 dark:from-gray-900 dark:to-gray-800 transition-all duration-500">
      <div className="bg-white/40 dark:bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-md transform hover:scale-[1.02] transition-all duration-300">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white">
          📝 Employee Register
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && <div className="text-red-600 font-semibold text-center">{error}</div>}
          {success && (
            <div className="text-green-600 font-semibold text-center flex items-center justify-center gap-2">
              {success}
            </div>
          )}

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

          <div>
            <label className="block mb-1 text-gray-700 dark:text-gray-200 font-semibold">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all duration-300"
          >
            Register
          </button>
        </form>

        <p className="text-center text-sm mt-4 text-gray-700 dark:text-gray-300">
          Already have an account?{' '}
          <span
            onClick={() => navigate('/employee/login')}
            className="text-blue-600 hover:underline cursor-pointer font-semibold"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default EmployeeRegister;

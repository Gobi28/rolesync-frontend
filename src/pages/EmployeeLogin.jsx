// src/pages/EmployeeLogin.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const EmployeeLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      if (isRegistering) {
        await axios.post('http://localhost:5000/api/employees/register', { email, password });
        alert('Registration successful. Please login.');
        setIsRegistering(false);
        setEmail('');
        setPassword('');
      } else {
        const res = await axios.post('http://localhost:5000/api/employees/login', { email, password });
        const { token, isProfileFilled, employee } = res.data;

        if (!employee?.email) throw new Error('Invalid employee data returned from server.');

        localStorage.setItem('employeeToken', token);
        localStorage.setItem('employeeEmail', employee.email);
        localStorage.setItem('isProfileFilled', isProfileFilled);

        navigate(isProfileFilled ? '/employee/profile' : '/employee/form');
      }
    } catch (err) {
      console.error('Login/Register Error:', err);
      setError(err.response?.data?.message || err.message || 'Error occurred. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-indigo-200 via-purple-300 to-pink-200 dark:from-gray-900 dark:to-gray-800 transition-all duration-500">
      <div className="bg-white/40 dark:bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-md transform hover:scale-[1.02] transition-all duration-300">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white">
          {isRegistering ? '📝 Employee Register' : '👨‍💻 Employee Login'}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && <div className="text-red-600 font-semibold text-center">{error}</div>}

          <div>
            <label className="block mb-1 text-gray-700 dark:text-gray-200 font-semibold">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-700 dark:text-gray-200 font-semibold">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button type="submit" className="w-full py-2 px-4 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all duration-300">
            {isRegistering ? 'Register' : 'Login'}
          </button>
        </form>

        <div className="text-center mt-4 text-gray-700 dark:text-gray-300">
          {isRegistering ? (
            <>Already have an account? <button className="text-blue-600 hover:underline" onClick={() => setIsRegistering(false)}>Login</button></>
          ) : (
            <>Don’t have an account? <button className="text-blue-600 hover:underline" onClick={() => setIsRegistering(true)}>Register</button></>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmployeeLogin;

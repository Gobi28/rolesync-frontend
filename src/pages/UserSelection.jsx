// src/pages/UserSelection.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaUserTie, FaUserShield } from 'react-icons/fa';

const UserSelection = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-200 to-purple-300 dark:from-gray-800 dark:to-gray-900 transition-all">
      <motion.div
        className="bg-white dark:bg-gray-800 shadow-2xl rounded-xl p-8 sm:p-10 w-[90%] max-w-md"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, type: 'spring' }}
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 dark:text-white mb-6">
          Switch User 
        </h1>
        <div className="flex flex-col gap-4">
          <button
            onClick={() => navigate('/login/employee')}
            className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-all shadow-md hover:scale-105"
          >
            <FaUserTie size={20} />
            Login as Employee
          </button>

          <button
            onClick={() => navigate('/login/admin')}
            className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white font-medium py-3 rounded-lg transition-all shadow-md hover:scale-105"
          >
            <FaUserShield size={20} />
            Login as Admin
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default UserSelection;

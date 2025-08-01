import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserSelection = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-r from-indigo-800 to-blue-800 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-xl text-center">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Welcome to RoleSync</h1>
        <p className="text-gray-600 mb-8">Please choose your user type:</p>

        <div className="flex flex-col gap-4">
          <button
            onClick={() => navigate('/login/employee')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all"
          >
            Employee
          </button>

          <button
            onClick={() => navigate('/login/admin')}
            className="bg-gray-700 hover:bg-gray-800 text-white font-semibold py-3 rounded-lg transition-all"
          >
            Admin
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserSelection;

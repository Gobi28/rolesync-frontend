import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-blue p-6 space-y-4">
        <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>
        <button onClick={() => navigate('/admin/dashboard')} className="block w-full text-left hover:bg-gray-500 p-2 rounded">
          Dashboard
        </button>
        <button onClick={() => navigate('/admin/requests')} className="block w-full text-left hover:bg-gray-500 p-2 rounded">
          Role Requests
        </button>
        <button onClick={() => navigate('/admin/feedback')} className="block w-full text-left hover:bg-gray-500 p-2 rounded">
          Feedback
        </button>
        <button onClick={() => navigate('/admin/employees')} className="block w-full text-left hover:bg-gray-500 p-2 rounded">
          Employees
        </button>
        <button onClick={() => navigate('/')} className="block w-full text-left bg-red-600 hover:bg-red-700 p-2 rounded mt-10">
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-semibold mb-6">Welcome, Admin 👋</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded shadow text-center">
            <h2 className="text-xl font-bold">Total Employees</h2>
            <p className="text-3xl mt-2">125</p>
          </div>
          <div className="bg-white p-6 rounded shadow text-center">
            <h2 className="text-xl font-bold">Role Requests</h2>
            <p className="text-3xl mt-2">18</p>
          </div>
          <div className="bg-white p-6 rounded shadow text-center">
            <h2 className="text-xl font-bold">Suggestions Given</h2>
            <p className="text-3xl mt-2">42</p>
          </div>
          <div className="bg-white p-6 rounded shadow text-center">
            <h2 className="text-xl font-bold">Feedback Received</h2>
            <p className="text-3xl mt-2">33</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

import React from 'react';
import { Link } from 'react-router-dom';

const AdminEmployeeList = () => {
  // Sample data (you can later fetch this from backend)
  const employees = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      roleSuggested: 'Frontend Developer',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      roleSuggested: 'Data Analyst',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Employee List</h1>
      <div className="overflow-x-auto">
        <table className="w-full text-left border border-gray-700">
          <thead className="bg-gray-800">
            <tr>
              <th className="p-4 border-b border-gray-700">Name</th>
              <th className="p-4 border-b border-gray-700">Email</th>
              <th className="p-4 border-b border-gray-700">Suggested Role</th>
              <th className="p-4 border-b border-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp) => (
              <tr key={emp.id} className="hover:bg-gray-800">
                <td className="p-4 border-b border-gray-700">{emp.name}</td>
                <td className="p-4 border-b border-gray-700">{emp.email}</td>
                <td className="p-4 border-b border-gray-700">{emp.roleSuggested}</td>
                <td className="p-4 border-b border-gray-700">
                  <Link
                    to={`/admin/employees/${emp.id}`}
                    className="bg-blue-600 hover:bg-blue-700 text-white py-1 px-3 rounded mr-2 inline-block"
                  >
                    View
                  </Link>
                  <button className="bg-red-600 hover:bg-red-700 text-white py-1 px-3 rounded">
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminEmployeeList;

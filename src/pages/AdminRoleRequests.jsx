import React, { useState } from 'react';

const AdminRoleRequests = () => {
  // Sample data (you can later fetch this from backend)
  const [requests, setRequests] = useState([
    {
      id: 1,
      name: 'Gobi R',
      currentRole: 'Frontend Developer',
      requestedRole: 'Full Stack Developer',
      reason: 'I have gained backend experience and completed multiple MERN projects.',
    },
    {
      id: 2,
      name: 'Sara K',
      currentRole: 'QA Engineer',
      requestedRole: 'DevOps Engineer',
      reason: 'I have completed AWS and CI/CD certifications recently.',
    },
  ]);

  const handleAccept = (id) => {
    // Remove the request with the given id from the list
    setRequests((prev) => prev.filter((req) => req.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 text-gray-900">
      <h2 className="text-3xl font-bold mb-6">Role Change Requests</h2>
      {requests.length === 0 ? (
        <p className="text-gray-600">No pending requests.</p>
      ) : (
        <div className="grid gap-6">
          {requests.map((req) => (
            <div key={req.id} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold">{req.name}</h3>
              <p className="text-sm text-gray-500 mb-2">Current Role: {req.currentRole}</p>
              <p className="text-sm text-gray-500 mb-2">Requested Role: {req.requestedRole}</p>
              <p className="text-gray-700 mb-4">Reason: {req.reason}</p>
              <div className="flex gap-3">
                <button
                  onClick={() => handleAccept(req.id)}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
                >
                  Accept
                </button>
                <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded">
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminRoleRequests;

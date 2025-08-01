import React, { useState } from 'react';

const AdminSuggestions = () => {
  const [suggestions, setSuggestions] = useState([
    {
      id: 1,
      name: 'Gobi R',
      currentRole: 'Frontend Developer',
      suggestedRole: 'AI Engineer',
      reason: 'Based on strong performance in ML and AI projects, and certifications.',
    },
    {
      id: 2,
      name: 'Sara K',
      currentRole: 'Backend Developer',
      suggestedRole: 'DevOps Engineer',
      reason: 'Proven experience in deployment pipelines and cloud infrastructure.',
    },
  ]);

  const handleApprove = (id) => {
    setSuggestions((prev) => prev.filter((s) => s.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 text-gray-900">
      <h2 className="text-3xl font-bold mb-6">AI-Based Role Suggestions</h2>
      {suggestions.length === 0 ? (
        <p className="text-gray-600">No suggestions available right now.</p>
      ) : (
        <div className="grid gap-6">
          {suggestions.map((sug) => (
            <div key={sug.id} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold">{sug.name}</h3>
              <p className="text-sm text-gray-500 mb-2">Current Role: {sug.currentRole}</p>
              <p className="text-sm text-gray-500 mb-2">Suggested Role: {sug.suggestedRole}</p>
              <p className="text-gray-700 mb-4">Reason: {sug.reason}</p>
              <button
                onClick={() => handleApprove(sug.id)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
              >
                Approve
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminSuggestions;

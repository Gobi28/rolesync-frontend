import React, { useEffect, useState } from "react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

const AdminFeedbackSummary = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const savedFeedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];
    setFeedbacks(savedFeedbacks);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Employee Feedback Summary</h2>

      {feedbacks.length === 0 ? (
        <p className="text-gray-600">No feedback submitted yet.</p>
      ) : (
        <div className="grid gap-4">
          {feedbacks.map((feedback) => (
            <div
              key={feedback.id}
              className="bg-white p-4 rounded shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-gray-700">{feedback.employeeName}</span>
                {feedback.rating === "positive" ? (
                  <FaThumbsUp className="text-green-500" />
                ) : (
                  <FaThumbsDown className="text-red-500" />
                )}
              </div>
              <p className="text-gray-600">{feedback.comment}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminFeedbackSummary;

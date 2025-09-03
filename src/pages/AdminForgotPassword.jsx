import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AdminForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      await axios.post("http://localhost:5000/api/admins/forgot-password", { email });
      setSuccess("📩 Reset OTP sent to your email.");
      setTimeout(() => {
        navigate("/admin/reset-password", { state: { email } });
      }, 1500);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to send reset OTP");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-yellow-200 via-orange-300 to-red-200 dark:from-gray-900 dark:to-gray-800">
      <div className="bg-white/40 dark:bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white">
          🔒 Forgot Password
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && <div className="text-red-600 font-semibold text-center">{error}</div>}
          {success && <div className="text-green-600 font-semibold text-center">{success}</div>}

          <div>
            <label className="block mb-1 text-gray-700 dark:text-gray-200 font-semibold">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 rounded-md bg-red-600 hover:bg-red-700 text-white font-semibold transition-all duration-300"
          >
            Send OTP
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminForgotPassword;

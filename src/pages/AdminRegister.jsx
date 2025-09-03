import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AdminRegister = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
       await axios.post("http://localhost:5000/api/auth/admin/register", { email, password });
      setSuccess("✅ OTP sent to your email. Please verify.");
      setTimeout(() => {
        navigate("/admin/verify-otp", { state: { email } });
      }, 1500);
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-yellow-200 via-orange-300 to-red-200 dark:from-gray-900 dark:to-gray-800 transition-all duration-500">
      <div className="bg-white/40 dark:bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white">
          🛡️ Admin Register
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && <div className="text-red-600 font-semibold text-center">{error}</div>}
          {success && <div className="text-green-600 font-semibold text-center">{success}</div>}

          {/* Email */}
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

          {/* Password */}
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

          <button
            type="submit"
            className="w-full py-2 px-4 rounded-md bg-red-600 hover:bg-red-700 text-white font-semibold transition-all duration-300"
          >
            Register
          </button>
        </form>

        <p className="text-center text-sm mt-4 text-gray-700 dark:text-gray-300">
          Already registered?{" "}
          <span
            onClick={() => navigate("/login/admin")}
            className="text-red-600 hover:underline cursor-pointer font-semibold"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default AdminRegister;

import React, { useState } from "react";
import axios from "axios";

interface RegisterProps {
  onAuthSuccess: () => void;
}

const Register: React.FC<RegisterProps> = ({ onAuthSuccess }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/v1/register", {
        username,
        email,
        password,
      });
      console.log("Registration successful:", response.data);
      onAuthSuccess();
    } catch (err) {
      setError("Registration failed. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 bg-white rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center text-amber-700">
          Register
        </h2>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label className="block mb-1 text-slate-900">Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 text-slate-900">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 text-slate-900">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;

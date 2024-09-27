"use client";
import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";

interface AuthProps {
  onAuthSuccess: () => void;
}

const Auth: React.FC<AuthProps> = ({ onAuthSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);

  const handleAuthSuccess = () => {
    onAuthSuccess();
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <div className="mb-4">
        <button
          onClick={() => setIsLogin(true)}
          className={`px-4 py-2 mr-2 ${
            isLogin ? "bg-blue-500 text-white" : "bg-gray-300"
          } rounded-lg`}
        >
          Login
        </button>
        <button
          onClick={() => setIsLogin(false)}
          className={`px-4 py-2 ${
            !isLogin ? "bg-blue-500 text-white" : "bg-gray-300"
          } rounded-lg`}
        >
          Register
        </button>
      </div>
      {isLogin ? (
        <Login onAuthSuccess={handleAuthSuccess} />
      ) : (
        <Register onAuthSuccess={handleAuthSuccess} />
      )}
    </div>
  );
};

export default Auth;

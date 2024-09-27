"use client";
import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div>
      <button onClick={() => setIsLogin(true)}>Login</button>
      <button onClick={() => setIsLogin(false)}>Register</button>
      {isLogin ? <Login /> : <Register />}
    </div>
  );
};

export default Auth;

"use client";
import React, { useState } from "react";
import { CustomWeb3Provider } from "@/Provider/Web3";
import Auth from "@/components/Auth";
import Wallet from "@/components/Wallet";

const Home: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
  };

  return (
    <CustomWeb3Provider>
      <div className="p-4 bg-gray-100 rounded-lg shadow-md">
        <h1 className="text-3xl text-slate-950 font-bold mb-4">
          Welcome to the Auth App
        </h1>
        {!isAuthenticated ? (
          <Auth onAuthSuccess={handleAuthSuccess} />
        ) : (
          <Wallet />
        )}
      </div>
    </CustomWeb3Provider>
  );
};

export default Home;

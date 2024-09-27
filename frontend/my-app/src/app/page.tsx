import React, { createContext, useContext, useState, useEffect } from "react";
import { Provider } from "ethers";
import Auth from "../components/Auth";
import Wallet from "../components/Wallet";
import { ReactNode } from "react";
// import { Web3Provider as EthersWeb3Provider } from "@ethersproject/providers";
import { CustomWeb3Provider } from "@/Provider/Web3";
// Extend the Window interface to include ethereum
declare global {
  interface Window {
    ethereum: any;
  }
}

// Define the type for the Web3 context

const Home: React.FC = () => {
  return (
    <CustomWeb3Provider>
      <div>
        <h1>Welcome to the Auth App</h1>
        <Auth />
        <Wallet />
      </div>
    </CustomWeb3Provider>
  );
};

export default Home;

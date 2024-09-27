import React from "react";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import Auth from "../components/Auth";
import Wallet from "../components/Wallet";

// Define the getLibrary function to return a Web3Provider instance
function getLibrary(provider: any): Web3Provider {
  return new Web3Provider(provider);
}

export default function Home() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <div>
        <h1>Welcome to the Auth App</h1>
        <Auth />
        <Wallet />
      </div>
    </Web3ReactProvider>
  );
}

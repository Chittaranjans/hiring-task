"use client";
import React, { useState, useEffect, useContext } from "react";
import { formatEther } from "ethers";
import { Web3Context } from "@/Provider/Web3";

const Wallet = () => {
  const web3Context = useContext(Web3Context);

  if (!web3Context) {
    throw new Error("Web3Context must be used within a CustomWeb3Provider");
  }

  const { provider, account } = web3Context;
  const [balance, setBalance] = useState<string | null>(null);
  const [tokens, setTokens] = useState<any[]>([]);

  useEffect(() => {
    const fetchBalanceAndTokens = async () => {
      if (provider && account) {
        try {
          const balance = await provider.getBalance(account);
          setBalance(formatEther(balance.toString()));

          // Fetch tokens (this is a placeholder, replace with actual token fetching logic)
          setTokens([
            { name: "Token1", balance: 100 },
            { name: "Token2", balance: 200 },
          ]);
        } catch (error) {
          console.error("Error fetching balance and tokens:", error);
        }
      }
    };

    fetchBalanceAndTokens();
  }, [provider, account]);

  const connectWallet = async () => {
    try {
      if (provider) {
        await provider.send("eth_requestAccounts", []);
      } else {
        console.error("Provider is null");
      }
    } catch (err) {
      console.error("Error connecting wallet:", err);
    }
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Wallet</h2>
      {account ? (
        <div>
          <p className="mb-2">Account: {account}</p>
          <p className="mb-4">Balance: {balance} ETH</p>
          <h3 className="text-xl font-semibold mb-2">Tokens</h3>
          <ul className="list-disc pl-5">
            {tokens.map((token, index) => (
              <li key={index} className="mb-1">
                {token.name}: {token.balance}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <button
          onClick={connectWallet}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
};

export default Wallet;

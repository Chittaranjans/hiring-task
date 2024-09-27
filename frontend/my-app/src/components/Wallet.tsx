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
    <div>
      <h2>Wallet</h2>
      {account ? (
        <div>
          <p>Account: {account}</p>
          <p>Balance: {balance} ETH</p>
          <h3>Tokens</h3>
          <ul>
            {tokens.map((token, index) => (
              <li key={index}>
                {token.name}: {token.balance}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <button onClick={connectWallet}>Connect Wallet</button>
      )}
    </div>
  );
};

export default Wallet;

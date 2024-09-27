"use client";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { Web3Provider as EthersWeb3Provider } from "@ethersproject/providers";

declare global {
  interface Window {
    ethereum: any;
  }
}

interface Web3ContextType {
  provider: EthersWeb3Provider | null;
  account: string | null;
}

const Web3Context = createContext<Web3ContextType | undefined>(undefined);

const CustomWeb3Provider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [provider, setProvider] = useState<EthersWeb3Provider | null>(null);
  const [account, setAccount] = useState<string | null>(null);

  useEffect(() => {
    const initWeb3 = async () => {
      if (window.ethereum) {
        const web3Provider = new EthersWeb3Provider(window.ethereum);
        setProvider(web3Provider);

        const accounts = await web3Provider.send("eth_requestAccounts", []);
        setAccount(accounts[0]);
      }
    };

    initWeb3();
  }, []);

  return (
    <Web3Context.Provider value={{ provider, account }}>
      {children}
    </Web3Context.Provider>
  );
};

export { Web3Context, CustomWeb3Provider };

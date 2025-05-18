
import { useEffect, useState } from 'react';
import { ethers } from 'ethers';

function FundWallet() {
  const [ethBalance, setEthBalance] = useState(0);
  const [account, setAccount] = useState(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      const provider = new ethers.BrowserProvider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = await provider.getSigner();
      setAccount(await signer.getAddress());
      setEthBalance(ethers.formatEther(await provider.getBalance(account)));
      // Save wallet to backend if needed
    }
  };

  return (
    <div>
      <marquee>HEY AFFILIATE FUND YOUR WALLET</marquee>
      <button onClick={connectWallet}>Connect Wallet</button>
      {account && (
        <>
          <div>ETH Address: {account}</div>
          <div>ETH Balance: {ethBalance}</div>
          <button>Receive</button>
          <button>Withdraw</button>
        </>
      )}
    </div>
  );
}

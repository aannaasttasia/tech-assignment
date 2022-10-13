import React, { useEffect } from "react";
import { useState } from "react";
import "./css/Logo.scss";
import BalanceIcon from "../ShowBalance/index";
import useComponentVisible from './closeBalanceIcon'
import {requestAccounts, getBalance} from "../ConnectWallet/getRequestMethods";
import renderSpinnerBalance from './loader'
 
declare let window: any

export default function logoFunction() {
  const [isShownBalance, setIsShownBalance] = useState<boolean>(false); 
  const [balance, setBalance] = useState<number>(0); 
  const [balanceConnected, setBalanceConnected] = useState<boolean>(false); 
  const [btnClicked, setbtnClicked] = useState<boolean>(false); 

  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(true);

  async function wallet() {
    if (typeof window.ethereum !== 'undefined') {
      console.log('MetaMask is installed!');
      const accounts = await requestAccounts();
      const account = (accounts[0]);

      const balance = parseInt(await getBalance(account));

      setBalance(balance);
      setBalanceConnected(true);
    }

  }
  
  return (
    <div>
      <div className="logo">
        <div>Logotype</div>
        <span className="btns">
          <>
          <button
            className="btn"
            onClick={async()=>{setbtnClicked(true); await wallet(); }}
          >
            Connect wallet
          </button>
          {btnClicked && (balanceConnected ? (
            <span>
              <button className="showInfo btn" onClick={()=>{setIsShownBalance(true); setIsComponentVisible(true); }}>
                <span> Balance</span>
              </button>
              {isShownBalance && <span ref={ref}>{isComponentVisible && <BalanceIcon balance={balance}/>}</span>}
            </span>
          ) :  (renderSpinnerBalance()))}
          </>
        </span>
      </div>
    </div>
  );
}

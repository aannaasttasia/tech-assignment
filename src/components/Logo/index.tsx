import React, { useEffect } from "react";
import { useState } from "react";
import "./css/Logo.scss";
import BalanceIcon from "../ShowBalance/index";
import useComponentVisible from './closeBalanceIcon'
import {requestAccounts, getBalance} from "../ConnectWallet/getRequestMethods";
 
declare let window: any

export default function logoFunction() {
  const [isShownButton, setIsShownButton] = useState<boolean>(false);
  const [isShownBalance, setIsShownBalance] = useState<boolean>(false); 
  const [balance, setBalance] = useState<number>(0); 

  async function wallet() {
    if (typeof window.ethereum !== 'undefined') {    
      console.log('MetaMask is installed!');

      const accounts = await requestAccounts();
      const account = (accounts[0]);

      const balance = parseInt(await getBalance(account));

      setBalance(balance);
    }
  }

  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(true);


  return (
    <div>
      <div className="logo">
        <div>Logotype</div>
        <span className="btns">
          <button
            className="btn"
            onClick={async () => {
              await wallet();
              setIsShownButton(true);
            }}
          >
            Connect wallet
          </button>
          {isShownButton && (
            <span>
              <button className="showInfo btn" onClick={()=>{setIsShownBalance(true); setIsComponentVisible(true); }}>
                <span> Balance</span>
              </button>
              {isShownBalance && <span ref={ref}>{isComponentVisible && <BalanceIcon balance={balance}/>}</span>}
            </span>
          )}
        </span>
      </div>
    </div>
  );
}

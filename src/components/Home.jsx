import React from "react";

import Vector from "../imgs/Vector.svg";

import Shape from "../imgs/Shape.svg";
import Coin5 from "../imgs/Fill 162.svg";
import Coin6 from "../imgs/Fill 925.svg";
import Coin7 from "../imgs/Shape (2).svg";
import Coin9 from "../imgs/Shape (4).svg";
import Coin10 from "../imgs/Fill 79.svg";
import Coin8 from "../imgs/Shape (3).svg";
import Shape1 from "../imgs/Shape (1).svg";

import balance from "../imgs/134,510.15.svg";
import SearchText from "../imgs/Search.svg";
import Overview from "../imgs/Overview.svg";
import BalanceDetail from "../imgs/Available balance in USD.svg";

import Transactions from "../imgs/Transactions (1).svg";
import Wallets from "../imgs/Wallets.svg";

import lastActivity from "../imgs/Last activity at 21 May, 2021.svg";
import WalletsValue from "../imgs/23.svg";
import TransactionsValue from "../imgs/34,405.svg";

import BitcoinLogo from "../imgs/bitcoinlogo.svg";

import Spark from "../imgs/spark.svg";

import SearchIcon from "../imgs/search (1).svg";
import welcomeText from "../imgs/Welcome To Dashboard.svg";
const Home = () => {
  return (
    <div className="flex flex-col ml-20 space-y-16">
      <div className="mt-11  flex justify-center md:space-x-32 lg:space-x-52">
        <div className="flex  justify-center-center flex-col space-y-10">
          <div>
            <img src={welcomeText} alt="" />
          </div>
          <div className="flex space-x-8">
            <div className="ring-4 rounded-xl ring-[#4F46BA] w-[48px] h-[48px] flex items-center justify-center">
              <div className="bg-white w-[38px] h-[38px] rounded-xl flex items-center justify-center">
                <img src={Vector} alt="" />
              </div>
            </div>
            <div className="ring-4 rounded-xl ring-white w-[48px] h-[48px] flex items-center justify-center">
              <div className="bg-white w-[38px] h-[38px] rounded-xl flex items-center justify-center">
                <img src={Shape} alt="" />
              </div>
            </div>
            <div className="ring-4 rounded-xl ring-white w-[48px] h-[48px] flex items-center justify-center">
              <div className="bg-white w-[38px] h-[38px] rounded-xl flex items-center justify-center">
                <img src={Shape1} alt="" />
              </div>
            </div>
            <div className="ring-4 rounded-xl ring-white w-[48px] h-[48px] flex items-center justify-center">
              <div className="bg-white w-[38px] h-[38px] rounded-xl flex items-center justify-center">
                <img src={Coin5} alt="" />
              </div>
            </div>
            <div className="ring-4 rounded-xl ring-white w-[48px] h-[48px] flex items-center justify-center">
              <div className="bg-white w-[38px] h-[38px] rounded-xl flex items-center justify-center">
                <img src={Coin6} alt="" />
              </div>
            </div>
            <div className="ring-4 rounded-xl ring-white w-[48px] h-[48px] flex items-center justify-center">
              <div className="bg-white w-[38px] h-[38px] rounded-xl flex items-center justify-center">
                <img src={Coin7} alt="" />
              </div>
            </div>
            <div className="ring-4 rounded-xl ring-white w-[48px] h-[48px] flex items-center justify-center">
              <div className="bg-white w-[38px] h-[38px] rounded-xl flex items-center justify-center">
                <img src={Coin8} alt="" />
              </div>
            </div>
            <div className="ring-4 rounded-xl ring-white w-[48px] h-[48px] flex items-center justify-center">
              <div className="bg-white w-[38px] h-[38px] rounded-xl flex items-center justify-center">
                <img src={Coin10} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-10">
          <div>
            <img src={SearchText} alt="" />
          </div>
          <div className="flex space-x-6">
            <div className="bg-white  h-[48px] w-[257px]">
              <input
                placeholder="Enter Search Term"
                type="text"
                className="bg-transparent placeholder-slate-300 ml-3 w-[96%] outline-none  h-full "
              />
            </div>
            <div className="relative w-[48px] h-[48px] flex items-center justify-center bg-[#4F46BA] ">
              <img src={SearchIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-7">
        <div>
          <img src={Overview} alt="" />
        </div>
        <div className="w-[405px] h-[270px] bg-[#4F46BA] flex flex-col p-10">
          <div>
            <img className="w-[150px]" src={BalanceDetail} alt="" />
          </div>
          <div className="mt-5">
            <img src={balance} alt="" />
          </div>
          <div className="flex space-x-10 mt-10">
            <div>
              <img src={Transactions} alt="" />
            </div>
            <div>
              <img src={Wallets} alt="" />
            </div>
          </div>
          <div className="flex space-x-10 mt-5">
            <div>
              <img src={TransactionsValue} alt="" />
            </div>
            <div>
              <img src={WalletsValue} alt="" />
            </div>
          </div>
          <div className="flex  mt-10">
            <img src={lastActivity} alt="" />
          </div>
          <div className="absolute   top-[230px] left-[580px]">
            <img src={Spark} alt="" />
            <img src={BitcoinLogo} className="relative left-14 -top-52" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import logo from "../imgs/LOGO (1).svg";

import mineshine from "../imgs/Mine&Shine.svg";
import homeLogo from "../imgs/home (1).svg";
import Dashboard from "../imgs/Dashboard.svg";
import walletLogo from "../imgs/wallet (2).svg";
import walletText from "../imgs/Wellet.svg";
import statsLogo from "../imgs/Group 1.svg";
import statsText from "../imgs/Statistics.svg";
import worldwide from "../imgs/worldwide.svg";
import Transactions from "../imgs/Transactions.svg";

import Exchange from "../imgs/Exchange.svg";
import store from "../imgs/store.svg";
import ActiveDevice from "../imgs/Active device.svg";
import News from "../imgs/News.svg";
import newspaper from "../imgs/newspaper 1.svg";

import iphone from "../imgs/iphone.svg";

const LeftSidebar = () => {
  return (
    <div className="bg-white w-[281px] h-screen flex px-10   flex-col">
      <div className="flex flex-row items-center    py-10 space-x-5">
        <div>
          <img src={logo} alt="Logo" />
        </div>
        <div className="text-[#4E36FC] font-normal text-lg">
          <img className="" src={mineshine} alt="" />
        </div>
      </div>

      <div className="flex flex-col justify-center    py-10 space-y-10">
        <a href="">
          {" "}
          <div className="flex flex-row items-center  space-x-5">
            {" "}
            <div>
              <img src={homeLogo} alt="home Logo" />
            </div>
            <div className="text-[#4E36FC] font-normal text-lg">
              <img className="" src={Dashboard} alt="Dashboard" />
            </div>
          </div>
        </a>
        <a href="">
          {" "}
          <div className="flex flex-row items-center  space-x-5">
            {" "}
            <div>
              <img src={walletLogo} alt="Wallet Logo" />
            </div>
            <div className="text-[#4E36FC] font-normal text-lg">
              <img className="" src={walletText} alt="Wallet" />
            </div>
          </div>
        </a>
        <a href="">
          <div className="flex flex-row items-center  space-x-5">
            <div>
              <img src={statsLogo} alt="Statistics Logo" />
            </div>
            <div className="text-[#4E36FC] font-normal text-lg">
              <img className="" src={statsText} alt="Statistics" />
            </div>
          </div>
        </a>
        <a href="">
          <div className="flex flex-row items-center  space-x-5">
            <div>
              <img src={worldwide} alt="Statistics Logo" />
            </div>
            <div className="text-[#4E36FC] font-normal text-lg">
              <img className="" src={Transactions} alt="Statistics" />
            </div>
          </div>
        </a>
        <a href="">
          <div className="flex flex-row items-center  space-x-5">
            <div>
              <img src={store} alt="Exchange Logo" />
            </div>
            <div className="text-[#4E36FC] font-normal text-lg">
              <img className="" src={Exchange} alt="Exchange" />
            </div>
          </div>
        </a>
        <a href="">
          <div className="flex flex-row items-center  space-x-5">
            <div>
              <img src={newspaper} alt="News Logo" />
            </div>
            <div className="text-[#4E36FC] font-normal text-lg">
              <img className="" src={News} alt="News" />
            </div>
          </div>
        </a>
      </div>
      <div className="mt-20">
        <h1>
          <img src={ActiveDevice} alt="" />
        </h1>
      </div>
      <div className="mt-5">
        <div className="flex items-center justify-around">
          <div className="bg-[#F3F5FA] w-[64px] h-[64px] flex items-center justify-center">
            <img src={iphone} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;

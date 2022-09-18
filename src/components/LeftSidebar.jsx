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
import dots from "../imgs/dots.svg";
import iphoneTitle from "../imgs/Iphone 6s Plus (1).svg";
import Active from "../imgs/Active.svg";

import User from "../imgs/Rectangle 643.svg";

const LeftSidebar = () => {
  return (
    <div className="bg-white w-[281px] min-h-screen flex px-10   flex-col">
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
      <div className="mt-10">
        <div className="flex items-center justify-between">
          <div className="flex space-x-4">
            {" "}
            <div className="bg-[#F3F5FA] w-[64px] h-[64px] flex items-center justify-center">
              <img src={iphone} alt="" />
            </div>
            <div className="flex flex-col  justify-center space-y-3">
              <div>
                <img src={iphoneTitle} alt="" />
              </div>

              <div className="flex space-x-2">
                <div className="w-[7px] h-[7px] rounded-full bg-[#3ECD7B]"></div>{" "}
                <img src={Active} alt="" />
              </div>
            </div>
          </div>
          <div>
            <img src={dots} alt="" />
          </div>
        </div>
      </div>
      <div className="mt-10">
        <div className="flex items-center justify-between">
          <div className="flex space-x-4">
            {" "}
            <div className="bg-[#F3F5FA] w-[64px] h-[64px] flex items-center justify-center">
              <img src={iphone} alt="" />
            </div>
            <div className="flex flex-col  justify-center space-y-3">
              <div>
                <img src={iphoneTitle} alt="" />
              </div>

              <div className="flex space-x-2">
                <div className="w-[7px] h-[7px] rounded-full bg-[#3ECD7B]"></div>{" "}
                <img src={Active} alt="" />
              </div>
            </div>
          </div>
          <div>
            <img src={dots} alt="" />
          </div>
        </div>
      </div>
      <div className="mt-10">
        <div className="ml-3">
          <div className="hover:ring-2 cursor-pointer rounded-md flex items-center justify-center h-[50px] w-[50px] ring-blue-300">
            {" "}
            <img className="rounded-md " src={User} alt="" />
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;

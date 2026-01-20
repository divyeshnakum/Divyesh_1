import React, { useState } from "react";
import LogoImg from "../assets/images/Rectangle-1.png";
import iconDashbordReg from "../assets/icons/admin-dashboard-regular.png";
import iconStudentReg from "../assets/icons/admin-students-regular.png";
import iconQuizzeReg from "../assets/icons/admin-quizzes-regular.png";
import icnoRewaredReg from "../assets/icons/admin-rewards-regular.png";
import iconPaymentReg from "../assets/icons/admin-payment-regular.png";
import iconAnalyticsReg from "../assets/icons/admin-analytics-regular.png";
import iconSettingReg from "../assets/icons/setting-regular.png";

import iconLogout from "../assets/icons/logout.png";

import iconDashbordFill from "../assets/icons/admin-dashboard-fill.png";
import iconStudentFill from "../assets/icons/admin-students-fill.png";
import iconQuizzeFill from "../assets/icons/admin-quizzes-Fill.png";
import icnoRewaredFill from "../assets/icons/admin-rewards-fill.png";
import iconPaymentFill from "../assets/icons/admin-payment-fill.png";
import iconAnalyticsFill from "../assets/icons/admin-analytics-fill.png";
import iconSettingFill from "../assets/icons/setting-fill.png";

import {
  bgCartColor,
  bgColor,
  baseColorYel,
  hoverColorYel,
  textColPrimary,
  textColSecondary,
  RedErrorCol,
  borderColor,
} from "./ColorLayout";

const Sidebar = ({
  className,
  setSidebarOpen,
  activeIndex,
  setActiveIndex,
}) => {
  const menuItems = [
    {
      name: "Dashboard",
      icon: iconDashbordReg,
      hoverIcon: iconDashbordFill,
    },
    {
      name: "Students",
      icon: iconStudentReg,
      hoverIcon: iconStudentFill,
    },
    {
      name: "Quizzes",
      icon: iconQuizzeReg,
      hoverIcon: iconQuizzeFill,
    },
    {
      name: "Rewards",
      icon: icnoRewaredReg,
      hoverIcon: icnoRewaredFill,
    },
    {
      name: "Payments",
      icon: iconPaymentReg,
      hoverIcon: iconPaymentFill,
    },
    {
      name: "Analytics",
      icon: iconAnalyticsReg,
      hoverIcon: iconAnalyticsFill,
    },
  ];

  return (
    <div className={`md:h-dvh md:p-4 md:pr-0`}>
      <aside
        className={`
          border-transparent rounded-r-2xl md:rounded-2xl h-full w-64 flex flex-col ${bgColor} ${className}
        `}
      >
        {/* CLOSE BUTTON (mobile) */}
        <button
          className="absolute top-4 right-4 md:hidden text-2xl font-bold text-gray-700 hover:text-black"
          onClick={() => setSidebarOpen(false)}
        >
          ✕
        </button>
        {/* Main  */}
        <div className="flex flex-col h-full  justify-between">
          <div className="">
            {/* LOGO */}
            <div className="flex justify-center items-center py-6">
              <img
                src={LogoImg}
                alt="QuizCash"
                className="h-16 object-contain"
              />
            </div>

            {/* MENU */}
            <ul className="flex-1 px-3 space-y-1 overflow-y-auto">
              {menuItems.map((item, i) => (
                <li
                  key={i}
                  onClick={() => {
                    setActiveIndex(i); // Set active menu item
                    if (window.innerWidth < 768) {
                      // Mobile check (Tailwind md breakpoint ~768px)
                      setSidebarOpen(false); // Close sidebar on mobile
                    }
                  }}
                  className={`
                group flex items-center gap-3 px-4 py-2 text-md cursor-pointer  rounded-r-2xl my-2 -ml-4 transition-all  hover:text-lg duration-200 ${hoverColorYel}
                ${
                  activeIndex === i
                    ? `${textColPrimary} ${baseColorYel} text-lg`
                    : ""
                }
              `}
                >
                  {/* Icon */}
                  <img
                    src={item.icon}
                    alt={item.name}
                    className={`
                  w-6 h-6 transition-all duration-200
                  group-hover:hidden
                  ${activeIndex === i ? "hidden" : "block group-hover:hidden"}
                `}
                  />
                  <img
                    src={item.hoverIcon}
                    alt={item.name}
                    className={`
    w-8 h-8 transition-all duration-200
    ${activeIndex === i ? "block" : "hidden group-hover:block"}
  `}
                  />

                  {/* Name */}
                  <span
                    className={`${
                      activeIndex === i ? "font-bold" : "group-hover:font-bold"
                    }`}
                  >
                    {item.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Settings manually placed here */}
          <div className="flex flex-col align-bottom justify-end gap-2">
            <div className="flex-1 px-3  overflow-y-auto">
              <div
                 onClick={() => setActiveIndex(6)} // Set activeIndex to 6 for Settings
      className={`
        group flex items-center gap-3 px-4 py-2 text-md cursor-pointer rounded-r-2xl border ${borderColor} my-2 -ml-4 hover:-ml-2 hover:px-2 transition-all duration-200 hover:font-bold hover:border-black hover:rounded-l-2xl
        ${activeIndex === 6 ? `${textColPrimary}  font-bold rounded-l-2xl border-black   -ml-2 px-2` : ""}
      `}
              >
                <img
                  src={iconSettingReg}
                  alt="Settings"
                  className={`w-6 h-6 transition-all duration-200 group-hover:hidden ${activeIndex === 6 ? "hidden" : ""}`}
                />
                <img
                  src={iconSettingFill}
                  alt="Settings"
                  
                  className={`w-6 h-6 transition-all duration-200 ${activeIndex === 6 ? "block" : "hidden group-hover:block"}`}
                />
                <span className=" ">Settings</span>
              </div>
            </div>

            {/* LOGOUT at bottom */}
            <div className="pr-3 mb-4">
              <button
                className={`w-full flex items-center justify-center gap-3 px-4 py-2  text-sm font-medium text-white ${RedErrorCol} rounded-r-2xl transition`}
              >
                <img
                  src={iconLogout}
                  alt="Logout"
                  className="w-6 h-6 transition-all duration-200 group-hover:hidden"
                />
                Logout
              </button>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;

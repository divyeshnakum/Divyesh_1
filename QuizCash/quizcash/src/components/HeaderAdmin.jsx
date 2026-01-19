import React from "react";
import { BellIcon } from "@heroicons/react/24/outline";
import { bgColor, bgCartColor, borderColor } from "./ColorLayout";
import SearchIcon from "../assets/icons/uil_search.png";

const HeaderAdmin = ({ onHamburgerClick }) => {
  return (
    <header
      className={`flex  items-center justify-between gap-2 ${bgColor} px-2 sm:px-4 py-2 border-transparent rounded-2xl shadow`}
    >
      {/* LEFT: Hamburger + Search */}
      <div className="flex items-center gap-2 sm:gap-4 flex-1">
        {/* Hamburger (mobile only) */}
        <button
          className="md:hidden p-2 rounded-md bg-gray-200"
          onClick={onHamburgerClick}
        >
          ☰
        </button>

        {/* Search */}
        <div className="relative w-full max-w-[14rem] sm:max-w-sm">
          <img
            src={SearchIcon}
            alt="search"
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4"
          />

          <input
            type="text"
            placeholder="Search here"
            className={`border ${bgCartColor} ${borderColor} rounded-md pl-8 pr-2 py-2 w-full outline-none text-sm`}
          />
        </div>
      </div>

      {/* RIGHT: Bell + Profile */}
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Notification */}
        <BellIcon
          className={`w-8 h-8 p-1 ${bgCartColor} rounded-full cursor-pointer`}
        />

        {/* Profile */}
        <div className="relative group sm:hidden flex items-center gap-2">
          {/* Avatar */}
          <img
            src="https://i.pravatar.cc/40"
            alt="User"
            className="w-8 h-8 rounded-full cursor-pointer"
          />

          {/* Hover info (mobile only) */}
          <div
            className="
      absolute top-10 right-0
      hidden group-hover:block
      bg-white shadow-lg rounded-lg p-2
      text-xs z-50
    "
          >
            <p className="font-medium text-gray-800">Sakshi Pandit</p>
            <p className="text-gray-500">sasp23@gmail.com</p>
          </div>
        </div>

        {/* Desktop version (always visible) */}
        <div className="hidden sm:flex items-center gap-2">
          <img
            src="https://i.pravatar.cc/40"
            alt="User"
            className="w-8 h-8 rounded-full"
          />
          <div>
            <p className="text-sm font-medium">Sakshi Pandit</p>
            <p className="text-xs text-gray-500">sasp23@gmail.com</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderAdmin;

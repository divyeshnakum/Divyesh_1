import React,{useState} from "react";
import { BellIcon } from "@heroicons/react/24/outline";
import { bgColor, bgCartColor, borderColor, TextGray } from "./ColorLayout";
import SearchIcon from "../assets/icons/uil_search.png";

const HeaderAdmin = ({ onHamburgerClick ,onProfileClick,onNotifiClick}) => {
     const [open, setOpen] = useState(false);
  
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
        onClick={onNotifiClick}
          className={`w-8 h-8 p-1 ${bgCartColor} rounded-full cursor-pointer`}
        />

        {/* Profile */}
        <div 
           onClick={onProfileClick}
        className="cursor-pointer relative group sm:hidden flex items-center gap-2">
          {/* Avatar */}
          <img
            src="https://i.pravatar.cc/40"
            alt="User"
            className="w-8 h-8 rounded-full cursor-pointer"
          />

          {/* Hover info (mobile only) */}
          <div
            className={`
      absolute top-10 right-0
      hidden group-hover:block
      ${bgCartColor} shadow-lg rounded-lg p-2
      text-xs z-50 
    `}
          >
            <p className="font-medium">Sakshi Pandit</p>
            <p className={`${TextGray}`}>sasp23@gmail.com</p>
          </div>
        </div>

        {/* Desktop version (always visible) */}
        <div
          onClick={onProfileClick}
          className="hidden sm:flex items-center gap-2 cursor-pointer"
        >
          <img
            src="https://i.pravatar.cc/40"
            alt="User"
            className="w-8 h-8 rounded-full"
          />
          <div>
            <p className="text-sm font-medium">Sakshi Pandit</p>
            <p className={`text-xs ${TextGray} `}>sasp23@gmail.com</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderAdmin;

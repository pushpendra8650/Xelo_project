import React, { useState } from 'react';
import userImage from '../img/Avtar.jpg'; // Replace with the path to your user image
import logo from '../img/xeloo logo.png';
import { FaThLarge, FaChartBar, FaIndent } from "react-icons/fa";
import OpenNavbar from './OpenNavbar';
import { HiFolderAdd } from "react-icons/hi";
import { LuLanguages } from "react-icons/lu";
import { MdOutlineManageSearch } from "react-icons/md";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [isOpenNavbarVisible, setIsOpenNavbarVisible] = useState(false);

  const handleMouseEnter = (menu) => {
    setActiveMenu(menu);
    setIsNavbarVisible(false); // Hide the navbar after hovering
    setIsOpenNavbarVisible(true); // Show the OpenNavbar
  };

  const handleMouseLeave = () => {
    setIsOpenNavbarVisible(false); // Hide the OpenNavbar
    setIsNavbarVisible(true); // Show the navbar
  };

  return (
    <div className="flex h-screen relative">
      {isNavbarVisible && (
        <div
          className="flex flex-col items-center bg-blue-600 p-4 text-white font-sans h-screen w-20 max-w-17 relative space-y-4"
          onMouseLeave={handleMouseLeave} // Hide OpenNavbar when leaving the navbar
        >
          <div className="mb-5 text-2xl font-bold flex items-center justify-center w-full">
            <img src={logo} alt="Logo" className="w-13 h-9" />
          </div>
          <div
            className="relative mb-2 cursor-pointer flex items-center justify-center w-19 h-19 font-sans hover:bg-white/20 hover:backdrop-blur-sm rounded-md transition-all duration-300"
            onMouseEnter={() => handleMouseEnter('dashboard')}
          >
            <FaThLarge className="text-lg font-xs " />
          </div>
          <div
            className="relative mb-1 cursor-pointer flex items-center justify-center w-9 h-9 font-sans hover:bg-white/20 hover:backdrop-blur-sm rounded-md transition-all duration-300"
            onMouseEnter={() => handleMouseEnter('externalLink')}
          >
            <MdOutlineManageSearch className="text-2xl font-xs" />
          </div>

          <div
            className="relative mb-1 cursor-pointer flex items-center justify-center w-9 h-9 font-sans hover:bg-white/20 hover:backdrop-blur-sm rounded-md transition-all duration-300"
            onMouseEnter={() => handleMouseEnter('analytics')}
          >
            <HiFolderAdd className="text-2xl font-xs" />
          </div>

          <div
            className="relative mb-1 cursor-pointer flex items-center justify-center w-9 h-9 font-sans hover:bg-white/20 hover:backdrop-blur-sm rounded-md transition-all duration-300"
            onMouseEnter={() => handleMouseEnter('analytics')}
          >
            <FaChartBar className="text-lg font-xs" />
          </div>
          <div
            className="relative mb-1 cursor-pointer flex items-center justify-center w-9 h-9 font-sans hover:bg-white/20 hover:backdrop-blur-sm rounded-md transition-all duration-300"
            onMouseEnter={() => handleMouseEnter('indentation')}
          >
            <FaIndent className="text-lg font-xs" />
          </div>

          <div
            className="absolute bottom-[17%] mb-1 cursor-pointer flex items-center justify-center w-9 h-9 font-sans hover:bg-white/20 hover:backdrop-blur-sm rounded-md transition-all duration-300"
            onMouseEnter={() => handleMouseEnter('zhihu')}
          >
            <LuLanguages className="text-lg font-xs" />
          </div>
          <div className="absolute bottom-7 flex flex-col items-center space-y-1">
            <img src={userImage} alt="User" className="w-12 h-12 rounded-full" />
          </div>
        </div>
      )}
      {isOpenNavbarVisible && (
        <div className={`flex-grow transition-all duration-500 ease-in-out transform ${isOpenNavbarVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}>
          <OpenNavbar toggleNavbar={handleMouseLeave} />
        </div>
      )}
    </div>
  );
};

export default Navbar;

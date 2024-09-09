import React from 'react';
import userImage from '../img/Avtar.jpg';
import logo from '../img/xeloo logo.png';
import { Link } from 'react-router-dom';
import { FaThLarge, FaExternalLinkAlt, FaChartBar, FaIndent, FaAngleLeft } from "react-icons/fa";
import { FaZhihu } from "react-icons/fa6";
import { MdOutlineManageSearch } from "react-icons/md";
import { HiFolderAdd } from "react-icons/hi";

import { FaRegFile } from "react-icons/fa";
import { CgSmartHomeHeat } from "react-icons/cg";

import { FaCentos } from "react-icons/fa";

const OpenNavbar = ({ toggleNavbar }) => {
  return (
    <div className="flex flex-col items-center bg-blue-600 p-4 text-white h-screen w-45 relative font-sans ml-0">
      <div className="mb-6 text-xl font-bold flex items-center justify-center w-full ml-0">
        <img src={logo} alt="Logo" className="w-12 h-8 rounded-full" />
      </div>
      <div className=" w-full">
        <div className="cursor-pointer flex items-center pl-1 text-sm pt-3 pb-3 mb-2 hover:bg-white/20 w-30 h-9 hover:backdrop-blur-sm rounded-md transition-all duration-300">
          <FaThLarge className="text-lg mr-2 font-sans" />
          <Link to="/Dashboard" className="font-sans text-sm font-xs" >Dashboard</Link>
        </div>
        <div className="cursor-pointer flex items-center pl-1 text-sm pt-3 pb-3 mb-2 hover:bg-white/20 w-30 h-9 hover:backdrop-blur-sm rounded-md transition-all duration-300">
           <MdOutlineManageSearch className="text-2xl font-xs mr-2" />
            <Link to="/Table" className="font-sans text-sm font-xs">Administration</Link>
            </div>

        <div className="cursor-pointer flex items-center  text-sm pt-3 pb-2 mb-2 hover:bg-white/20 w-31 h-9 hover:backdrop-blur-sm rounded-md transition-all duration-300">
          < HiFolderAdd  className="text-2xl  font-sans font-xs mr-1" /> 
          <Link to='/Campaign'>Create Campaign  </Link>
        </div>

        <div className="cursor-pointer flex items-center  text-sm pt-2 pb-1 mb-1  w-31 h-9 hover:backdrop-blur-sm rounded-md transition-all duration-300 ml-5">
        <FaRegFile  className="text-1xl  font-sans font-xs mr-1" />
         <Link to='#'> Campaign </Link>
        </div>

        <div className="cursor-pointer flex items-center  text-sm pt-2 pb-1 mb-1  w-31 h-9 hover:backdrop-blur-sm rounded-md transition-all duration-300 ml-5">
        <FaCentos  className="text-1xl  font-sans font-xs mr-1" />
        <Link to='#'>Targeting </Link>
        </div>

        <div className="cursor-pointer flex items-center  text-sm pt-2 pb-1 mb-1  w-27 h-9 hover:backdrop-blur-sm rounded-md transition-all duration-300 ml-5">
        <CgSmartHomeHeat   className="text-1xl  font-sans font-xs mr-1" />
        <Link to='#'> Creative </Link>
        </div>

        <div className="cursor-pointer flex items-center pl-1 text-sm pt-3 pb-3 mb-2 hover:bg-white/20 w-30 h-9 hover:backdrop-blur-sm rounded-md transition-all duration-300">
          <FaChartBar className="text-lg mr-2 font-sans" /> 
          <Link to="/DataAnalysis" className="font-sans text-sm font-xs">Analytics Hub</Link>
        </div>
        <div className="cursor-pointer flex items-center pl-1 text-sm pt-3 pb-3 mb-2 hover:bg-white/20 w-30 h-9 hover:backdrop-blur-sm rounded-md transition-all duration-300">
          <FaIndent className="text-lg mr-2 font-sans" /> 
          <Link to="/Budgetcontrol" className="font-sans text-sm font-xs">Budget Control</Link>
        </div>
      </div>
      <div className="mt-[35%] flex flex-col items-center space-y-2 pb-10 w-full">
        <div className="flex items-center justify-center space-x-2 text-sm hover:bg-white/20 hover:backdrop-blur-sm rounded-md p-2 transition-all duration-300">
          <FaZhihu className="text-xl pr-1" />
          <div className="cursor-pointer font-sans text-sm font-xs">EN</div>
          <span>|</span>
          <div className="cursor-pointer font-sans text-sm font-xs">ES</div>
          <span>|</span>
          <div className="cursor-pointer font-sans text-sm font-xs">RU</div>
        </div>
        <hr className='border-t border-gray-600 w-full ' />
        <div className="flex items-center bg-white/10 hover:backdrop-blur-sm shadow-lg rounded-sm p-4 mt-16 space-x-3 w-full transition-all duration-300">
          <img src={userImage} alt="User" className="w-10 h-10 rounded-full" />
          <div className='flex flex-col'>
            <div className="text-xs">User</div>
            <div className="text-xs font-sans">Admin</div>
          </div>
        </div>
      </div>
      <button
        onClick={toggleNavbar}
        className="absolute top-4 left-4 text-white p-2 rounded transition-all duration-300"
      >
        <FaAngleLeft className="text-lg" />
      </button>
    </div>
  );
};

export default OpenNavbar;

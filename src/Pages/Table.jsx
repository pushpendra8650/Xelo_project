import React, { useState } from 'react';
import { GoDownload } from "react-icons/go";
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
const Table = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showFilterPopup, setShowFilterPopup] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState({
    all: false,
    impression: true,
    cvr: true,
    cpi: true,
    cost: true,
    ecpm: true,
    ctr: true,
    cpc: true,
  });
  const [filterOptions, setFilterOptions] = useState({
    all: false,
    active: true,
    pause: true,
    pending: true,
    rejected: true,
  });

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleCancel = () => {
    setShowPopup(false);
  };

  const handleApply = () => {
    setShowPopup(false);
  };

  const handleFilterCancel = () => {
    setShowFilterPopup(false);
  };

  const handleFilterApply = () => {
    setShowFilterPopup(false);
  };
// custome table popup functionaly
  const handleOptionChange = (option) => {
    if (option === 'all') {
      const newSelectedOptions = Object.keys(selectedOptions).reduce((acc, key) => {
        acc[key] = !selectedOptions.all;
        return acc;
      }, {});
      setSelectedOptions(newSelectedOptions);
    } else {
      setSelectedOptions((prevOptions) => {
        const updatedOptions = {
          ...prevOptions,
          [option]: !prevOptions[option],
        };
        const allSelected = Object.keys(updatedOptions).every((key) => key === 'all' || updatedOptions[key]);
        updatedOptions.all = allSelected;
        return updatedOptions;
      });
    }
  };

  // filter popup functionality of check box

  const handleFilterOptionChange = (option) => {
    if (option === 'all') {
      const newFilterSelectedOptions = Object.keys(filterOptions).reduce((acc, id) => {
        acc[id] = !filterOptions.all;
        return acc;
      }, {});
      setFilterOptions(newFilterSelectedOptions);
    } else {
      setFilterOptions((prevOptions) => {
        const updatedFilterOptions = {
          ...prevOptions,
          [option]: !prevOptions[option],
        };
        const allFilterSelected = Object.keys(updatedFilterOptions).every((id) => id === 'all' || updatedFilterOptions[id]);
        updatedFilterOptions.all = allFilterSelected;
        return updatedFilterOptions;
      });
    }
  };
  

  const convertToCSV = (data) => {
    const headers = [
      "Campaign Name",
      "Active/Pause",
      "Promotional Goal",
      "Placement Type",
      "Campaign Status",
      "Campaign Id",
      selectedOptions.impression ? "Impression" : null,
      "Click",
      "Install",
      selectedOptions.cost ? "Cost(USD)" : null,
      selectedOptions.ctr ? "CTR(%)" : null,
      selectedOptions.cvr ? "CVR(%)" : null,
      selectedOptions.ecpm ? "ECPM(USD)" : null,
      selectedOptions.cpc ? "CPC(USD)" : null,
      selectedOptions.cpi ? "CPI(USD)" : null,
    ].filter(Boolean);

    const rows = [
      headers.join(","),
      ...data.map(row =>
        [
          row.name,
          row.activePause,
          row.goal,
          row.placement,
          row.status,
          row.id,
          selectedOptions.impression ? row.impression : null,
          row.click,
          row.install,
          selectedOptions.cost ? row.cost : null,
          selectedOptions.ctr ? row.ctr : null,
          selectedOptions.cvr ? row.cvr : null,
          selectedOptions.ecpm ? row.ecpm : null,
          selectedOptions.cpc ? row.cpc : null,
          selectedOptions.cpi ? row.cpi : null,
        ].filter(Boolean).join(",")
      ),
    ].join("\n");

    return rows;
  };

  const downloadCSV = () => {
    const csv = convertToCSV(tableData);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute("download", "table_data.csv");
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const tableData = [
    {
      name: "Zomatohjffjfhjfhjfjf",
      activePause: "Active",
      goal: "Install",
      placement: "In App",
      status: "Running",
      id: "10635",
      impression: 10000,
      click: 500,
      install: 300,
      cost: "$500",
      ctr: "5%",
      cvr: "3%",
      ecpm: "$50",
      cpc: "$1",
      cpi: "$1.67",
    },
    {
      name: "Zomato",
      activePause: "Pause",
      goal: "Install",
      placement: "In App",
      status: "Running",
      id: "10635",
      impression: 10000,
      click: 500,
      install: 300,
      cost: "$500",
      ctr: "5%",
      cvr: "3%",
      ecpm: "$50",
      cpc: "$1",
      cpi: "$1.67",
    },
    {
      name: "Zomato",
      activePause: "Active",
      goal: "Install",
      placement: "In App",
      status: "Running",
      id: "10635",
      impression: 10000,
      click: 500,
      install: 300,
      cost: "$500",
      ctr: "5%",
      cvr: "3%",
      ecpm: "$50",
      cpc: "$1",
      cpi: "$1.67",
    },
    {
      name: "Zomatohghghghghg",
      activePause: "Rejected",
      goal: "Install",
      placement: "In App",
      status: "Running",
      id: "10635",
      impression: 10000,
      click: 500,
      install: 300,
      cost: "$500",
      ctr: "5%",
      cvr: "3%",
      ecpm: "$50",
      cpc: "$1",
      cpi: "$1.67",
    },
    {
      name: "Zomatojfhdjuddhhhshsdh",
      activePause: "Pending",
      goal: "Install",
      placement: "In App",
      status: "Running",
      id: "10635",
      impression: 10000,
      click: 500,
      install: 300,
      cost: "$500",
      ctr: "5%",
      cvr: "3%",
      ecpm: "$50",
      cpc: "$1",
      cpi: "$1.67",
    },
    // Additional rows...
  ];

  // after button click bg change functionality
 
    const [isClicked, setIsClicked] = useState(false);
  
    const handleClickbutton = () => {
      setIsClicked(!isClicked);
    };
    // campaign button bg functionality
    const [isClickedcampaign, setIsClickedcampaign] = useState(false);
  
    const handleClickcampaign = () => {
      setIsClickedcampaign(!isClickedcampaign);
    };

    // create campaign button bg functionality
    const [isClickedcreatecampaign, setIsClickedcreatecampaign] = useState(false);
  
    const handleClickcreatecampaign = () => {
      setIsClickedcreatecampaign(!isClickedcreatecampaign);
    };

  return (
    <div className='flex bg-white h-screen overflow-hidden mr-1'>
      {/* Sticky Navbar */}
      <div className='w-max bg-white h-full sticky top-0 border-r border-gray-200'>
        <Navbar />
      </div>
      {/* Main Content */}
      <div className='bg-white p-2 flex-1 ml-2 mr-2 overflow-y-auto'>
        {/* Filter button */}
        <div className='bg-white flex justify-between items-center p-2 border border-gray-100 shadow rounded-md'>
          <button
            onClick={() => {setShowFilterPopup(true);
                          
            }}
            className="hover:bg-blue-500 hover:text-white bg-white text-gray-600 py-1 px-4 border border-gray-200 font-xs font-sans text-sm rounded-full shadow"
          >
            Filter +
          </button>
          {/* create campaign with ai */}
          <button className='hover:bg-blue-500 hover:text-white  text-gray-700  py-2 px-4 border border-gray-200 font-xs font-sans text-sm rounded-full shadow'>
            Create Campaign with AI +
          </button>
        </div>

        {/* Campaign Date and Download Button */}
        <div className='bg-white flex items-center p-2 border border-gray-100 shadow rounded-md mt-1'>
          <button
            onClick={()=>{downloadCSV();
                 
          }}
            className="hover:bg-blue-500 hover:text-white bg-white text-gray-600 py-1 px-4 shadow border border-gray-200 font-xs font-sans text-sm rounded-full flex items-center"
          >
            Campaign
            <GoDownload className='ml-2' />
          </button>
          <div className='ml-[40%] mr-auto font-xs font-sans text-sm text-gray-600'>
            Time Zone: UTC +05:30
          </div>
          <div className="flex space-x-2 shadow border border-gray-200 rounded-full ml-3">
            <input type="date" className="backdrop-blur-sm bg-white/15 text-gray-600 font-xs font-sans text-sm p-2 rounded-full" />
            <span className="text-gray-400">—</span>
            <input type="date" className="backdrop-blur-sm bg-white/15 text-gray-600 font-xs font-sans text-sm p-2 rounded-full" />
          </div>
        </div>

        {/* Create Campaign and Search Input */}
        <div className='bg-white flex items-center p-2 border border-gray-100 shadow rounded-md mt-1'>

          <button 
          className= "hover:bg-blue-500  hover:text-white bg-white text-gray-600 py-1 px-1 shadow border border-gray-200 font-xs font-sans text-sm rounded-full">
          <Link to='/Campaign'>Create Campaign  </Link>
          </button>
          
          <div className='ml-[51%] mr-auto bg-white flex items-center p-2 '>
            <button onClick={togglePopup} className='hover:bg-blue-500 hover:text-white bg-white text-gray-600 py-1 px-4 shadow border border-gray-200 font-xs font-sans text-sm rounded-full'>Custom Table</button>
          </div>
          <div className='ml-3'>
         <input 
        type="text" 
        placeholder="Search..." 
        className="bg-white text-gray-700 font-sans p-2 rounded border border-gray-200 text-gray-600 placeholder-gray-400 placeholder:text-xs focus:border-blue-500" 
        />
        </div>


        </div>

        {/* Campaign Table */}
      <div className="overflow-x-auto shadow">
  <table className="min-w-full rounded-lg border border-gray-100 shadow mt-2">
    <thead className="sticky top-0 bg-white text-gray-300 border-b border-gray-200">
      <tr>
        <th className="py-5 px-1 text-gray-800 font-sans font-light text-left text-xs font-semibold pl-4">Campaign Name</th>
        <th className="py-5 px-2 text-gray-800 font-sans font-light text-left text-xs font-semibold  pl-4">Active/Pause</th>
        <th className="py-5 px-1 text-gray-800 font-sans font-light text-left text-xs font-semibold  pl-4">Promotional Goal</th>
        <th className="py-5 px-1 text-gray-800 font-sans font-light text-left text-xs font-semibold  pl-4">Placement Type</th>
        <th className="py-5 px-1 text-gray-800 font-sans font-light text-left text-xs font-semibold  pl-4">Campaign Status</th>
        <th className="py-5 px-1 text-gray-800 font-sans font-light text-left text-xs font-semibold  pl-4">Campaign Id</th>
        {selectedOptions.impression && <th className="py-5 px-1 text-gray-800 font-sans font-light text-left text-xs font-semibold  pl-4">Impression</th>}
        <th className="py-5 px-1 text-gray-800 font-sans font-light text-left text-xs font-semibold  pl-4">Click</th>
        <th className="py-5 px-1 text-gray-800 font-sans font-light text-left text-xs font-semibold  pl-4">Install</th>
        {selectedOptions.cost && <th className="py-5 px-1 text-gray-800 font-sans font-light text-left text-xs font-semibold  pl-4">Cost(USD)</th>}
        {selectedOptions.ctr && <th className="py-5 px-1 text-gray-800 font-sans font-light text-left text-xs font-semibold  pl-4">CTR(%)</th>}
        {selectedOptions.cvr && <th className="py-5 px-1 text-gray-800 font-sans font-light text-left text-xs font-semibold  pl-4">CVR(%)</th>}
        {selectedOptions.ecpm && <th className="py-5 px-1 text-gray-800 font-sans font-light text-left text-xs font-semibold  pl-4">ECPM(USD)</th>}
        {selectedOptions.cpc && <th className="py-5 px-1 text-gray-800 font-sans font-light text-left text-xs font-semibold  pl-4">CPC(USD)</th>}
        {selectedOptions.cpi && <th className="py-5 px-1 text-gray-800 font-sans font-light text-left text-xs font-semibold  pl-4">CPI(USD)</th>}
      </tr>
    </thead>
    <tbody>
      {tableData
        .filter(row => {
          if (filterOptions.all) return true;
          if (filterOptions.active && row.activePause === "Active") return true;
          if (filterOptions.pause && row.activePause === "Pause") return true;
          if (filterOptions.pending && row.activePause === "Pending") return true;
          if (filterOptions.rejected && row.activePause === "Rejected") return true;
          return false;
        })
        .map((row, index) => (
          <tr key={index} className="bg-white hover:bg-gray-50 text-gray-500 text-xs font-sans border-b border-gray-200">
            <td className="py-5 px-1 pl-4 text-left">{row.name}</td>
            <td className="py-5 px-1 text-left pl-4">
              <button
                className={`py-1 px-3 rounded ${
                  row.activePause === "Active"
                    ? "bg-blue-500 text-white"
                    : row.activePause === "Pause"
                    ? "bg-white text-gray-500 border border-gray-300"
                    : "bg-white text-gray-500 border border-gray-300"
                }`}
              >
                {row.activePause}
              </button>
            </td>
            <td className="py-5 px-1 text-left pl-4">{row.goal}</td>
            <td className="py-5 px-1 text-left pl-4">{row.placement}</td>
            <td className="py-5 px-1 text-left pl-4">{row.status}</td>
            <td className="py-5 px-1 text-left pl-4">{row.id}</td>
            {selectedOptions.impression && <td className="py-5 px-1 text-left pl-4">{row.impression}</td>}
            <td className="py-5 px-1 text-left pl-4">{row.click}</td>
            <td className="py-5 px-1 text-left pl-4">{row.install}</td>
            {selectedOptions.cost && <td className="py-5 px-1 text-left pl-4">{row.cost}</td>}
            {selectedOptions.ctr && <td className="py-5 px-1 text-left pl-4">{row.ctr}</td>}
            {selectedOptions.cvr && <td className="py-5 px-1 text-left pl-4">{row.cvr}</td>}
            {selectedOptions.ecpm && <td className="py-5 px-1 text-left pl-4">{row.ecpm}</td>}
            {selectedOptions.cpc && <td className="py-5 px-1 text-left pl-4">{row.cpc}</td>}
            {selectedOptions.cpi && <td className="py-5 px-1 text-left pl-4">{row.cpi}</td>}
          </tr>
        ))}
    </tbody>
  </table>
</div>
{/* Pagination */}
<div className="flex justify-center items-center bg-white mt-1 space-x-2">
 <button className=" hover:bg-blue-500 hover:text-white bg-white  text-gray-600 font-xs px-3 py-1 rounded  font-sans text-sm border border-gray-300">
 Previous
 </button>
 <span className="text-gray-600 bg-white px-2 py-1 rounded">1</span>
 <button className=" hover:bg-blue-500 hover:text-white text-gray-600 font-sans px-3 py-1 rounded font-xs  text-sm border border-gray-300">
 Next
 </button>
 </div>
      </div>

      {/* Custom Table Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
        
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div className="bg-white p-6 rounded-lg shadow-lg z-50">
          <h1 className='text-blue-500 text-semibold text-lg font-xs pb-5' >Filter</h1>
            <div className="grid grid-cols-3 gap-4">
             
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox"
                  checked={selectedOptions.all}
                  onChange={() => handleOptionChange('all')}
                />
                <span className="ml-2 text-sm font-xs text-gray-600">All</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox"
                  checked={selectedOptions.impression}
                  onChange={() => handleOptionChange('impression')}
                />
                <span className="ml-2 text-sm font-xs text-gray-600">IMPRESSION</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox"
                  checked={selectedOptions.cvr}
                  onChange={() => handleOptionChange('cvr')}
                />
                <span className="ml-2 text-sm font-xs text-gray-600">CVR(%)</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox"
                  checked={selectedOptions.cpi}
                  onChange={() => handleOptionChange('cpi')}
                />
                <span className="ml-2 text-sm font-xs text-gray-600">CPI(USD)</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox"
                  checked={selectedOptions.cost}
                  onChange={() => handleOptionChange('cost')}
                />
                <span className="ml-2 text-sm font-xs text-gray-600">COST(USD)</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox"
                  checked={selectedOptions.ecpm}
                  onChange={() => handleOptionChange('ecpm')}
                />
                <span className="ml-2 text-sm font-xs text-gray-600">ECPM(USD)</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox"
                  checked={selectedOptions.ctr}
                  onChange={() => handleOptionChange('ctr')}
                />
                <span className="ml-2 text-sm font-xs text-gray-600">CTR(%)</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox"
                  checked={selectedOptions.cpc}
                  onChange={() => handleOptionChange('cpc')}
                />
                <span className="ml-2 text-sm font-xs text-gray-600">CPC(USD)</span>
              </label>
            </div>
            <hr className='mb-4 mt-4'/>
            <div className="flex justify-end mt-4">
              <button
                onClick={handleCancel}
                className="bg-white hover:bg-blue-500 hover:text-white  py-2 px-4 rounded mr-2 text-sm font-xs text-gray-600 border border-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleApply}
                className="bg-white hover:bg-blue-500 hover:text-white text-gray-600  py-2 px-4 rounded text-sm font-xs border border-gray-300"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Filter Popup */}
      {showFilterPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div className="bg-white p-6 rounded-lg shadow-lg z-50">
            <h1 className='text-blue-500 text-semibold text-lg font-xs pb-5'>Filter</h1>
            <div className="grid grid-cols-3 gap-4 gap-y-4">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox"
                  checked={filterOptions.all}
                  onChange={() => handleFilterOptionChange('all')}
                />
                <span className="ml-2 text-sm font-xs text-gray-600">All</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox "
                  checked={filterOptions.active}
                  onChange={() => handleFilterOptionChange('active')}
                />
                <span className="ml-2 text-sm font-xs text-gray-600">Active</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox"
                  checked={filterOptions.pause}
                  onChange={() => handleFilterOptionChange('pause')}
                />
                <span className="ml-2 text-sm font-xs text-gray-600">Pause</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox"
                  checked={filterOptions.pending}
                  onChange={() => handleFilterOptionChange('pending')}
                />
                <span className="ml-2 text-sm font-xs text-gray-600">Pending</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox"
                  checked={filterOptions.rejected}
                  onChange={() => handleFilterOptionChange('rejected')}
                />
                <span className="ml-2 text-sm font-xs text-gray-600">Rejected</span>
              </label>
            </div>
            <hr className='mb-4 mt-4'/>
            <div className="flex justify-end mt-4">
              <button
                onClick={handleFilterCancel}
                className="bg-white hover:bg-blue-500 hover:text-white  py-2 px-4 rounded mr-2 text-sm font-xs text-gray-600 border border-gray-300 "
              >
                Cancel
              </button>
              <button
                onClick={handleFilterApply}
                className="bg-white hover:bg-blue-500 hover:text-white  py-2 px-4 rounded mr-2 text-sm font-xs text-gray-600 border border-gray-300"
              >
                Apply
              </button>

              
            </div>
            
          </div>
          
        </div>
      )}
      
      
    </div>
    
  );
};

export default Table;

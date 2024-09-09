import React, { useState } from 'react';

const MachineTarget = () => {
  const [selectedNetworkOption, setSelectedNetworkOption] = useState(null); // Track selected checkbox for Network section
  const [selectedOSOption, setSelectedOSOption] = useState(null); // Track selected checkbox for OS section
  const [selectedScrollOption, setSelectedScrollOption] = useState(null); // Track selected checkbox for Scrolling section
  const [showCheckboxes, setShowCheckboxes] = useState(false); // Manage visibility of checkboxes
  const [showScrollOptions, setShowScrollOptions] = useState(false); // Manage visibility of scroll options

  const options = [
    'India',
    'Uk',
    'Pk',
    'usa'
  ];

  const handleNetworkCheckboxChange = (option) => {
    setSelectedNetworkOption(option);
  };

  const handleOSCheckboxChange = (option) => {
    setSelectedOSOption(option);
  };

  const handleScrollCheckboxChange = (option) => {
    setSelectedScrollOption(option);
  };

  return (
    <div className="w-full mx-auto mt-4 bg-white p-12 rounded-lg border border-gray-100 shadow">
      <h1 className="text-lg mb-6 text-gray-700 font-semibold font-sans text-sm">Machine Target</h1>

      {/* Network Section */}
      <div className="flex items-center w-full ml-7 mt-8">
        <div className="text-gray-700 font-sans text-sm ml-8">Network</div>
        <div className="flex space-x-4 ml-[16%]">
          <button
            onClick={() => {
              setShowCheckboxes(false);
              setShowScrollOptions(false);
            }}
            className={`rounded-sm text-gray-600 ${showCheckboxes ? 'bg-blue-500 text-white' : 'bg-gray-100'} p-2 pl-7 pr-7 font-sans text-sm`}
          >
            All
          </button>
          <button
            onClick={() => {
              setShowCheckboxes(!showCheckboxes);
              setShowScrollOptions(false);
            }}
            className={`rounded-sm text-gray-600 ${showCheckboxes ? 'bg-blue-500 text-white' : 'bg-gray-100'} p-2 pl-7 pr-7 font-sans text-sm`}
          >
            Limited
          </button>
        </div>
      </div>

      {/* Check Box Section */}
      {showCheckboxes && (
        <div className="w-full flex items-center ml-[23%] mt-8">
          <div className="flex items-center flex-wrap md:w-1/2 space-x-4 mt-2 md:mt-0 pl-4">
            {['3-16', '17-40', '41-60', '60+'].map((ageGroup) => (
              <div key={ageGroup} className="flex items-center mb-2 md:mb-0 ml-5">
                <input
                  type="checkbox"
                  id={`age-group-${ageGroup}`}
                  name="ageGroup"
                  value={ageGroup}
                  checked={selectedNetworkOption === ageGroup}
                  onChange={() => handleNetworkCheckboxChange(ageGroup)}
                  className="mr-3"
                />
                <label htmlFor={`age-group-${ageGroup}`} className="text-gray-700 font-sans text-sm font-xs">
                  {ageGroup}
                </label>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* OS Section */}
      <div className="flex items-center w-full ml-7 mt-10">
        <div className="text-gray-700 font-sans text-sm ml-10">OS</div>
        <div className="flex space-x-4 ml-[18%]">
          <button
            onClick={() => {
              setShowScrollOptions(false);
            }}
            className="border rounded-sm p-2 pl-7 pr-7 text-gray-600 font-xs text-sm"
          >
            Android
          </button>
          <button
            onClick={() => {
              setShowScrollOptions(!showScrollOptions);
            }}
            className={`rounded-sm text-gray-600 ${showScrollOptions ? 'bg-blue-500 text-white' : 'bg-gray-100'} p-1 pl-9 pr-9 font-xs text-sm`}
          >
            IOS
          </button>
        </div>
      </div>

      {/* Second Scrolling Section */}
      {showScrollOptions && (
        <div className="p-4 w-[60%] mt-8 mx-auto ml-14">
          <div className="w-full border rounded shadow">
            <div className="p-2 border-b flex justify-center items-center">
              <p className="text-gray-600 font-sans text-sm font-xs p-4">Selection Of version is optional</p>
            </div>
            <div className="max-h-48 overflow-y-auto">
              {options.map((option, index) => (
                <div
                  key={index}
                  className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-600 font-sans text-sm"
                  onClick={() => handleScrollCheckboxChange(option)}
                >
                  <input
                    type="checkbox"
                    checked={selectedScrollOption === option}
                    readOnly
                    className="mr-2 rounded"
                  />
                  <span>{option}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* OS Type Section */}
      <div className="flex flex-col md:flex-row md:items-start md:space-x-4 mt-10 ml-[7%] w-full">
        <label className="text-gray-700 font-sans text-sm font-xs md:w-1/4">OS</label>
        <div className="flex flex-wrap space-x-3 w-full">
          {['All', 'Mobile', 'Tablet', 'Desktop'].map((osType) => (
            <div key={osType} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={osType}
                name="campaignType"
                value={osType}
                checked={selectedOSOption === osType}
                onChange={() => handleOSCheckboxChange(osType)}
                className="mr-3"
              />
              <label htmlFor={osType} className="text-gray-700 font-sans text-sm font-xs">
                {osType}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MachineTarget;

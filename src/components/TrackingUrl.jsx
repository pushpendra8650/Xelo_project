import React, { useState } from 'react';

const TrackingUrl = () => {
  const [selectedCheckbox, setSelectedCheckbox] = useState('');

  const handleCheckboxChangeTargetingurl = (event) => {
    setSelectedCheckbox(event.target.value);
  };
  
  // submit button functionality
  const [selectedButton, setSelectedButton] = useState(null); // Track which button is selected
  
  const handleButtonClicksubmit = (buttonName) => {
    setSelectedButton((prev) => (prev === buttonName ? null : buttonName));
  }

  return (
    <div className="w-full mx-auto bg-white p-12 rounded-lg border border-gray-100 shadow mt-3 ">
      <h1 className="text-gray-700 font-semibold font-sans text-sm mb-6">Tracking URL</h1>

      {/* Checkbox */}
      <div>
        <div className="flex flex-col md:flex-row md:items-center md:space-x-6 ml-4">
          <label className="md:w-1/4 text-gray-700 font-xs font-sans text-sm">Attributes Tools</label>
          <div className="flex items-center md:w-3/4 space-x-4 mt-2 md:mt-0">
            {['Appsflyer', 'Adjust', 'Branch', 'Singular', 'Appmetrica', 'MyTracker', 'Others'].map((tool) => (
              <div className="flex items-center" key={tool}>
                <input
                  type="checkbox"
                  id={tool.toLowerCase()}
                  name="campaignType"
                  value={tool}
                  checked={selectedCheckbox === tool}
                  onChange={handleCheckboxChangeTargetingurl}
                  className="mr-2 h-3 w-4"
                />
                <label htmlFor={tool.toLowerCase()} className="text-gray-700 font-xs font-sans text-sm">
                  {tool}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Input Fields */}
      <div className="mt-9">
        <div className="flex flex-col items-center space-y-4 w-full ml-4">
          <div className="flex items-center space-x-5 text-gray-700 w-full">
            <span className="text-gray-700 font-xs font-sans text-sm md:w-1/4">CTA</span>
            <input
              type="text"
              placeholder="Enter CTA...."
              className="w-[60%] p-1 pl-4 border border-gray-300 rounded text-gray-600 text-sm font-xs placeholder-gray-400 placeholder:text-xs"
            />
          </div>
          <div className="flex items-center space-x-5 text-gray-700 w-full">
            <span className="text-gray-700 font-xs font-sans text-sm md:w-1/4">VTA</span>
            <input
              type="text"
              placeholder="Enter VTA...."
              className="w-[60%] p-1 pl-4 border border-gray-300 rounded text-gray-600 text-sm font-xs placeholder-gray-400 placeholder:text-xs"
            />
          </div>
          <div className="flex items-center space-x-5 text-gray-700 w-full">
            <span className="text-gray-700 font-xs font-sans text-sm md:w-1/4">Deeplink</span>
            <input
              type="text"
              placeholder="Enter Deeplink...."
              className="w-[60%] p-1 pl-4 border border-gray-300 rounded text-gray-600 text-sm font-xs placeholder-gray-400 placeholder:text-xs"
            />
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end space-x-4 mt-32">
      <button
        onClick={() => handleButtonClicksubmit('cancel')}
        className={`px-6 py-1 rounded-lg transition font-xs font-sans text-sm border border-gray-300 ${selectedButton === 'cancel' ? 'bg-blue-500 text-white' : 'bg-white text-gray-600'}`}
      >
        Cancel
      </button>
      <button
        onClick={() => handleButtonClicksubmit('complete')}
        className={`px-6 py-1 rounded-lg transition font-xs font-sans text-sm border border-gray-300 ${selectedButton === 'complete' ? 'bg-blue-500 text-white' : 'bg-white text-gray-600'}`}
      >
        Complete & Finished
      </button>
    </div>
    </div>
  );
};

export default TrackingUrl;

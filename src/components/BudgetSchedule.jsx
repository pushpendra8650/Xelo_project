import React, { useState } from 'react';

function BudgetSchedule() {
  // State to manage visibility of the input fields
  const [isDailyBudgetLimited, setIsDailyBudgetLimited] = useState(false);
  const [isTotalBudgetLimited, setIsTotalBudgetLimited] = useState(false);
  
  // Toggle functions
  const toggleDailyBudgetVisibility = () => setIsDailyBudgetLimited(!isDailyBudgetLimited);
  const toggleTotalBudgetVisibility = () => setIsTotalBudgetLimited(!isTotalBudgetLimited);

  return (
    <div className="w-full mx-auto mt-4 bg-white p-8 rounded-lg border border-gray-100 shadow">
      <h1 className="mb-6 font-semibold font-sans text-sm text-gray-700 ml-6">Budget & Schedule</h1>
      <div className="space-y-7 ml-20">
        
        <div className="flex items-center">
          <label className="text-gray-700 font-sans text-sm">Time Zone</label>
          <select className="ml-[19%] mt-2 py-2 border border-gray-300 rounded text-gray-600 bg-blue-500 text-white px-4 text-xs">
            <option className="text-white w-[80%] font-sans text-xs bg-white">Midway</option>
            {/* Add more options as needed */}
          </select>
        </div>

        <div className="flex items-center w-full">
          <label className="text-gray-700 font-sans text-sm">Time</label>
          <div className="flex space-x-3 w-2/3 ml-[23%]">
            <input type="date" className="border border-gray-300 rounded text-gray-600 font-sans text-sm" />
            <span className="flex items-center text-gray-600 font-sans text-sm">---</span>
            <input type="date" className="border border-gray-300 rounded text-gray-600 font-sans text-sm text-gray-600" />
          </div>
        </div>

        <div className="flex items-center">
          <label className="text-gray-700 font-sans text-sm w-[18%]">Daily Budget</label>
          <div className="flex space-x-4 w-full ml-32">
          <button
      onClick={() => {
        // Set to true when clicking "Unlimited"
        setIsDailyBudgetLimited(false);
      }}
      className={`px-3 py-2 border border-gray-300 rounded font-sans text-sm ${!isDailyBudgetLimited ? 'bg-blue-500 text-white' : 'bg-white text-gray-600'}`}
    >
      Unlimited
    </button>
    <button
      onClick={toggleDailyBudgetVisibility}
      className={`px-3 py-2 border border-gray-300 rounded font-sans text-sm ${isDailyBudgetLimited ? 'bg-blue-500 text-white' : 'bg-white text-gray-600'}`}
    >
      Limited
    </button>
          </div>
        </div>

        {isDailyBudgetLimited && (
          <div className="items-center">
            <input
              type="number"
              placeholder="Enter Amount In (USD)..."
              className="w-[30%] p-1 border border-gray-300 rounded text-gray-500 ml-[26%] font-sans text-sm placeholder-gray-400 placeholder:text-xs placeholder:pl-2"
            />
          </div>
        )}

        <div className="flex items-center">
          <label className="text-gray-700 font-sans text-sm w-[18%]">Total Budget</label>
          <div className="flex space-x-4 w-full ml-32">
          <button
      onClick={() => {
        // Set to true when clicking "Unlimited"
        setIsTotalBudgetLimited(false);
      }}
      className={`px-3 py-2 border border-gray-300 rounded font-sans text-sm ${!isTotalBudgetLimited ? 'bg-blue-500 text-white' : 'bg-white text-gray-600'}`}
    >
      Unlimited
    </button>
    <button
      onClick={toggleTotalBudgetVisibility}
      className={`px-3 py-2 border border-gray-300 rounded font-sans text-sm ${isTotalBudgetLimited ? 'bg-blue-500 text-white' : 'bg-white text-gray-600'}`}
    >
      Limited
    </button>
          </div>
        </div>

        {isTotalBudgetLimited && (
          <div className="items-center">
            <input
              type="number"
              placeholder="Enter Amount In (USD)..."
              className="w-[30%] p-1 border border-gray-300 rounded text-gray-600 ml-[26%] font-sans text-sm placeholder-gray-400 placeholder:text-xs placeholder:pl-2"
            />
          </div>
        )}
        
      </div>
    </div>
  );
}

export default BudgetSchedule;

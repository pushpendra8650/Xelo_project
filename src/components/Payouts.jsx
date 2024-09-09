import React from 'react';

function Payout() {
  return (
    <div className="flex flex-col w-full mt-4 bg-white p-8 rounded-lg border border-gray-100 shadow mb-4">
      
      <h1 className="mb-6 text-gray-600 font-semibold text-sm ml-6">Pay Out</h1>
      
      <div className="flex flex-col space-y-4 ml-8 mr-6">
        <div className="flex items-center text-gray-700">
          <span className="text-gray-600 font-sans text-sm">Bid</span>
          <input 
            type="number" 
            placeholder="00.00" 
            className="w-1/2 p-1 border border-gray-300 rounded text-gray-700 ml-5"
          />
          <div className="text-gray-600 font-sans text-sm ml-3">USD</div>
        </div>

        <div className="flex  items-center text-gray-700">
          <span className="text-gray-600 font-sans text-sm ">CAD</span>
          <input 
            type="number" 
            placeholder="00.00" 
            className="w-1/2 p-1 border border-gray-300 rounded text-gray-700 ml-3"
          />
          <div className="text-gray-600 font-sans text-sm ml-3">USD</div>
        </div>
      </div>
      
    </div>
  );
}

export default Payout;

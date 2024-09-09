import React from 'react'
import ThamnailForm from './ThamnailForm';
import TrackingUrl from './TrackingUrl';

const CreativeForm = () => {
  return (
    <div>
    <div className="w-full mx-auto  bg-white p-12 rounded-lg border border-gray-100 shadow">
      
      <h1 className="text-lg  mb-6 text-gray-700 font-semibold font-sans  text-sm ">Creative</h1>
      <div className="flex flex-col space-y-4 ml-8">
  <div className="flex items-center  text-gray-700 w-[80%]">
    <span className="w-1/3 text-gray-700 font-xs font-sans text-sm">Campaign Name</span>
    <input
      type="text"
      placeholder="Enter campaign name..."
      className="w-1/2 p-1 border border-gray-300 rounded text-gray-600 placeholder-gray-400 placeholder:text-xs placeholder:pl-3 placeholder:pt-8"
    />
  </div>

  <div className="flex items-center  text-gray-700 w-[80%]">
    <span className="w-1/3 text-gray-700 font-xs font-sans text-sm">Targeting Name</span>
    <input
      type="text"
      placeholder="Enter targeting name..."
      className="w-1/2 p-1 border border-gray-300 rounded text-gray-600 placeholder-gray-400 placeholder:text-xs placeholder:pl-3"
    />
  </div>

  <div className="flex items-center  text-gray-700 w-[80%]">
    <span className="w-1/3 text-gray-700 font-xs font-sans text-sm">Creative Name</span>
    <input
      type="text"
      placeholder="Enter creative name..."
      className="w-1/2 p-1 border border-gray-300 rounded text-gray-600 placeholder-gray-400 placeholder:text-xs placeholder:pl-3"
    />
  </div>
</div>

      
      
    </div>
      <ThamnailForm/>
      <TrackingUrl/>
      </div>


  );
}

export default CreativeForm

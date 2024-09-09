import React from 'react';
import PromotionObject from './PromotionObject';
import Placement from './Placement';
import Dropdown from './Dropdown';
import MachineTarget from './MachineTarget';
import BudgetSchedule from './BudgetSchedule';
import Payout from './Payouts';

// import CreativeForm from './CreativeForm';



const TargetingForm = () => {
  return (
   <div className='w-full'>
     
     <div className="w-full mx-auto  bg-white p-12 rounded-lg  border border-gray-100 shadow mr-4 mt-2  ">
     
     <h1 className="  mb-6 text-gray-700 font-semibold font-sans  text-sm ">Targeting</h1>
      <div className="flex  md:flex-row md:items-center md:space-x-15  ml-10 w-full">
        <label className="text-gray-700 md:w-1/4 font-xs font-sans  text-sm">Targeting Name*</label>
        <div className="flex items-center mb-2 md:mb-0 w-full ml-15">
          <input
            type="text"
            name="campaignName"
            placeholder="Enter Campaign Name..."
            className="mt-2 md:mt-0 w-full md:w-[40%] p-2 border border-gray-300 rounded  placeholder-gray-400 placeholder:text-xs ml-10 text-gray-600 "
          />
        </div>
      </div>
    </div>
      <div><PromotionObject/></div>
      <div><Placement/></div>
      <div><Dropdown/></div>
      <div><MachineTarget/></div>
      <div><BudgetSchedule/></div>
      <div><Payout/></div>
      {/* <div className='mb-4'><CreativeForm /></div> */}
   </div>


  );
}

export default TargetingForm;


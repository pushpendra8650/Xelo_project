import React from 'react';
import Navbar from './Navbar';
import CampaignForm from '../components/CampaignForm';

const Campaign = () => {
  return (
    <div className='flex h-full bg-white '>
      {/* Sticky Navbar */}
      <div className='w-max h-screen bg-white sticky top-0 border-r border-gray-200'>
        <Navbar />
      </div>
      
      {/* Scrollable Campaign Form */}
      <div className='flex-1 overflow-y-auto ml-[1%] mr-4 mt-2 overflow-x-hidden'>
        <CampaignForm />
      </div>
    </div>
  );
};

export default Campaign;


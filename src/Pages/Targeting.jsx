import React from 'react';
import Navbar from './Navbar';
import TargetingForm from '../components/TargetingForm';

const Targeting = () => {
  return (
    <div className="overflow-x-hidden  h-screen flex">
      <div className="w-max bg-white h-screen sticky top-0"><Navbar /></div>
      <div className="flex-1 ml-4 mr-4 overflow-x-hidden h-max">
        <TargetingForm />
      </div>
    </div>
  );
};

export default Targeting;

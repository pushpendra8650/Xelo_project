import React from 'react';
import Navbar from './Navbar';

const ProfilePage = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-max bg-white h-full sticky top-0 border-r border-gray-200">
        <Navbar />
      </div>
      
      {/* main content */}
      <div className="flex-grow bg-white shadow-lg rounded-lg p-6 ml-4 mr-4 overflow-y-auto overflow-x-hidden">
        <div className="flex justify-between h-max">
          <div className="text-2xl mb-6 text-customBlue font-xs">Passed</div>
          {/* 
          <a href={ClientPdf} download="ClientDetails.pdf" className="text-4xl">
            <BsDownload className='text-customBlue' />
          </a> 
          */}
        </div>

        <div>Account info-</div>
        
        <div className="grid grid-cols-2 gap-3 text-sm ml-4 mr-4">
          <div className="text-gray-700 text-sm font-xs font-sans">Account Type</div>
          <div className="text-gray-500 text-sm font-xs font-sans">Advertiser Agency:</div>

          <div className="text-gray-700 text-sm font-xs font-sans">Name</div>
          <div className="text-gray-500 text-sm font-xs font-sans">Joy</div>

          <div className="text-gray-700 text-sm font-xs font-sans">Company Name:</div>
          <div className="text-gray-500 text-sm font-xs font-sans">Pvt Ltd</div>

          <div className="text-gray-700 text-sm font-xs font-sans">Country/Region:</div>
          <div className="text-gray-500 text-sm font-xs font-sans">India</div>

          <div className="text-gray-700 text-sm font-xs font-sans">Address:</div>
          <div className="text-gray-500 text-sm font-xs font-sans">joy@gmail.com</div>

          <div className="text-gray-700 text-sm font-xs font-sans">Phone Number:</div>
          <div className="text-gray-500 text-sm font-xs font-sans">84373847234</div>

          <div className="text-gray-700 text-sm font-xs font-sans">Registration Address:</div>
          <div className="text-gray-500 text-sm font-xs font-sans">Lucknow</div>

          <div className="text-gray-700 text-sm font-xs font-sans">Xiaomi Entity</div>
          <div className="text-gray-500 text-sm font-xs font-sans">They are many Variation</div>

          <div className="text-gray-700 text-sm font-xs font-sans">Settlement Currency</div>
          <div className="text-gray-500 text-sm font-xs font-sans">INR</div>

          <div className="text-gray-700 text-sm font-xs font-sans"></div>
          <div className="text-gray-500 text-sm font-xs font-sans">
            <input type="checkbox" /> You've Agreed Terms And Conditions
          </div>
         
          <div className="text-gray-700 text-sm font-xs font-sans">Network Services</div>
          <div className="text-gray-700 text-sm font-xs font-sans">Industry:</div>

          <div className="text-gray-700 text-sm font-xs font-sans">Registration Certificate:</div>
          <div className="text-gray-700 text-sm font-xs font-sans">INC Certificate (pdf.1)</div>

          <div className="text-gray-700 text-sm font-xs font-sans"></div>
          <div className="mt-4 flex justify-center">
            <div className="w-24 h-24 bg-gray-200 border rounded-lg"></div>
          </div>

          <div className="text-gray-700 text-sm font-xs font-sans">GST Certificate:</div>
          <div className="text-gray-700 text-sm font-xs font-sans">GST Registration Certificate.Pdf</div>

          <div className="text-gray-700 text-sm font-xs font-sans">PAN Card</div>
          <div className="text-gray-700 text-sm font-xs font-sans">PAN Card.Pdf</div>

          <div className="text-gray-700 text-sm font-xs font-sans">License:</div>
          <div className="text-gray-700 text-sm font-xs font-sans">INC Certificate .Pdf</div>

          <div className="text-gray-700 text-sm font-xs font-sans"></div>
          <div className="mt-4 flex justify-center">
            <div className="w-24 h-24 bg-gray-200 border rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;

import React from 'react';
import { BsDownload } from "react-icons/bs";
import ClientPdf from '../img/ClientDetails.pdf';
import Navbar from './Navbar';
const CompanyBankDetails = () => {
  return (
    <div className='flex h-screen overflow-hidden'>
      <div className='w-max bg-white h-full sticky top-0 border-r border-gray-200'><Navbar/></div>
      
     
      <div className="  bg-white shadow-lg rounded-lg p-6 w-max ml-4 mr-4 overflow-y-auto overflow-x-hidden">
      <div className="flex justify-between h-max ">
  <div className="text-2xl mb-6 text-customBlue font-xs ml-10">
    Company & Bank details for Client
  </div>
  <a href={ClientPdf} download="ClientDetails.pdf" className="text-4xl">
            <BsDownload  className='text-customBlue mr-10' />
          </a>
</div>
        
        
        <div className="grid grid-cols-2 gap-3 text-sm ml-10 mr-10">
          <div className="text-gray-700 text-sm font-xs font-sans">Company Name</div>
          <div className='text-gray-500 text-sm font-xs font-sans'>Xeloop Media Pvt. Ltd.</div>

          <div className="text-gray-700 text-sm font-xs font-sans">Company Registered Address</div>
          <div className='text-gray-500 text-sm font-xs font-sans'>
          L-1905, IITL NIMBUS, The Express Park View - 2,
Alpha Greater Noida, Maicha Gautam Buddha Nagar,
Uttar Pradesh, 201310, India.
          </div>

          <div className="text-gray-700 text-sm font-xs font-sans">Company Corresponding Address</div>
          <div className='text-gray-500 text-sm font-xs font-sans'>
          2nd & 3rd Floor, H.N. 624V/KH.No.236, Vijayipur, Vibhuti Khand,
Gomti Nagar, Near Gate No 07 High Court, Opp. Experian Capital Building,
Lucknow, U.P. -226010, India
          </div>

          <div className="text-gray-700 text-sm font-xs font-sans">Company Phone Number</div>
          <div className='text-gray-500 text-sm font-xs font-sans'>+91 8840251363</div>

          <div className="text-gray-700 text-sm font-xs font-sans">Company Registration Number</div>
          <div className='text-gray-500 text-sm font-xs font-sans'>U73100UP2024PTC195371</div>

          <div className="text-gray-700 text-sm font-xs font-sans">Email Id</div>
          <div className='text-gray-500 text-sm font-xs font-sans'>Account@xeloop.com</div>

          <div className="text-gray-700 text-sm font-xs font-sans">GST No.</div>
          <div className='text-gray-500 text-sm font-xs font-sans'>09AAACX4815F1ZC</div>

          <div className="text-gray-700 text-sm font-xs font-sans">MSME No.</div>
          <div className='text-gray-500 text-sm font-xs font-sans'>UDYAM-UP-50-0128046</div>

          <div className="text-gray-700 text-sm font-xs font-sans">Bank Name</div>
          <div className='text-gray-500 text-sm font-xs font-sans'>Bank Of Baroda</div>

          <div className="text-gray-700 text-sm font-xs font-sans">Account Name</div>
          <div className='text-gray-500 text-sm font-xs font-sans'>XeLoop Media Private Limited</div>

          <div className="text-gray-700 text-sm font-xs font-sans">Account Number</div>
          <div className='text-gray-500 text-sm font-xs font-sans'>34300200000934</div>

          <div className="text-gray-700 text-sm font-xs font-sans">IFSC Code</div>
          <div className='text-gray-500 text-sm font-xs font-sans'>BARB0VIBHUT</div>

          <div className="text-gray-700 text-sm font-xs font-sans">SWIFT CODE</div>
          <div className='text-gray-500 text-sm font-xs font-sans'>BARBINBBHRB</div>

          <div className="text-gray-700 text-sm font-xs font-sans">Full Name Of The Signatory</div>
          <div className='text-gray-500 text-sm font-xs font-sans'>Shivani Srivastava</div>

          <div className="text-gray-700 text-sm font-xs font-sans">Signatory Position In The Company</div>
          <div className='text-gray-500 text-sm font-xs font-sans'>Director</div>

          <div className="text-gray-700 text-sm font-xs font-sans">Can You Accept EUR ?</div>
          <div className='text-gray-500 text-sm font-xs font-sans'>No ( Only USD/INR )</div>

          <div className="text-gray-700 text-sm font-xs font-sans">Payment Methos : Bank Transfer/Paypal/Both?</div>
          <div className='text-gray-500 text-sm font-xs font-sans'>Bank Transfer</div>

          <div className="text-gray-700 text-sm font-xs font-sans">Trade Register Extract or Certificate of Registration</div>
          <div className='text-gray-500 text-sm font-xs font-sans'>N.A</div>

         
        </div>

        {/* <div className="mt-6">
          <label className="block text-gray-600 text-sm font-xs mb-2">Upload Doc:</label>
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 border rounded text-gray-600 text-sm font-xs">Jpg</button>
            <button className="px-4 py-2 border rounded text-gray-600 text-sm font-xs">Png</button>
            <button className="px-4 py-2 border rounded text-gray-600 text-sm font-xs">Jpeg</button>
          </div>
        </div> */}

        {/* <div className="mt-4 flex justify-center">
          <div className="w-24 h-24 bg-gray-200 border rounded-lg"></div>
        </div> */}
      </div>

      {/* <div className="mt-6 flex justify-between text-xs text-gray-600">
        <div className="flex space-x-4">
          <a href="#" className="hover:underline text-gray-600 text-sm font-xs">ABOUT</a>
          <a href="#" className="hover:underline text-gray-600 text-sm font-xs">Advertising</a>
          <a href="#" className="hover:underline text-gray-600 text-sm font-xs">Cookie Policy</a>
        </div>
        <div className="flex space-x-4">
          <span className='text-gray-600 text-sm font-xs'>CONTACT INFORMATION</span>
          <span className='text-gray-600 text-sm font-xs'>Joy123@Gmail.Com</span>
        </div>
      </div> */}
    </div>
      
    
    
  );
}

export default CompanyBankDetails;

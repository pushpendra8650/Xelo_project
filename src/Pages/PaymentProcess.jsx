import React, { useState } from 'react';
import { FaAngleRight } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import paymentlogo from '../img/Paymentlogo.jpg'; // Correct extension
import Navbar from './Navbar';

const PaymentProcess = () => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleButtonClick = () => {
    setIsButtonClicked(!isButtonClicked);
  };

  return (
    <div className='flex overflow-hidden h-screen'>
      <div className='w-max bg-white h-full sticky top-0 border-r border-gray-200'>
        <Navbar/>
      </div>
      <div className='w-full ml-4 mr-4 mt-2 mb-4 overflow-hidden'>
        <div className="w-full mx-auto bg-white p-4 rounded-lg border border-gray-200 shadow">
          <div className="flex w-full">
            <div className="flex text-gray-700 font-xs font-sans text-sm ml-20 items-center">
              <MdPayment className="mr-2" />
              Proceed Payment
            </div>
            <div className="flex ml-32">
              <div className="flex items-center text-gray-700 font-xs font-sans text-sm cursor-pointer">
                <FaAngleRight className="mr-2 font-light" />
                Customer details
              </div>
            </div>
            <div className="flex ml-5">
              <div className="flex items-center text-gray-700 font-sans font-light cursor-pointer">
                <p className='text-gray-400 font-xs font-sans text-sm'>(We'll never share your details with anyone else.)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full mx-auto bg-white p-4 rounded-lg border border-gray-200 shadow mt-2">
          <div className="flex flex-col md:flex-row w-full h-full">
            <div className="md:w-1/2">
              <img 
                src={paymentlogo} 
                alt="Payment Logo" 
                className="w-[75%] h-auto object-cover" 
              />
            </div>
            <div className="md:w-1/2 p-4">
              <form className="grid gap-8">
                <div className="flex items-center">
                  <label className="text-gray-700 w-24 font-xs font-sans text-sm">Name</label>
                  <input type="text" className="flex-1 p-2 border border-gray-300 rounded-lg w-full text-gray-600" />
                </div>
                <div className="flex items-center">
                  <label className="text-gray-700 w-24 font-xs font-sans text-sm">Contact</label>
                  <input type="text" className="flex-1 p-2 border border-gray-300 rounded-lg w-full text-gray-600" />
                </div>
                <div className="flex items-center">
                  <label className="text-gray-700 w-24 font-xs font-sans text-sm">Email</label>
                  <input type="text" className="flex-1 p-2 border border-gray-300 rounded-lg w-full text-gray-600" />
                </div>
                <div className="flex items-center">
                  <label className="text-gray-700 w-24 font-xs font-sans text-sm">Amount</label>
                  <input type="text" className="flex-1 p-2 border border-gray-300 rounded-lg w-full text-gray-600" />
                </div>
                <div className="flex items-center justify-between">
                  <label className="text-gray-700 w-24 font-xs font-sans text-sm">Currency</label>
                  <div className="flex-1 border border-gray-300 rounded-lg">
                    <select className="w-full p-2 rounded-lg text-gray-600">
                      <option className='font-xs font-sans text-sm text-gray-600'>USD</option>
                      <option className='font-xs font-sans text-sm'>INR</option>
                    </select>
                  </div>
                  <button 
                    className={`${isButtonClicked ? 'bg-blue-500 text-white' : 'bg-white text-gray-600'} p-2 rounded-lg ml-4 font-xs font-sans text-sm border border-gray-300`}
                    onClick={handleButtonClick}
                    type="button"
                  >
                    Proceed To Pay
                  </button>
                </div>
                <div className="flex items-center ml-[23%]">
                  <input type="checkbox" className="mr-2 border border-gray-300 rounded-lg" />
                  <label className="text-gray-700 font-xs font-sans text-sm">Agree with the condition</label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentProcess;

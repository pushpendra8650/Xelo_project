import React, { useState } from 'react';
import { CgFolderRemove, CgCreditCard } from "react-icons/cg";
import { FaBook } from "react-icons/fa";
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const BudgetControl = () => {
  const [selectedFormat, setSelectedFormat] = useState(''); // State to track the selected format
  const [selectedFile, setSelectedFile] = useState(null); // State to track the selected file
  const [url, setUrl] = useState(''); // State to track the URL input
  const [errorMessage, setErrorMessage] = useState(''); // State to track error messages

  const handleImageFormatClick = () => {
    setSelectedFormat((prevFormat) => (prevFormat === 'image' ? '' : 'image'));
    setSelectedFile(null); // Reset file selection when switching formats
    setUrl(''); // Clear URL input when switching formats
    setErrorMessage(''); // Clear any previous error messages
  };

  const handleURLFormatClick = () => {
    setSelectedFormat((prevFormat) => (prevFormat === 'url' ? '' : 'url'));
    setSelectedFile(null); // Reset file selection when switching formats
    setUrl(''); // Clear URL input when switching formats
    setErrorMessage(''); // Clear any previous error messages
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setErrorMessage(''); // Clear any previous error messages
  };

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
    setErrorMessage(''); // Clear any previous error messages
  };

  const handleSubmit = () => {
    if (selectedFormat === 'image' && !selectedFile) {
      setErrorMessage('Please choose a file before submitting.');
    } else if (selectedFormat === 'url' && !url) {
      setErrorMessage('Please enter a URL before submitting.');
    } else {
      // Store data in the console
      if (selectedFormat === 'image' && selectedFile) {
        console.log('Selected File:', selectedFile.name);
      }
      if (selectedFormat === 'url' && url) {
        console.log('Entered URL:', url);
      }

      // Clear the form after submission
      setSelectedFile(null);
      setUrl('');
      setSelectedFormat('');
      setErrorMessage('');
    }
  };

  // submit button functionality
  const [isClicked, setIsClicked] = useState(false);

  const handleSubmitbutton = () => {
    setIsClicked(prevState => !prevState); // Toggle the clicked state
  };
  

  return (
    <div className='flex flex-col overflow-hidden'> {/* Ensure no overflow */}
      <div className='flex bg-white'>
        <div className='w-max'><Navbar /></div>
        <div className='w-full ml-4 mr-4 mt-4'>
          <div className="w-full mx-auto bg-white p-4 rounded-lg border border-gray-100 shadow">
            <div className='flex w-full justify-between'>
              <div className='text-gray-700 font-semibold font-sans text-sm'>Budget Control</div>
              <div className='flex justify-between gap-7'>
                <div className='flex items-center text-gray-700 font-xs font-sans text-sm'>
                  <CgFolderRemove className='mr-2' />
                 <Link to='/CompanyDetails'>Company & Bank details</Link>
                </div>
                <div className='flex items-center text-gray-700 font-xs font-sans text-sm'>
                  <CgCreditCard className='mr-2' />
                  <Link to='/Payment'>Proceed Payment</Link> 
                </div>
                <div className='flex items-center text-gray-700 font-xs font-sans text-sm'>
                  <FaBook className='mr-2' />
                  <Link to='/TransactionHistory'>Transaction History</Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Account Information section */}
          <div>
            <div className="w-full mx-auto bg-white p-4 mt-4 rounded-lg border border-gray-100 shadow">
              <h1 className='text-gray-700 font-xs font-sans font-semibold text-sm mt-2 mb-7'>Account Information</h1>
              <div className='flex w-full justify-between gap-3'>
                <div className='text-gray-700 h-[120px] w-[140px] shadow rounded-lg flex flex-col items-center justify-center gap-2'>
                  <div className="text-gray-700 font-xs font-sans  text-sm">Cost Today</div>
                  <div className='w-[70%] px-2 py-1  rounded-md text-center underline text-blue-800 text-gray-600 font-xs font-sans  text-sm'>
                    00.0 USD
                  </div>
                </div>
                <div className='text-gray-700 h-[120px] w-[140px] shadow rounded-lg flex flex-col items-center justify-center gap-2'>
                  <div className="text-gray-700 font-xs font-sans  text-sm">Cost yesterday</div>
                  <div className='w-[70%] px-2 py-1  rounded-md text-center underline text-blue-800 text-gray-600 font-xs font-sans  text-sm'>
                    00.0 USD
                  </div>
                </div>
                <div className='text-gray-700 h-[120px] w-[140px] shadow rounded-lg flex flex-col items-center justify-center gap-2'>
                  <div className="text-gray-700 font-xs font-sans  text-sm">This month cost</div>
                  <div className='w-[70%] px-2 py-1  rounded-md text-center underline text-blue-800 text-gray-600 font-xs font-sans  text-sm'>
                    00.0 USD
                  </div>
                </div>
                <div className='text-gray-700 h-[120px] w-[140px] shadow rounded-lg flex flex-col items-center justify-center gap-2'>
                  <div className="text-gray-700 font-xs font-sans  text-sm">Previous cost</div>
                  <div className='w-[70%] px-2 py-1  rounded-md text-center underline text-blue-800 text-gray-600 font-xs font-sans  text-sm'>
                    00.0 USD
                  </div>
                </div>
                <div className='text-gray-700 h-[120px] w-[140px] shadow rounded-lg flex flex-col items-center justify-center gap-2'>
                  <div className="text-gray-700 font-xs font-sans  text-sm">Life time cost</div>
                  <div className='w-[70%] px-2 py-1  rounded-md text-center underline text-blue-800 text-gray-600 font-xs font-sans  text-sm'>
                    00.0 USD
                  </div>
                </div>
                <div className='text-gray-700 h-[120px] w-[140px] shadow rounded-lg flex flex-col items-center justify-center gap-2'>
                  <div className="text-gray-700 font-xs font-sans  text-sm">Account balance</div>
                  <div className='w-[70%] px-2 py-1  rounded-md text-center underline text-blue-800 text-gray-600 font-xs font-sans  text-sm'>
                    00.0 USD
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Upload Transaction Details section */}
          <div>
            <div className="w-full mx-auto bg-white p-4 mt-4 rounded-lg border border-gray-100 shadow">
              <div className='flex flex-col w-full justify-between'>
                <span className="text-gray-700 font-xs font-sans font-semibold text-sm">Upload Transaction Details</span>
                <div className='flex items-center mb-4 ml-80'>
      <div className='flex gap-2'>
        <button
          className={`${
            selectedFormat === 'image' ? 'bg-blue-500 text-white' : 'bg-white text-gray-600'
          } rounded border border-gray-200 px-5 py-1 font-sans text-sm`}
          onClick={handleImageFormatClick}
        >
          Image Format
        </button>
        <button
          className={`${
            selectedFormat === 'url' ? 'bg-blue-500 text-white' : 'bg-white text-gray-600'
          } rounded border border-gray-200 px-6 py-1 font-sans text-sm`}
          onClick={handleURLFormatClick}
        >
          URL Format
        </button>
      </div>
    </div>
                
                {selectedFormat === 'image' && (
                  <>
                    <div className='flex items-center ml-80 mt-4'>
                      <label className='bg-white rounded text-gray-600 border  font-sans text-sm border border-gray-200 px-7 py-1 cursor-pointer'>
                        Choose File
                        <input 
                          type="file" 
                          onChange={handleFileChange} 
                          className="hidden" 
                        />
                      </label>
                      <div className='w-full max-w-[300px] px-6 py-1 rounded border border-gray-200 ml-1 text-gray-700 font-xs font-sans text-sm'>
                        {selectedFile ? selectedFile.name : 'No File Chosen...'}
                      </div>
                    </div>
                    {errorMessage && (
                      <p className='text-red-500 font-xs font-sans text-sm ml-80'>{errorMessage}</p>
                    )}
                    <p className='text-gray-400 font-xs font-sans text-sm ml-80'>image format - jpg/png/jpeg</p>
                  </>
                )}
                
                {selectedFormat === 'url' && (
                 <>
                 <div className='flex items-center ml-80 mt-4 w-full'>
                   <input
                     type="text"
                     value={url}
                     onChange={handleUrlChange}
                     placeholder='URL of Transaction Screenshot'
                     className='rounded text-gray-600 font-xs font-sans text-sm px-5 py-1 border border-gray-200 w-full max-w-[300px]' // Adjusted width to fit screen
                   />
                 </div>
               </>
               
                )}
                <div className='bg-white rounded text-gray-700 px-4 py-2 w-max ml-[900px] '>
      <button
        className={`${
          isClicked ? 'bg-blue-500 text-white' : 'bg-white text-gray-600'
        } font-xs font-sans text-sm px-4 py-2 rounded border border-gray-300 `}
        onClick={handleSubmitbutton}
      >
        Submit
      </button>
    </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetControl;




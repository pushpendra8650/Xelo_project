import React, { useState } from 'react';

const PromotionObject = () => {
  // State to hold the URL
  const [previewUrl, setPreviewUrl] = useState('');
 const [activeButton, setActiveButton] = useState('');


 // for button bg change promotion object section 
 const [isClickedGoogleApp, setIsClickedGoogleApp] = useState(false);
 const [isClickedAppStore, setIsClickedAppStore] = useState(false);

 const handleClickGoogleApp = () => {
   setIsClickedGoogleApp(true);
   setIsClickedAppStore(false); // Reset App Store button to initial state
 };

 const handleClickAppStore = () => {
   setIsClickedAppStore(true);
   setIsClickedGoogleApp(false); // Reset Google App button to initial state
 }
 // Function to handle button clicks
 const handleButtonClick = (url) => {
   setPreviewUrl(url);
   setActiveButton(url);
 };

 // Function to determine button styles based on the active state
 const getButtonStyles = (url) => {
   return activeButton === url
     ? 'w-full md:w-auto px-7 py-1 border rounded bg-blue-500 text-white font-sans text-xs'
     : 'w-full md:w-auto px-7 py-1 border rounded bg-white text-gray-600 font-sans text-xs';
 };
  return (
    <div className="w-full mx-auto mt-4 bg-white p-12 rounded-lg border border-gray-100 shadow">
    <h1 className="mb-6 text-gray-700 font-semibold font-sans text-sm">Promotion Object</h1>
    
    <div className="flex md:flex-row md:items-center md:space-x-6 ml-10">
      <label className="block text-gray-700 md:w-1/4 font-sans text-sm">Application*</label>
      <div className="flex space-x-4 mt-2 md:mt-0 md:w-2/3">
    <button
      type="button"
      onClick={() => {
         handleButtonClick('https://play.google.com/store/apps/details?id=com.example');
        handleClickGoogleApp();
      }}
      className={`w-full md:w-auto px-9 py-2 border rounded font-sans text-xs ${
        isClickedGoogleApp ? "bg-blue-500 text-white" : "bg-white text-gray-600"
      }`}
    >
      Google App
    </button>
    <button
      type="button"
      onClick={() => {
         handleButtonClick('https://apps.apple.com/us/app/example/id1234567890');
        handleClickAppStore();
      }}
      className={`w-full md:w-auto px-9 py-2 border rounded font-sans text-xs ${
        isClickedAppStore ? "bg-blue-500 text-white" : "bg-white text-gray-600"
      }`}
    >
      App Store
    </button>
  </div>
    </div>

    <div className="flex flex-col md:flex-row md:items-center md:space-x-6 mt-8 ml-10">
      <label className="block text-gray-700 md:w-1/4 font-sans text-sm">Preview Url*</label>
     <div className="w-full">
  <input
    type="text"
    name="previewUrl"
    value={previewUrl} // Bind the state to the input field
    placeholder="Enter Preview Url..."
    className="mt-2 md:mt-0 ml-[7%] md:w-[47%] py-1 border border-gray-300 rounded text-gray-400 placeholder-gray-400 placeholder:text-xs placeholder:pl-2 text-xs" // Reduced text size to text-xs
    onChange={(e) => setPreviewUrl(e.target.value)} // Allow user to change the input value
  />
</div>

    </div>

    <div className="flex md:flex-row md:items-center md:space-x-6 mt-8 ml-9">
      <label className="flex text-gray-700 md:w-1/4 font-sans text-sm ml-1">Currency*</label>
      <div className="w-full md:w-[35%] flex">
        <select className="mt-2 md:mt-0 w-full md:w-1/2 py-2 border border-gray-300 rounded text-gray-600 bg-blue-500 text-white px-1 text-xs"> // Reduced text size to text-xs
          <option className="text-gray-600 font-sans text-xs bg-white pr-1 py-2">USD</option>
          <option className="text-gray-600 font-sans text-xs bg-white pr-1 py-2">INR</option>
        </select>
      </div>
    </div>

    <div className="flex md:flex-row md:items-center md:space-x-6 mt-8 ml-9">
      <label className="text-gray-700 md:w-1/4 font-sans text-sm ml-1">Status*</label>
      <div className="w-full md:w-[35%] flex">
        <select className="mt-2 md:mt-0 w-full md:w-1/2 py-2 border border-gray-300 rounded text-gray-600 bg-blue-500 text-white px-1 pr-1 text-xs"> // Reduced text size to text-xs
          <option className="text-gray-600 font-sans text-xs bg-white pr-1 py-2">Pending</option>
          {/* <option className="text-gray-600 font-sans text-xs bg-white pr-1 py-2">Processing</option> */}
        </select>
      </div>
    </div>
  </div>
  );
}

export default PromotionObject;

import React, { useState, useEffect } from 'react';
import { GoX } from "react-icons/go";

const ThamnailForm = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    thumbnail: null,
    creative: null,
    visibility: true,
    adTitle: '',
    adDescription: '',
    kpi: '',
    eventScreenshot: null,
    mmpScreenshot: null,
    campaignDescription: ''
  });

  // State to manage visibility of file inputs
  const [showEventScreenshot, setShowEventScreenshot] = useState(false);
  const [showMmpScreenshot, setShowMmpScreenshot] = useState(false);
  const [showEventScreenshotURL, setShowEventScreenshotURL] = useState(false);
  const [showMmpScreenshotURL, setShowMmpScreenshotURL] = useState(false);

  // State to track which format button is active
  const [activeEventButton, setActiveEventButton] = useState(null);
  const [activeMmpButton, setActiveMmpButton] = useState(null);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  // Handle file input changes
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0]
    });
  };

  // Convert file to Base64
  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Convert files to Base64
    const eventScreenshotBase64 = formData.eventScreenshot ? await fileToBase64(formData.eventScreenshot) : null;
    const mmpScreenshotBase64 = formData.mmpScreenshot ? await fileToBase64(formData.mmpScreenshot) : null;

    const dataToStore = {
      ...formData,
      eventScreenshot: eventScreenshotBase64,
      mmpScreenshot: mmpScreenshotBase64,
    };

    console.log('Form Data:', dataToStore);
    localStorage.setItem('formData', JSON.stringify(dataToStore));

    resetForm(); // Reset the form after submission
  };

  // Reset form data and states
  const resetForm = () => {
    setFormData({
      thumbnail: null,
      creative: null,
      visibility: true,
      adTitle: '',
      adDescription: '',
      kpi: '',
      eventScreenshot: null,
      mmpScreenshot: null,
      campaignDescription: ''
    });
    setShowEventScreenshot(false);
    setShowMmpScreenshot(false);
    setShowEventScreenshotURL(false);
    setShowMmpScreenshotURL(false);
    setActiveEventButton(null);
    setActiveMmpButton(null);
  };

  // Event Screenshot Handlers
  const handleEventScreenshotClick = () => {
    setShowEventScreenshot(true);
    setShowEventScreenshotURL(false);
    setActiveEventButton('image');
  };

  const handleEventScreenshotURLClick = () => {
    setShowEventScreenshotURL(true);
    setShowEventScreenshot(false);
    setActiveEventButton('url');
  };

  // MMP Screenshot Handlers
  const handleMmpScreenshotClick = () => {
    setShowMmpScreenshot(true);
    setShowMmpScreenshotURL(false);
    setActiveMmpButton('image');
  };

  const handleMmpScreenshotURLClick = () => {
    setShowMmpScreenshotURL(true);
    setShowMmpScreenshot(false);
    setActiveMmpButton('url');
  };

  // Button style based on active state
  const getButtonStyles = (isActive) => {
    return isActive
      ? 'px-4 py-2 bg-blue-500 text-white rounded font-xs font-sans text-sm border border-gray-300'
      : 'px-4 py-2 bg-white text-gray-600 rounded font-xs font-sans text-sm border border-gray-300';
  };

  // Multiple add button functionality
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleFileChangeButton = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles((prevFiles) => [...prevFiles, ...files]);
    event.target.value = null; // Reset the input so it doesn't retain the file
  };

  const handleButtonClick = () => {
    document.getElementById('creative-upload').click();
    setIsButtonClicked((prevState) => !prevState); // Toggle button state
  };

  const handleFileDelete = (index) => {
    setSelectedFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  // Retrieve and decode Base64 files
  useEffect(() => {
    const storedData = localStorage.getItem('formData');
    if (storedData) {
      const data = JSON.parse(storedData);

      // Create File objects from Base64 strings
      const base64ToFile = async (base64, filename) => {
        const response = await fetch(base64);
        const blob = await response.blob();
        return new File([blob], filename, { type: blob.type });
      };

      const loadFiles = async () => {
        const eventScreenshot = data.eventScreenshot ? await base64ToFile(data.eventScreenshot, 'event-screenshot.png') : null;
        const mmpScreenshot = data.mmpScreenshot ? await base64ToFile(data.mmpScreenshot, 'mmp-screenshot.png') : null;

        setFormData({
          ...data,
          eventScreenshot,
          mmpScreenshot,
        });
      };

      loadFiles();
    }
  }, []);

  return (
    <div className="w-full mx-auto mt-3 p-8 bg-white rounded-lg border border-gray-100 shadow font-sans">
      <h1 className="mb-6 text-gray-700 font-semibold font-sans text-sm ml-4">Thumbnail</h1>
      <form onSubmit={handleSubmit} className="space-y-8 ml-[5%]">
        
        {/* Thumbnail Upload */}
        <div className="flex items-center mt-8">
          <label className="block mb-2 w-1/4 text-gray-700 font-xs font-sans text-sm">
            Thumbnail <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center w-1/2">
            <input
              type="file"
              name="thumbnail"
              onChange={handleFileChange}
              className="hidden text-gray-500"
              id="thumbnail-upload"
            />
            <div className="border border-gray-200">
              <label
                htmlFor="thumbnail-upload"
                className={`px-4 py-2 rounded-l cursor-pointer font-xs font-sans text-sm  border border-gray-300 ${
                  formData.thumbnail ? 'bg-blue-500 text-white' : 'bg-white text-gray-600'
                }`}
              >
                Choose files
              </label>
              <input
                type="file"
                id="thumbnail-upload"
                className="hidden"
                onChange={handleFileChange}
              />
            </div>
            <div className="border border-gray-300 w-2/3 px-4 p-1 rounded-r">
              <span className="text-gray-500 font-xs font-sans text-sm">
                {formData.thumbnail ? formData.thumbnail.name : 'No File Chosen...'}
              </span>
            </div>
          </div>
        </div>

        {/* Creative (Optional) */}
        <div className="flex mt-8 w-full">
      <label className="font-xs font-sans text-sm mb-2 text-gray-600">Creative (Optional)</label>
      <div className="flex items-center w-full mb-2 ml-[16%]">
        <input
          type="file"
          name="creative"
          onChange={handleFileChangeButton}
          className="hidden"
          id="creative-upload"
          multiple
        />
        <div className="flex items-center w-full">
          <label
            htmlFor="creative-upload"
            className="px-4 pt-2 pb-1 bg-white text-gray-600 rounded-l cursor-pointer font-xs text-sm border border-gray-300"
          >
            Choose files
          </label>
          <div className="border border-gray-300 w-1/2 px-4 py-1 rounded-r">
            <span className="text-gray-500 font-xs font-sans text-sm">
              {selectedFiles.length > 0
                ? selectedFiles[selectedFiles.length - 1].name
                : 'No Files Chosen...'}
            </span>
          </div>
          <button
            type="button"
            onClick={handleButtonClick}
            className={`px-3 py-1 rounded ml-2 border border-gray-300 ${
              isButtonClicked ? 'bg-blue-500 text-white' : 'bg-white text-gray-600'
            }`}
          >
            +
          </button>
        </div>
      </div>
    </div>
 <div className="  ml-[25%] flex">
 {selectedFiles.length > 0 && (
 <div className="flex space-x-3">
 {selectedFiles.map((file, index) => (
 <div key={index} className="flex items-center py-1 text-gray-400 text-sm font-xs ">
 <span>{file.name}</span>
 <button
 type="button"
 onClick={() => handleFileDelete(index)}
 className="text-gray-600 text-lg ml-2"
 >
 <GoX />
 </button>
 </div>
 ))}
 </div>
 )}
 </div>

        {/* Visibility */}
        <div className="flex items-center mt-8">
          <label className="block w-1/4 text-gray-700 font-xs font-sans text-sm">Visibility</label>
          <div className="flex items-center space-x-4 w-3/4">
            <input
              type="checkbox"
              name="visibility"
              checked={formData.visibility}
              onChange={handleInputChange}
              className="form-checkbox h-3 w-4 text-blue-600"
            />
            <span className="ml-2 text-gray-700 font-xs font-sans text-sm">Private</span>
          </div>
        </div>

        {/* Ad Title */}
        <div className="flex items-center mt-8">
          <label className="mb-2 w-1/4 text-gray-700 font-xs font-sans text-sm">Ad Title</label>
          <input
            type="text"
            name="adTitle"
            value={formData.adTitle}
            onChange={handleInputChange}
            placeholder="Ad Title..."
            className="w-1/2 p-1 border border-gray-300 rounded placeholder-gray-400 placeholder:text-xs text-gray-600 text-sm font-xs"
          />
        </div>

        {/* Ad Description */}
        <div className="flex items-center mt-8">
          <label className="block mb-2 w-1/4 text-gray-600 font-xs font-sans text-sm">Ad Description</label>
          <input
            type="text"
            name="adDescription"
            value={formData.adDescription}
            onChange={handleInputChange}
            placeholder="Ad Description..."
            className="w-1/2 p-1 border border-gray-300 rounded placeholder-gray-400 placeholder:text-xs text-sm font-xs text-gray-600"
          />
        </div>

        {/* KPI */}
        <div className="flex items-center mt-8">
          <label className="block mb-2 w-1/4 text-gray-600 font-xs font-sans text-sm">KPI</label>
          <textarea
            name="kpi"
            value={formData.kpi}
            onChange={handleInputChange}
            placeholder="Enter KPI..."
            className="w-1/2 p-1 border border-gray-200 h-40 rounded-br-lg text-gray-600 font-xs font-sans text-sm placeholder:text-sm placeholder:font-xs placeholder:text-500 "
          ></textarea>
        </div>

        {/* Event Screenshot */}
        <div className="flex items-center mt-8">
          <label className="block mb-2 w-1/4 text-gray-600 font-xs font-sans text-sm">Event Screenshot</label>
          <div className="flex flex-col space-y-2 w-3/4">
            <div className="flex space-x-4">
              <button
                type="button"
                className={getButtonStyles(activeEventButton === 'image')}
                onClick={handleEventScreenshotClick}
              >
                Image format
              </button>
              <button
                type="button"
                className={getButtonStyles(activeEventButton === 'url')}
                onClick={handleEventScreenshotURLClick}
              >
                URL format
              </button>
            </div>

            {/* Image Format Input */}
            {showEventScreenshot && (
              <div className="flex items-center">
                <input
                  type="file"
                  name="eventScreenshot"
                  onChange={handleFileChange}
                  className="hidden"
                  id="event-screenshot-upload"
                />
                <div className="border border-gray-200">
                  <label
                    htmlFor="event-screenshot-upload"
                    className="px-4 py-2 bg-white text-gray-600 rounded-l cursor-pointer font-xs font-sans text-sm border border-gray-300"
                  >
                    Choose files
                  </label>
                </div>
                <div className="border border-gray-300 w-2/3 px-4 p-1 rounded-r">
                  <span className="text-gray-500 font-xs font-sans text-sm">
                    {formData.eventScreenshot ? formData.eventScreenshot.name : 'No File Chosen...'}
                  </span>
                </div>
              </div>
            )}

            {/* URL Format Input */}
            {showEventScreenshotURL && (
              <input
                type="text"
                name="eventScreenshotURL"
                value={formData.eventScreenshotURL}
                onChange={handleInputChange}
                placeholder="Enter URL"
                className="w-1/2 p-1 border border-gray-300 rounded placeholder-gray-400 placeholder:text-xs"
              />
            )}
          </div>
        </div>

        {/* MMP Screenshot */}
        <div className="flex items-center mt-8">
          <label className="block mb-2 w-1/4 text-gray-600 font-xs font-sans text-sm">MMP Screenshot</label>
          <div className="flex flex-col space-y-2 w-3/4">
            <div className="flex space-x-4">
              <button
                type="button"
                className={getButtonStyles(activeMmpButton === 'image')}
                onClick={handleMmpScreenshotClick}
              >
                Image format
              </button>
              <button
                type="button"
                className={getButtonStyles(activeMmpButton === 'url')}
                onClick={handleMmpScreenshotURLClick}
              >
                URL format
              </button>
            </div>

            {/* Image Format Input */}
            {showMmpScreenshot && (
              <div className="flex items-center">
                <input
                  type="file"
                  name="mmpScreenshot"
                  onChange={handleFileChange}
                  className="hidden"
                  id="mmp-screenshot-upload"
                />
                <div className="border border-gray-200">
                  <label
                    htmlFor="mmp-screenshot-upload"
                    className="px-4 py-2 bg-white text-gray-600 rounded-l cursor-pointer font-xs font-sans text-sm border border-gray-300"
                  >
                    Choose files
                  </label>
                </div>
                <div className="border border-gray-300 w-2/3 px-4 p-1 rounded-r">
                  <span className="text-gray-500 font-xs font-sans text-sm">
                    {formData.mmpScreenshot ? formData.mmpScreenshot.name : 'No File Chosen...'}
                  </span>
                </div>
              </div>
            )}

            {/* URL Format Input */}
            {showMmpScreenshotURL && (
              <input
                type="text"
                name="mmpScreenshotURL"
                value={formData.mmpScreenshotURL}
                onChange={handleInputChange}
                placeholder="Enter URL"
                className="w-1/2 p-1 border border-gray-300 rounded placeholder-gray-400 placeholder:text-xs"
              />
            )}
          </div>
        </div>

        {/* Campaign Description */}
        <div className="flex items-center mt-8">
          <label className="block mb-2 w-1/4 text-gray-600 font-xs font-sans text-sm">Campaign Description</label>
          <textarea
            name="campaignDescription"
            value={formData.campaignDescription}
            onChange={handleInputChange}
            placeholder="Campaign Description..."
            className="w-1/2 p-1 border border-gray-200 h-40 rounded-br-lg text-gray-600 font-xs font-sans text-sm"
          ></textarea>
        </div>

        <div className="flex justify-end mt-4">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg font-xs font-sans text-sm"
          >
            Save & Next
          </button>
        </div>
      </form>
    </div>
  );
}

export default ThamnailForm;

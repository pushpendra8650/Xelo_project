import React, { useState, useEffect } from 'react';
import { HiMagnifyingGlass } from "react-icons/hi2";

const countriesFirstSection = [
  'United States', 'Canada', 'United Kingdom', 'Australia', 'Germany', 'France', 
  'Italy', 'Spain', 'Brazil', 'Mexico'
];

const countriesSecondSection = [
  'China', 'India', 'Japan', 'South Korea', 'Singapore', 'Indonesia', 
  'Malaysia', 'Philippines', 'Thailand', 'Vietnam'
];

const interestTags = [
  { id: 'interest1', name: 'Finance' },
  { id: 'interest2', name: 'Food & Drink Shopping ' },
  { id: 'interest3', name: 'Health & Fitness' },
  { id: 'interest4', name: 'Business' },
  { id: 'interest4', name: 'Social media' },
  { id: 'interest4', name: 'Lifestyle' },
  { id: 'interest4', name: 'Sports' },
  // Add more interest tags as needed
];

const Dropdown = () => {
  const [selectedOptionFirstSection, setSelectedOptionFirstSection] = useState([]);
  const [selectedOptionSecondSection, setSelectedOptionSecondSection] = useState([]);
  const [showSecondSection, setShowSecondSection] = useState(false);
  const [showInterestCheckboxes, setShowInterestCheckboxes] = useState(false);
  const [showLanguageCheckboxes, setShowLanguageCheckboxes] = useState(false);

  const [isInterestAllActive, setIsInterestAllActiveIntrest] = useState(false);
  const [isLanguageAllActive, setIsLanguageAllActive] = useState(false);
  const [isLimitedActive, setIsLimitedActive] = useState(false);
  const [isLimitedActiveIntrest, setIsLimitedActiveIntrest] = useState(false);

  const [searchTermFirstSection, setSearchTermFirstSection] = useState('');
  const [searchTermSecondSection, setSearchTermSecondSection] = useState('');

  const toggleOption = (option, section) => {
    if (section === 'first') {
      setSelectedOptionFirstSection(prevSelectedOption =>
        prevSelectedOption.includes(option)
          ? prevSelectedOption.filter(item => item !== option)
          : [...prevSelectedOption, option]
      );
    } else if (section === 'second') {
      setSelectedOptionSecondSection(prevSelectedOption =>
        prevSelectedOption.includes(option)
          ? prevSelectedOption.filter(item => item !== option)
          : [...prevSelectedOption, option]
      );
    } else if (section === 'interest') {
      setSelectedOptionFirstSection(prevSelectedOption =>
        prevSelectedOption.includes(option)
          ? prevSelectedOption.filter(item => item !== option)
          : [...prevSelectedOption, option]
      );
    }
  };

  const handleInterestAllClick = () => {
    setShowInterestCheckboxes(false);
    setIsInterestAllActiveIntrest(true);
    setIsLimitedActiveIntrest(false);
  };

  const handleLanguageAllClick = () => {
    setShowLanguageCheckboxes(false);
    setIsLanguageAllActive(true);
    setIsLimitedActive(false);
  };

  const handleLimitedClick = () => {
    setShowLanguageCheckboxes(true);
    setIsLanguageAllActive(false);
    setIsLimitedActive(true);
  };

  const handleLimitedClickInterest = () => {
    setShowInterestCheckboxes(true);
    setIsInterestAllActiveIntrest(false);
    setIsLimitedActiveIntrest(true);
  };

  const getButtonStyles = (isActive) => {
    return isActive
      ? 'font-sans text-sm font-xs bg-blue-500 text-white'
      : 'font-sans text-sm font-xs bg-white text-gray-600 border border-gray-300';
  };

  const filterCountries = (countries, searchTerm) => {
    return countries.filter(country =>
      country.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const [isLimitedActiveage, setIsLimitedActiveage] = useState(false);
  const [selectedAges, setSelectedAges] = useState({
    'age-group-1': false,
    'age-group-2': false,
    'age-group-3': false,
    'age-group-4': false,
  });

  const handleLimitedClickage = () => {
    setIsLimitedActiveage(true);
  };

  const handleAllClickage = () => {
    setIsLimitedActiveage(false);
  };

  const handleCheckboxChange = (e) => {
    const { id, checked } = e.target;
    setSelectedAges(prevState => ({ ...prevState, [id]: checked }));
  };

  const buttonStylesage = (isActiveage) =>
    isActiveage
      ? 'bg-blue-500 text-white'
      : 'bg-white text-gray-600 border border-gray-300';

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const selectedValuesAges = Object.entries(selectedAges)
      .filter(([_, isChecked]) => isChecked)
      .map(([id]) => id);
  
    const formData = {
      selectedOptionFirstSection,
      selectedOptionSecondSection,
      showInterestCheckboxes,
      showLanguageCheckboxes,
      selectedAges: selectedValuesAges,
      isInterestAllActive,
      isLanguageAllActive,
      isLimitedActive,
      isLimitedActiveIntrest
    };
  
    localStorage.setItem('formData', JSON.stringify(formData));
    console.log('Form Data:', formData);
  
    setSelectedAges({
      'age-group-1': false,
      'age-group-2': false,
      'age-group-3': false,
      'age-group-4': false,
    });
    setIsLimitedActiveage(false);
  };
  



  return (
    
    <div className="w-full mx-auto mt-4 bg-white p-12 rounded-lg border border-gray-100 shadow">
      <h1 className="mb-6 text-gray-700 font-semibold font-sans text-sm">Targeting in details</h1>
      <div className="flex flex-col space-y-6 ml-6">
        <div className="p-4 pt-5 w-[60%]">
          <div className="w-full border rounded shadow-lg border border-gray-300">
            <div className="p-7 border-b flex justify-between items-center">
              <p className="w-1/4 mr-4 text-gray-700 font-sans text-sm font-xs">Countries/Regions</p>
              <div className="relative w-3/4">
                <input
                  type="text"
                  placeholder="search..."
                  value={searchTermFirstSection}
                  onChange={(e) => setSearchTermFirstSection(e.target.value)}
                  className="w-full pl-10 p-2 border rounded-full focus:outline-none text-gray-700 font-sans text-sm font-xs"
                />
                <HiMagnifyingGlass className="absolute right-3 top-2.5 text-gray-400" />
              </div>
            </div>
            <div className="max-h-48 overflow-y-auto">
              {filterCountries(countriesFirstSection, searchTermFirstSection).map((country, index) => (
                <div
                  key={index}
                  className="flex items-center p-2 border-b hover:bg-gray-100 cursor-pointer text-gray-700 font-sans text-sm font-xs"
                  onClick={() => toggleOption(country, 'first')}
                >
                  <input
                    type="checkbox"
                    checked={selectedOptionFirstSection.includes(country)}
                    readOnly
                    className="mr-2 rounded font-sans text-sm font-xs"
                  />
                  <span>{country}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Language section */}
        <div className='w-[40%] flex items-center ml-[3%] mt-8'>
          <div className='text-gray-700 font-sans text-sm font-xs'>Language</div>
          <div className={`${getButtonStyles(isLanguageAllActive)} ml-[35%]  rounded`}>
            <button className='font-sans text-sm font-xs p-2 pl-9 pr-9' onClick={handleLanguageAllClick}>All</button>
          </div>
          <div className={`${getButtonStyles(isLimitedActive)}  ml-5 rounded`}>
            <button className='font-sans text-sm font-xs p-2 pl-8 pr-8' onClick={handleLimitedClick}>Limited</button>
          </div>
        </div>

        {/* Language checkboxes */}
        {showLanguageCheckboxes && (
          <div className="p-4 w-[60%] mt-8">
            <div className="w-full border border-gray-300 rounded shadow border border-gray-100">
              <div className="p-6 border-b flex justify-center items-center">
                <div className="relative w-3/4">
                  <input
                    type="text"
                    placeholder="search..."
                    value={searchTermSecondSection}
                    onChange={(e) => setSearchTermSecondSection(e.target.value)}
                    className="w-full pl-10 py-2 px-4 border rounded-full focus:outline-none text-gray-700"
                  />
                  <HiMagnifyingGlass className="absolute right-3 top-2.5 text-gray-400" />
                </div>
              </div>
              <div className="max-h-48 overflow-y-auto">
                {filterCountries(countriesSecondSection, searchTermSecondSection).map((country, index) => (
                  <div
                    key={index}
                    className="flex items-center px-4 py-2 border-b hover:bg-gray-100 cursor-pointer text-gray-700 font-sans text-sm font-xs"
                    onClick={() => toggleOption(country, 'second')}
                  >
                    <input
                      type="checkbox"
                      checked={selectedOptionSecondSection.includes(country)}
                      readOnly
                      className="mr-2 rounded"
                    />
                    <span>{country}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Interest Tag section */}
        <div className='w-full flex items-center ml-7 mt-8'>
          <div className='text-gray-700 font-sans text-sm font-xs'>Interest Tag</div>
          <div className={`${getButtonStyles(isInterestAllActive)} ml-[13%] rounded`}>
            <button className='font-sans text-sm font-xs p-2 pl-9 pr-9' onClick={handleInterestAllClick}>All</button>
          </div>
          <div className={`${getButtonStyles(isLimitedActiveIntrest)} ml-5 rounded`}>
            <button className='font-sans text-sm font-xs p-2 pl-8 pr-8' onClick={handleLimitedClickInterest}>Limited</button>
          </div>
        </div>

        {/* Interest Checkboxes */}
        {showInterestCheckboxes && (
          <div className="p-4 w-[60%] mt-8">
            <div className="w-full border rounded shadow border border-gray-300">
            
              <div className="max-h-48 overflow-y-auto">
                {interestTags.map(tag => (
                  <div
                    key={tag.id}
                    className="flex items-center px-4 py-2 border-b hover:bg-gray-100 cursor-pointer text-gray-700 font-sans text-sm font-xs"
                    onClick={() => toggleOption(tag.id, 'interest')}
                  >
                    <input
                      type="checkbox"
                      checked={selectedOptionFirstSection.includes(tag.id)}
                      readOnly
                      className="mr-2 rounded"
                    />
                    <span>{tag.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
        {/* Age group  */}
        <div>
      <form onSubmit={handleSubmit}>
        <div className='w-full flex items-center ml-7 mt-8'>
          <div className='text-gray-700 font-sans text-sm font-xs ml-5'>Age Group</div>
          <div className={`ml-[14%] rounded ${buttonStylesage(!isLimitedActiveage)}`}>
            <button
              type="button"
              className='font-sans text-sm font-xs p-2 pl-9 pr-9'
              onClick={handleAllClickage}
            >
              All
            </button>
          </div>
          <div className={`ml-5 rounded ${buttonStylesage(isLimitedActiveage)}`}>
            <button
              type="button"
              className='font-sans text-sm font-xs p-2 pl-8 pr-8'
              onClick={handleLimitedClickage}
            >
              Limited
            </button>
          </div>
        </div>

        {isLimitedActiveage && (
          <div className='flex space-x-4 ml-[20%] mt-3'>
            <div className='w-max'>
              <input
                type="checkbox"
                id="age-group-1"
                checked={selectedAges['age-group-1']}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="age-group-1" className='text-gray-600'>3-16</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="age-group-2"
                checked={selectedAges['age-group-2']}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="age-group-2" className='text-gray-600'>17-40</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="age-group-3"
                checked={selectedAges['age-group-3']}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="age-group-3" className='text-gray-600'>41-60</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="age-group-4"
                checked={selectedAges['age-group-4']}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="age-group-4" className='text-gray-500'>60+</label>
            </div>
          </div>
        )}

<div className="flex justify-end mt-4">
          <button type="submit" className="hover:bg-blue-500 hover:text-white px-4 py-2 rounded-lg font-xs font-sans text-sm text-gray-600 border border-gray-300">Save & Next</button>
        </div>
      </form>
    </div>
   
    </div>
  );
};

export default Dropdown;

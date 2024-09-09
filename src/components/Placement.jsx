import React, { useState } from 'react';

const Placement = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const placements = [
    { value: 'OEM', label: 'OEM' },
    { value: 'InApp', label: 'In App' },
    { value: 'PremiumInventory', label: 'Premium Inventory' },
    { value: 'DeveloperTraffic', label: 'Developer Traffic' },
    { value: 'Incent', label: 'Incent' },
  ];
 
  const handleRadioChange = (value) => {
    setExpandedSection(expandedSection === value ? null : value);
  };

  return (
    <div className="w-full mx-auto mt-4 bg-white p-12 rounded-lg border border-gray-100 shadow">
      <h1 className="mb-6 text-gray-700 font-semibold font-sans text-sm">Placement</h1>
      
      <div className="pb-6 ">
      
        <div className="flex  md:flex-row">
          <div className="w-max md:w-1/3 font-xs text-sm text-gray-600 ml-10 ">Select Placement</div>
          <div className="w-full md:w-2/3 flex text-sm ">
            {placements.map(({ value, label }) => (
              <div className="  font-xs text-sm text-gray-600 space-x-2 text-sm mr-2" key={value}>
                <input
                  type="radio"
                  id={value}
                  name="placement"
                  value={value}
                  onChange={() => handleRadioChange(value)}
                  
                  
                />
                <label
                  htmlFor={value}
                  className="cursor-pointer text-sm "
                  onClick={() => handleRadioChange(value)}
                 
                >
                  {label}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="pt-2 flex justify-left items-center font-xs text-sm text-gray-600   ml-[36%]">
          {placements.map(({ value }) => (
            <div
              key={value}
              className={`mt-2  ${expandedSection === value ? 'block' : 'hidden'} `}
            >
              {value === 'OEM' && (
                <div className='flex space-x-2'>
                  <div className=" ">
                    <input type="Radio" id="oem1" className="mr-1" value="Xiaomi" />
                    <label htmlFor="oem1" className='pb-1 mr-1 '>Xiaomi</label>
                  </div>
                  <div className="">
                    <input type="Radio" id="oem2" className="mr-1" value="Oppo" />
                    <label htmlFor="oem2" className='mr-1'>Oppo (Only MMP)</label>
                  </div>
                  <div className="">
                    <input type="Radio" id="oem3" className="mr-1" value="Vivo" />
                    <label htmlFor="oem3" className='mr-1'>Vivo</label>
                  </div>
                </div>
              )}
              {value === 'DeveloperTraffic' && (
                <div className="">
                  <input type="Radio" id="dev1" className="mr-1" value="Xiaomi Developer Traffic" />
                  <label htmlFor="dev1" className='mr-2'>Xiaomi Developer Traffic</label>
                </div>
              )}
              {value === 'InApp' && (
                <div className='flex'>
                  <div className="">
                    <input type="Radio" id="inapp1" className="mr-1" value="Inmobi RTB" />
                    <label htmlFor="inapp1" className='mr-2'>Inmobi RTB</label>
                  </div>
                  <div className="">
                    <input type="Radio" id="inapp2" className="mr-1" value="Smatoo RTB" />
                    <label htmlFor="inapp2" className='mr-2'>Smatoo RTB</label>
                  </div>
                  <div className="">
                    <input type="Radio" id="inapp3" className="mr-1" value="Xiaomi RTB" />
                    <label htmlFor="inapp3" className='mr-2'>Xiaomi RTB</label>
                  </div>
                  <div className="">
                    <input type="Radio" id="inapp4" className="mr-1" value="Shareit RTB" />
                    <label htmlFor="inapp4" className='mr-2'>Shareit RTB</label>
                  </div>
                </div>
              )}
              {value === 'PremiumInventory' && (
                <div className='flex justify-center itmems-center'>
                  <div className=" ">
                    <input type="Radio" id="premium1" className="mr-1" value="FaceMoji" />
                    <label htmlFor="premium1" className='mr-2'>FaceMoji</label>
                  </div>
                  <div className="">
                    <input type="Radio" id="premium2" className="mr-1" value="KeywordsApps" />
                    <label htmlFor="premium2" className='mr-2'>Keywords Apps</label>
                  </div>
                  <div className="">
                    <input type="Radio" id="premium3" className="mr-1" value="Shareme" />
                    <label htmlFor="premium3" className='mr-2'>Shareme</label>
                  </div>
                  <div className="">
                    <input type="Radio" id="premium4" className="mr-1" value="Xender" />
                    <label htmlFor="premium4" className='mr-2'>Xender</label>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Placement;

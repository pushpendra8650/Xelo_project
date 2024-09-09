import React, { useState } from 'react';
import Navbar from './Navbar';
import { HiOutlineArrowDownTray } from "react-icons/hi2";

const DataAnalysis = () => {
  // Example data - replace this with your actual data source
  const [tableData, setTableData] = useState([
    {
      country: 'USA',
      click: 120,
      promotionalGoal: 'Goal A',
      install: 80,
      costUSD: 150,
      cvr: 66.67,
      cpcUSD: 1.25,
      cpiUSD: 1.88,
    },
    {
      country: 'Canada',
      click: 95,
      promotionalGoal: 'Goal B',
      install: 70,
      costUSD: 130,
      cvr: 73.68,
      cpcUSD: 1.37,
      cpiUSD: 1.86,
    },
    {
      country: 'Mexico',
      click: 105,
      promotionalGoal: 'Goal C',
      install: 75,
      costUSD: 140,
      cvr: 71.43,
      cpcUSD: 1.37,
      cpiUSD: 1.87,
    },
    // Add more rows as needed
  ]);

  const [showAlert, setShowAlert] = useState(false); // State to manage alert visibility

  // Convert JSON data to CSV format
  const convertToCSV = (data) => {
    const header = [
      'Country',
      'Click',
      'Promotional Goal',
      'Install',
      'Cost (USD)',
      'CVR (%)',
      'CPC (USD)',
      'CPI (USD)'
    ];

    const rows = data.map(row => [
      row.country,
      row.click,
      row.promotionalGoal,
      row.install,
      row.costUSD,
      row.cvr,
      row.cpcUSD,
      row.cpiUSD
    ]);

    return [
      header.join(','), // Header row
      ...rows.map(row => row.join(',')) // Data rows
    ].join('\n');
  };

  // Download CSV file
  const downloadCSV = () => {
    const csvData = convertToCSV(tableData);
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'data-analysis-report.csv');
    link.click();
  };

  // Handle the Campaign Filter button click
  const handleCampaignFilterClick = () => {
    setShowAlert(true);
  };

  // Handle alert action
  const handleAlertAction = (action) => {
    if (action === 'apply') {
      // Handle Apply action
      console.log('Apply button clicked');
    }
    setShowAlert(false); // Close alert
  };

  // button color
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleCampaignFilterClickbg = () => {
    setIsButtonClicked(!isButtonClicked);
  };
// group by button
  const [isButtonClickedgroupby, setIsButtonClickedgroupby] = useState(false);

  const handleButtonClickgroupby = () => {
    setIsButtonClickedgroupby(!isButtonClickedgroupby);
  };


  // pegination
  const [isPreviousClicked, setIsPreviousClicked] = useState(false);
  const [isNextClicked, setIsNextClicked] = useState(false);

  const handlePreviousClick = () => {
    setIsPreviousClicked(!isPreviousClicked);
  };

  const handleNextClick = () => {
    setIsNextClicked(!isNextClicked);
  };

  return (
    <div className='flex flex-col h-screen overflow-hidden'>
      <div className='flex bg-white h-screen mr-4 mt-2'>
        <div className='w-max'>
          <Navbar />
        </div>
        <div className='w-full ml-4'>
          <div className="w-full mx-auto bg-white p-8 rounded-lg shadow border border-gray-200 mt-2 mr-4">
            <div className="flex items-center ">
              <label className="text-gray-700 font-semibold font-sans text-sm">Data Analysis</label>
              <div className="p-2  ml-6">
      <button
        className={`font-sans text-sm px-4 py-2 rounded ${isButtonClicked ? 'bg-blue-500 text-white' : 'bg-white text-gray-600'} border`}
        onClick={handleCampaignFilterClickbg}
      >
        Campaign Filter <span className='mr-2'>+</span>
      </button>
      {/* Add more options as needed */}
    </div>
            </div>
          </div>

          <div className='w-full mt-4'>
            <div className="w-full mx-auto bg-white p-8 rounded-lg border border-gray-200 shadow ">
              <div className='flex justify-between items-center'>
                <div className="flex items-center text-lg mb-6 text-gray-700">
                  <h1 className='font-sans font-semibold text-sm'>Report</h1>
                  <HiOutlineArrowDownTray 
                    className="ml-2 text-gray-700 cursor-pointer"
                    onClick={downloadCSV} // Trigger CSV download
                  />
                </div>

                <div className="flex items-center mb-4">
                  <label className="text-gray-700 font-sans mr-4 text-sm">Time Zone UTC</label>
                  <div className="flex space-x-3">
                    <input type="date" className="border border-gray-300 rounded text-gray-500 font-sans text-sm font-xs" />
                    <span className="flex items-center text-gray-500">---</span>
                    <input type="date" className="border border-gray-300 rounded text-gray-500 font-sans text-sm font-xs " />
                  </div>
                </div>
              </div>

              <div className='border border-gray-300'>
              <div className='flex mt-7 ml-7'>
      <div>
        <button
          className={`p-2 text-sm rounded border ${isButtonClickedgroupby ? 'bg-blue-500 text-white' : 'bg-white text-gray-600'} border-gray-300 font-sans`}
          onClick={handleButtonClickgroupby}
        >
          Group by
        </button>
      </div>
      <div className='flex justify-between items-center rounded-r w-[20%] border border-gray-300 text-gray-600'>
        <div className='w-full'>
          <select className='w-full p-2 pl-2'>
            <option className='text-xs text-gray-500'>Country</option>
            <option className='text-sm text-gray-700'>Daily</option>
            <option className='text-sm text-gray-700'>Hour</option>
            <option className='text-sm text-gray-700'>ISP</option>
            <option className='text-sm text-gray-700'>Device</option>
            <option className='text-sm text-gray-700'>OS</option>
            <option className='text-sm text-gray-700'>Connection</option>
            <option className='text-sm text-gray-700'>City</option>
            <option value="placements" className='text-sm text-gray-700'>Placements</option>
          </select>
        </div>
      </div>
    </div>

                <div className='mt-5'>
                  <table className='w-full border-collapse table-fixed'>
                    <thead>
                      <tr>
                        <th className='px-4 py-2 text-gray-800 font-sans font-light border-b text-left text-xs font-semibold'>Country</th>
                        <th className='px-4 py-2 text-gray-800 font-sans font-light border-b text-left text-xs font-semibold'>Click</th>
                        <th className='px-4 py-2 text-gray-800 font-sans font-light border-b text-left text-xs font-semibold'>Promotional Goal</th>
                        <th className='px-4 py-2 text-gray-800 font-sans font-light border-b text-left text-xs font-semibold'>Install</th>
                        <th className='px-4 py-2 text-gray-800 font-sans font-light border-b text-left text-xs font-semibold'>Cost (USD)</th>
                        <th className='px-4 py-2 text-gray-800 font-sans font-light border-b text-left text-xs font-semibold'>CVR (%)</th>
                        <th className='px-4 py-2 text-gray-800 font-sans font-light border-b text-left text-xs font-semibold'>CPC (USD)</th>
                        <th className='px-4 py-2 text-gray-800 font-sans font-light border-b text-left text-xs font-semibold'>CPI (USD)</th>
                      </tr>
                    </thead>
                    <tbody className='text-gray-700'>
                      {tableData.map((row, index) => (
                        <tr key={index} className='border-b'>
                          <td className='px-4 py-2 text-left text-xs text-gray-800 font-sans'>{row.country}</td>
                          <td className='px-4 py-2 text-left text-xs text-gray-600 font-sans'>{row.click}</td>
                          <td className='px-4 py-2 text-left text-xs text-gray-600 font-sans'>{row.promotionalGoal}</td>
                          <td className='px-4 py-2 text-left text-xs text-gray-600 font-sans'>{row.install}</td>
                          <td className='px-4 py-2 text-left text-xs text-gray-600 font-sans'>{row.costUSD}</td>
                          <td className='px-4 py-2 text-left text-xs text-gray-600 font-sans'>{row.cvr}</td>
                          <td className='px-4 py-2 text-left text-xs text-gray-600 font-sans'>{row.cpcUSD}</td>
                          <td className='px-4 py-2 text-left text-xs text-gray-600 font-sans'>{row.cpiUSD}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className='flex justify-center items-center'>
              <div className="flex justify-center items-center mt-4 w-max rounded">
      <button
        className={`px-4 py-1 rounded mr-1 text-xs border ${isPreviousClicked ? 'bg-blue-500 text-white' : 'bg-white text-gray-600'} border-gray-300`}
        onClick={handlePreviousClick}
      >
        Previous
      </button>
      <span className="text-gray font-xs bg-white px-2">1</span>
      <button
        className={`px-4 py-1 rounded ml-1 text-xs border ${isNextClicked ? 'bg-blue-500 text-white' : 'bg-white text-gray-600'} border-gray-300`}
        onClick={handleNextClick}
      >
        Next
      </button>
    </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showAlert && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-50 flex justify-center items-center p-4 transition-transform transform duration-300 ease-in-out">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full z-60">
            <h2 className="text-lg text-gray-700 font-semibold mb-4">Campaign Filter</h2>
            <p className="mb-4 text-sm text-gray-700">Do you want to apply the filter changes?</p>
            <div className="flex justify-end space-x-4">
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded text-sm"
                onClick={() => handleAlertAction('cancel')}
              >
                Cancel
              </button>
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded text-sm"
                onClick={() => handleAlertAction('apply')}
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DataAnalysis;

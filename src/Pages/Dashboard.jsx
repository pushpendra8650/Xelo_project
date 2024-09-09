import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import CostReminderCard from '../components/CostReminderCard';
import DonutChart from '../components/DonutChart';
import Navbar from './Navbar';
import { MdNotificationsActive } from "react-icons/md";
import { HiOutlineArrowDownCircle } from "react-icons/hi2";
import { GoChevronDown } from "react-icons/go";

const Dashboard = () => {
  const [dropdowns, setDropdowns] = useState({
    0: { isOpen: false, selectedOption: 'Install' },
    1: { isOpen: false, selectedOption: 'Install' },
    2: { isOpen: false, selectedOption: 'Install' }
  });

  const toggleDropdown = (index) => {
    setDropdowns((prevState) => ({
      ...prevState,
      [index]: {
        ...prevState[index],
        isOpen: !prevState[index].isOpen
      }
    }));
  };

  const selectOption = (index, option) => {
    setDropdowns((prevState) => ({
      ...prevState,
      [index]: {
        ...prevState[index],
        selectedOption: option,
        isOpen: false // Close dropdown after selection
      }
    }));
  };

  const chartOptions = {
    chart: {
      height: 280,
      type: 'area'
    },
    dataLabels: {
      enabled: false
    },
    series: [
      {
        name: 'Series 1',
        data: [45, 52, 38, 45, 19, 23, 2]
      }
    ],
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 90, 100]
      }
    },
    xaxis: {
      categories: [
        '01 Jan',
        '02 Jan',
        '03 Jan',
        '04 Jan',
        '05 Jan',
        '06 Jan',
        '07 Jan'
      ]
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sticky Navbar */}
      <div className="w-max bg-white h-full sticky top-0 border-r border-gray-200">
        <Navbar />
      </div>
      {/* Main Content */}
      <div className="flex-1 m-3 overflow-y-auto overflow-x-hidden mr-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          {/* Today's Cost Reminder */}
          <div className="lg:col-span-3 border border-gray-100 rounded-lg h-full">
            <div className="bg-white p-4 rounded-lg shadow-md h-full overflow-auto">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <MdNotificationsActive className="text-gray-800 mr-2" />
                  <span className="text-gray-700 font-semibold font-sans text-sm">Today's Cost Reminder</span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-700 font-semibold font-sans text-sm">Daily buyer</span>
                  <HiOutlineArrowDownCircle className="text-gray-800 mr-2" />
                </div>
              </div>
              <hr className='mt-4' />
              <table className="w-full text-sm text-left mt-4 border border-gray-200">
                <thead>
                  <tr>
                    <th className="p-2 text-xs font-sm text-gray-800 font-sans font-semibold border border-gray-100">Campaign</th>
                    <th className="p-2 text-xs font-sm text-gray-800 font-sans font-semibold border border-gray-100">Campaign ID</th>
                    <th className="p-2 text-xs font-sm text-gray-800 font-sans font-semibold border border-gray-100">Advertiser ID</th>
                    <th className="p-2 text-xs font-sm text-gray-800 font-sans font-semibold border border-gray-100">Cost (USD)</th>
                    <th className="p-2 text-xs font-sm text-gray-800 font-sans font-semibold border border-gray-100">Budget Balance (USD)</th>
                    <th className="p-2 text-xs font-sm text-gray-800 font-sans font-semibold border border-gray-100">Lifetime Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 text-xs text-gray-600 font-sans border border-gray-200">Facebook OEM</td>
                    <td className="p-2 text-xs text-gray-600 font-sans text-sm border border-gray-200">2537</td>
                    <td className="p-2 text-xs text-gray-600 font-sans text-sm border border-gray-200">1045</td>
                    <td className="p-2 text-xs text-gray-600 font-sans text-sm border border-gray-200">1056.50</td>
                    <td className="p-2 text-xs text-gray-600 font-sans text-sm border border-gray-200">2225</td>
                    <td className="p-2 text-xs text-gray-600 font-sans text-sm border border-gray-200">1023.50</td>
                  </tr>
                  <tr>
                    <td className="p-2 text-xs text-gray-600 font-sans border border-gray-200">Facebook InApp</td>
                    <td className="p-2 text-xs text-gray-600 font-sans text-sm border border-gray-200">10213</td>
                    <td className="p-2 text-xs text-gray-600 font-sans text-sm border border-gray-200">1045</td>
                    <td className="p-2 text-xs text-gray-600 font-sans text-sm border border-gray-200">1056.50</td>
                    <td className="p-2 text-xs text-gray-600 font-sans text-sm border border-gray-200">2225</td>
                    <td className="p-2 text-xs text-gray-600 font-sans text-sm border border-gray-200">1023.50</td>
                  </tr>
                  <tr>
                    <td className="p-2 text-xs text-gray-600 font-sans border border-gray-200">Facebook DirectApp</td>
                    <td className="p-2 text-xs text-gray-600 font-sans text-sm border border-gray-200">10214</td>
                    <td className="p-2 text-xs text-gray-600 font-sans text-sm border border-gray-200">1045</td>
                    <td className="p-2 text-xs text-gray-600 font-sans text-sm border border-gray-200">510.00</td>
                    <td className="p-2 text-xs text-gray-600 font-sans text-sm border border-gray-200">2225</td>
                    <td className="p-2 text-xs text-gray-600 font-sans text-sm border border-gray-200">1310.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* New Box Next to Today's Cost Reminder */}
          <div className="lg:col-span-1 h-full border border-gray-100 rounded-lg ">
            <div className="bg-white rounded-lg shadow-md h-full w-full ">
              <CostReminderCard />
            </div>
          </div>

          {/* Campaigns Status */}
          <div className="lg:col-span-4 shadow border border-gray-100 rounded-lg mt-1 h-full">
            <div className="bg-white p-4 rounded-lg shadow-md h-full">
              <div className='flex justify-between'>
                <div className="mb-4 text-gray-700 font-semibold font-sans text-sm">Last 7 Day Status</div>
                <div className='relative'>
                  <button onClick={() => toggleDropdown(0)} className='bg-blue-600 p-1 pl-2 rounded text-white flex items-center font-sans font-light text-sm'>
                    {dropdowns[0].selectedOption} <GoChevronDown />
                  </button>
                  {dropdowns[0].isOpen && (
                    <div className='absolute bg-white border border-gray-300 rounded mt-1 p-2 shadow-lg'>
                      <ul>
                        <li onClick={() => selectOption(0, 'Click')} className='p-1 hover:bg-gray-100 cursor-pointer'>Click</li>
                       
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              <Chart options={chartOptions} series={chartOptions.series} type="area" height={320} />
            </div>
          </div>

          {/* Top 10 Campaigns */}
          <div className="lg:col-span-2 h-full shadow border border-gray-100 rounded-lg mt-1 mr-1">
            <div className="bg-white p-4 rounded-lg shadow-md h-full">
              <div className='flex justify-between'>
                <div className="mb-4 text-gray-700 font-semibold font-sans text-sm">Top 10 campaign</div>
                <div className='relative'>
                  <button onClick={() => toggleDropdown(1)} className='bg-blue-600 p-1 pl-2 rounded text-white flex items-center font-sans font-xs text-sm'>
                    {dropdowns[1].selectedOption} <GoChevronDown />
                  </button>
                  {dropdowns[1].isOpen && (
                    <div className='absolute bg-white border border-gray-300 rounded mt-1 p-2 shadow-lg'>
                      <ul>
                        <li onClick={() => selectOption(1, 'Install')} className='p-1 hover:bg-gray-100 cursor-pointer'>Install</li>
                        <li onClick={() => selectOption(1, 'Click')} className='p-1 hover:bg-gray-100 cursor-pointer'>Click</li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              <DonutChart />
            </div>
          </div>

          {/* Placement Distribution */}
          <div className="lg:col-span-2 h-full shadow border border-gray-100 rounded-lg mt-1">
            <div className="bg-white p-4 rounded-lg shadow-md h-full">
              <div className='flex justify-between'>
                <div className="mb-4 text-gray-700 font-semibold font-sans text-sm">Placement Distribution</div>
                <div className='relative'>
                  <button onClick={() => toggleDropdown(2)} className='bg-blue-600 p-1 pl-2 rounded text-white flex items-center font-sans font-xs text-sm'>
                    {dropdowns[2].selectedOption} <GoChevronDown />
                  </button>
                  {dropdowns[2].isOpen && (
                    <div className='absolute bg-white border border-gray-300 rounded mt-1 p-2 shadow-lg'>
                      <ul>
                        <li onClick={() => selectOption(2, 'Cost')} className='p-1 hover:bg-gray-100 cursor-pointer'>Cost</li>
                        <li onClick={() => selectOption(2, 'Click')} className='p-1 hover:bg-gray-100 cursor-pointer'>Click</li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              <DonutChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

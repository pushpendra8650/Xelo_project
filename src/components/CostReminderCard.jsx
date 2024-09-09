import React from 'react';
import Chart from "react-apexcharts";

// DonutChart Component
const DonutChart = ({ options, series, width }) => {
  return (
    <div className="flex justify-center items-center">
      <Chart
        options={options}
        series={series}
        type="donut"
        width={width}
      />
    </div>
  );
};

// CostReminderCard Component
const CostReminderCard = () => {
  // Options for the first chart
  const optionsFirst = {
    chart: {
      type: "donut",
    },
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 270,
        donut: {
          size: '60%',
          background: 'transparent',
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: '10px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              offsetY: -5,
              offsetX: 0,
              color: '#000',
              align: 'center',
            },
            value: {
              show: true,
              fontSize: '10px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              offsetY: 0,
              offsetX: 0,
              color: '#000',
              align: 'center',
              formatter: function (val) {
                return val; // Return the raw value without "$" or "USD"
              },
            },
            total: {
              show: true,
              showAlways: true,
              label: 'Cost Today',
              fontSize: '8px',
              color: '#000',
              offsetY: 0,
              align: 'center',
              formatter: function () {
                return 23; // Display the raw total value without "$" or "USD"
              },
            },
          },
        },
      },
    },
    stroke: {
      show: true,
      width: 5,
      colors: ['#ff6b6b'],
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'horizontal',
        gradientToColors: ['#ff6b6b'],
        stops: [0, 100],
      },
    },
    labels: ['Cost Today', 'This Month Cost', 'Available Balance'],
    colors: ['#FF7A96','#54B0EE','#FFD56F'],
    legend: {
      position: 'right',
      labels: {
        colors: ['#000'],
      },
      markers: {
        width: 8,
        height: 3,
        radius: 16,
      },
    },
    dataLabels: {
      enabled: false, // Disables the percentage labels
    },
  };

  const seriesFirst = [23,45,78]; // Cost Today Value

  // Options for the second chart
  const optionsSecond = {
    chart: {
      type: "donut",
    },
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 270,
        donut: {
          size: '60%',
          background: 'transparent',
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: '8px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              offsetY: -5,
              offsetX: 0,
              color: '#000',
              align: 'center',
            },
            value: {
              show: true,
              fontSize: '10px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              offsetY: 0,
              offsetX: 0,
              color: '#000',
              align: 'center',
              formatter: function (val) {
                return val; // Return the raw value without "$" or "USD"
              },
            },
            total: {
              show: true,
              showAlways: true,
              label: 'Pending',
              fontSize: '8px',
              color: '#000',
              offsetY: 0,
              align: 'center',
              formatter: function () {
                return 23; // Display the raw total value without "$" or "USD"
              },
            },
          },
        },
      },
    },
    stroke: {
      show: true,
      width: 5,
      colors: ['#ff6b6b'],
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'horizontal',
        gradientToColors: ['#ff6b6b'],
        stops: [0, 100],
      },
    },
    labels: ['Active', 'Paused', 'Pending', 'Rejected'],
    colors: ['#ff6b6b','#54B0EE','#FFD56F','#66C9C9'],
    legend: {
      position: 'right',
      labels: {
        colors: ['#000'],
      },
      markers: {
        width: 8,
        height: 3,
        radius: 16,
      },
    },
    dataLabels: {
      enabled: false, // Disables the percentage labels
    },
  };

  const seriesSecond = [23,67,98,34]; // Pending Value

  return (
    <div className="flex flex-col gap-4 p-1 max-w-[100%] mx-auto bg-white rounded-lg shadow-md">
  {/* First Card */}
  <div className="flex justify-center items-center ">
    <DonutChart options={optionsFirst} series={seriesFirst} width="290" />
  </div>
  
  <hr className="border-gray-400 pb-[-2]" />
  
    {/* Second Card */}
    <div className="flex justify-center items-center pr-10">
      <DonutChart options={optionsSecond} series={seriesSecond} width="250" />
    </div>
  </div>

  );
};

export default CostReminderCard;

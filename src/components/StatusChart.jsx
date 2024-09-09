// src/StatusChart.jsx
import React from 'react';
import Chart from 'react-apexcharts';

const StatusChart = () => {
  const series = [
    {
      name: 'Status',
      data: [20, 10, 30, 40], // Example data
    },
  ];

  const options = {
    chart: {
      type: 'bar',
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded',
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: ['Active', 'Paused', 'Pending', 'Rejected'],
    },
    yaxis: {
      title: {
        text: 'Count',
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: (val) => `${val} items`,
      },
    },
  };

  return (
    <div className="p-4">
      <Chart options={options} series={series} type="bar" height={350} />
    </div>
  );
};

export default StatusChart;



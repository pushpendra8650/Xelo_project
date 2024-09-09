import React from 'react';
import Chart from 'react-apexcharts';

const DonutChart = () => {
  const options = {
    chart: {
      type: 'donut'
    },
    series: [2, 4, 5, 6],
    labels: ["10632", "10345", "20956", "10623","10632", "10345", "20956", "10623","20956", "10623"],
    plotOptions: {
      pie: {
        expandOnClick: false,
        donut: {
          size: "50px",
          labels: {
            show: true,
            total: {
              show: false // Disabled the total label
            }
          }
        }
      }
    },
    dataLabels: {
      style: {
        colors: ['#FF7A96','#54B0EE','#FFD56F','#66C9C9','#D96F2D','#B0B39D','#96AE0C','#55AA33','#6ED5DA','#5E58F1'] // Customize the color of labels if needed
      }
    },
    legend: {
      position: 'bottom', // Adjust legend position if needed
      horizontalAlign: 'justify'
    }
  };

  const series = [2, 4, 5, 6];

  return (
    <div className="flex flex-col items-center justify-center h-[300px] pb-10 pt-6"> {/* Added pt-6 for top padding */}
      <div className="w-[400px]">
        <Chart options={options} series={series} type="donut" width="100%" />
      </div>
    </div>
  );
};

export default DonutChart;

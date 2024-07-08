import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, CategoryScale, LinearScale, BarElement, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import './App.css';

Chart.register(ArcElement, CategoryScale, LinearScale, BarElement, Legend, ChartDataLabels);

const PieChart = ({ data }) => {
  
  const filteredData = data.filter(item => item.cat !== 'Income');
  const categories = [...new Set(filteredData.map(item => item.cat))];
  const chartData = {
    labels: categories,
    datasets: [{
      data: categories.map(cat => filteredData.filter(item => item.cat === cat).reduce((acc, curr) => acc + curr.value, 0)),
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FFA07A'],
    }]
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: 'right',
      },
      datalabels: {
        display: false, 
      }
    }
  };

  return (
    <div className='pi'>
      <Pie data={chartData} options={options} />
    </div>
  );
};

export default PieChart;

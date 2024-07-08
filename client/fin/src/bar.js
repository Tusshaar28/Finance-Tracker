import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, ArcElement, CategoryScale, LinearScale,BarElement } from 'chart.js';
Chart.register(ArcElement, CategoryScale,LinearScale, BarElement);

const BarChart = ({ data }) => {
  const income = data.filter(item => item.value > 0).reduce((acc, curr) => acc + curr.value, 0);
  const expenditure = data.filter(item => item.value < 0).reduce((acc, curr) => acc + curr.value, 0);

  const chartData = {
    labels: ['Income', 'Expenditure'],
    datasets: [{
      data: [income, Math.abs(expenditure)],
      backgroundColor: ['#4CAF50', '#FF5733']
    }]
  };

  return (
    <div className='brg'>
      <Bar data={chartData} />
    </div>
  );
};

export default BarChart;

import React from 'react';
import { Link } from 'react-router-dom';
import PieChart from './pie';
import BarChart from './bar';
import { useState } from 'react';

const ChartsPage = ({ data }) => {
  const [cht,setCht] = useState('');
  
  return (
    <div>
      <div className='bx'>
      <select  onChange={(e)=>{setCht(e.target.value)}} defaultValue="Bar">
            <option value="Pie">Pie Chart of Expenditure</option>
            <option value="Bar">Bar Graph</option>
            
      </select> 
        
    </div>
    {
          cht === 'Pie' ? <PieChart data={data} /> : <BarChart data={data} />
        }
    </div>
  );
};

export default ChartsPage;

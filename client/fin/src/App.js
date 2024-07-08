
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';    
import { BrowserRouter , Route, Routes, Link, useLocation} from 'react-router-dom';
import ChartsPage from './chrt';

function App() {
    const [task, setTask] = useState('');
    const [value, setValue] = useState('');
    const [date, setDate] = useState('');
    const [cat, setCat] = useState('');
    const [fin, setFin] = useState([]);
    const location = useLocation();
  
    const add = (event) =>{
      axios.post("http://localhost:3001/insert", {name: task, value: value, cat: cat, date: date})
    .then((res) => {
      alert("Data inserted");
    })};
    
    const del = (id) =>{
      axios.delete(`http://localhost:3001/delete/${id}`)
      .then((res) => {
        alert("Data deleted");
      })};


    useEffect(() => {
      axios.get("http://localhost:3001/read")
      .then((res) => {
        setFin(res.data);
      })},[]);
    
    const isNotChartsPage = location.pathname !== '/chrt';
  return (
    
    <body>
      <div className='bd'>
        <p className='hdr'>Personal Finance Tracker</p>
        <div class='bth'>
          <Link to="/chrt">
            <button className="button-56 diagonal-left">Analytics</button>
         </Link>
         <Link to="/">
           <button className="button-home diagonal-right">Home</button>
         </Link>
        </div>

      </div>
      <Routes>
          <Route path="/chrt" element={<ChartsPage data={fin} />} />
        </Routes>
       {isNotChartsPage && (
        <>
        
      <div className='bal'>
        {fin.reduce((acc, curr) => acc + curr.value, 0)}
      </div>
      <div className='mndiv'>
        <form className='finfrm'>
          <div className='indiv'>
          <label>Task</label>
          <input id='tsk' type="text" placeholder="Enter the Task"  onChange={(e)=>{setTask(e.target.value)}}/> <br />
          </div>
          <div className='indiv'>
          <label>Value</label>
          <input id='vl' type="number" placeholder="Enter the Value"  onChange={(e)=>{setValue(e.target.value)}}/> <br />
          </div>
          <div className='indiv'>
          <label>Category</label>
          <select className='slct' onChange={(e)=>{setCat(e.target.value)}} value="Food">
            <option value="Food">Food</option>
            <option value="Utilities">Utilities</option>
            <option value="Entertainment">Movies</option>
            <option value="Income">Income</option>
          </select> <br/>
          </div>
          <div className='indiv'>
          <label>Date</label>
          <input id='dt' type="date"  onChange={(e)=>{setDate(e.target.value)}} /> <br />
          </div>
          <button type="button" class="button" onClick={add}>
          <span class="button__text">Add Item</span>
          <span class="button__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" height="24" fill="none" class="svg"><line y2="19" y1="5" x2="12" x1="12"></line><line y2="12" y1="12" x2="19" x1="5"></line></svg></span>
          </button>
        </form>
      </div>
      <div className='dsp'>
        <table className='tbdis'>
          <thead className='thd'>
            <tr>
              <th>Task</th>
              <th>Value</th>
              <th>Category</th>
              <th>Date</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {
              fin.map((f)=>{
                const vlclass = f.value > 0 ? 'pos' : 'neg';
                return(
                  
                  <tr className={vlclass}>
                    <td>{f.name}</td>
                    <td>{f.value}</td>
                    <td>{f.cat}</td>
                    <td>{new Date(f.date).toISOString().split('T')[0]}</td>
                    <td><button class="remove-btn" onClick={()=>{del(f._id)}}>X</button></td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
      </>
       )}
        <footer className='ft'>

        </footer>
    </body>
   
  );
}

export default App;

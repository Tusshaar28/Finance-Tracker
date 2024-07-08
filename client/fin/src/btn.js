import React from 'react'
import { Link,Route,Routes,BrowserRouter } from 'react-router-dom';
import './App.css';
import ChartsPage from './chrt';
import fin from './App';
export default function Btn() {
  return (
    <div className='bthm'>
        <Routes>
          <Route path="/chrt" element={<ChartsPage data={fin} />} />
        </Routes>
       <Link to="/chrt">
            <button>Analytics</button>
         </Link>
         <Link to="/">
            <button>Home</button>
         </Link>
    </div>
  )
}

import React from 'react';
import './App.css';
import EmployeesList from './Pages/EmployeesList';
import Header from './Components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import Customers from './Pages/Customers';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       
        <Header />
        
       
        <Routes>
          <Route path='/EmployeesList' element={<EmployeesList />} />
          <Route path='/Customers' element={<Customers />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

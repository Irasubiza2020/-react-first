import './App.css';
import React, { useState } from 'react';
import Employees from './Components/Employees';

function App() {
  const [role, setRole] = useState('dev');
  const [employees, setEmployees] = useState([
    {
      name: "Caleb",
      role: "developer",
      img: "https://images.pexels.com/photos/29084945/pexels-photo-29084945/free-photo-of-smiling-male-portrait-in-studio-setting.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Alons",
      role: "manager",
      img: "https://images.pexels.com/photos/2104252/pexels-photo-2104252.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Desire",
      role: "product manager",
      img: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Emmy",
      role: "designer",
      img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Mutsinzi",
      role: "front help desk",
      img: "https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      name: "Daine",
      role: "finance",
      img: "https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Mutoni",
      role: "support",
      img: "https://images.pexels.com/photos/2104252/pexels-photo-2104252.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "John",
      role: "driver",
      img: "https://images.pexels.com/photos/1844547/pexels-photo-1844547.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ]);

  return (
    <div>
      
      
      {/* Rendering employees using the Employees component */}
      <div className='ml-16 flex flex-wrap justify-center'>
        {employees.map((employee, index) => (
          <Employees 
            key={index}
            name={employee.name}
            role={employee.role}
            img={employee.img}
          />
        ))}
      </div>
      <input 
        type="text" 
        onChange={(e) => {
          console.log(e.target.value);
          setRole(e.target.value);
        }} 
        placeholder="Enter role"
      />
    </div>
  );
}

export default App;

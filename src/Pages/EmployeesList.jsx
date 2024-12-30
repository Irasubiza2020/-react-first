import React, { useState } from 'react';
import '../App.css';
import { v4 as uuidv4 } from 'uuid';
import Employees from '../Components/Employees';
import AddEmployees from '../Components/AddEmpolees';


function EmployeesList() {
  const [employees, setEmployees] = useState([
    { id: 1, name: "Caleb", role: "developer", img: "https://images.pexels.com/photos/29084945/pexels-photo-29084945/free-photo-of-smiling-male-portrait-in-studio-setting.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 2, name: "Alons", role: "manager", img: "https://images.pexels.com/photos/2104252/pexels-photo-2104252.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 3, name: "Desire", role: "product manager", img: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 4, name: "Emmy", role: "designer", img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 5, name: "Mutsinzi", role: "front help desk", img: "https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 6, name: "Daine", role: "finance", img: "https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?auto=compress&cs=tinysrgb&w=400" }
  ]);

  const updateEmployeeInfo = (id, newName, newRole) => {
    setEmployees(employees.map((employee) => 
      employee.id === id ? { ...employee, name: newName, role: newRole } : employee
    ));
  };

  const addaEmployee = (name, role, img) => {
    const newEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      img: img,
    };
    setEmployees([...employees, newEmployee]);
  };

  return (
    <div  className=' '>
     
      <div className="ml-16 flex flex-wrap justify-center">
        {employees.map((employee) => (
          <Employees 
            key={employee.id}
            id={employee.id}
            name={employee.name}
            role={employee.role}
            img={employee.img}
            updateEmployee={updateEmployeeInfo}
          />
        ))}
      </div>
      <AddEmployees newEmployees={addaEmployee}/>
    </div>
  );
}

export default EmployeesList;

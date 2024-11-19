// Employees.jsx
import React from 'react';
import EditEmployees from './EditEmployees';

const Employees = (props) => {
  return (
    <div className="mx-w-[350px] mx-h-[350px] py-8 px-8 max-w-sm m-2 space-y-2 bg-white rounded-xl shadow-lg sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:gap-x-6">
      <img className="block mx-auto rounded-full object-cover w-[100px] h-[100px] sm:mx-0 sm:shrink-0" src={props.img} alt={`${props.name}`} />
      <div className="text-center space-y-2 sm:text-left">
        <div className="space-y-0.5">
          <p className="text-lg text-black font-semibold">{props.name}</p>
          <p className="text-slate-500 font-medium">{props.role}</p>
        </div>
        <EditEmployees
          id={props.id}
          name={props.name}
          role={props.role}
          updateEmployee={props.updateEmployee}
        />
      </div>
    </div>
  );
};

export default Employees;

import React from 'react'
import EditEmployees from './EditEmployees';

const Employees = (props) => {
  return (
    <div class="py-8 px-8 max-w-sm m-2 space-y-2 bg-white rounded-xl shadow-lg sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:gap-x-6">
  <img class="block mx-auto  rounded-full object-cover w-[100px] h-[100px] sm:mx-0 sm:shrink-0"
   src={props.img} />
  <div class="text-center space-y-2 sm:text-left">
    <div class="space-y-0.5">
      <p class="text-lg text-black font-semibold">
        
        {props.name}
      </p>
      <p class="text-slate-500 font-medium">
        {props.role}
      </p>
      
    </div>
    <EditEmployees/>
   
  </div>
</div>
  )
}
export default Employees
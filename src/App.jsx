import React, { useState } from 'react';
import Employees from './Components/Employees';

function App() {
  const [role, setRole] = useState('dev');

  return (
    <div>
      <input 
        type="text" 
        onChange={(e) => {
          console.log(e.target.value);
          setRole(e.target.value);
        }} 
        placeholder="Enter role"
      />
      
      {/* Correcting the "entern" role to a possible intended value */}
      <Employees name="Caleb" role="intern" />
      <Employees name="Deo" role="dev" />
      <Employees name="Adeline" role={role} />

      <h1>Vite + React</h1>
    </div>
  );
}

export default App;

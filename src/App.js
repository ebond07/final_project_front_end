import React, { useState } from 'react';
import Boxes from './components/Boxes';
import WeekSelector from './components/WeekSelector';
import axios from 'axios';

function App() {
  const [selectedOption, setSelectedOption] = useState(null);

  function handleSubmit() {
    const weekNumber = parseInt(selectedOption, 10);
    axios.get('http://localhost:8080/api/weeks')
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error(error);
      });
  } 
  return (
    <div style={{textAlign: 'center'}}>
      <h1 style={{ textAlign: 'center' }}>Ideal Weather Weeks</h1>
      <div>
      <label htmlFor="weekSelect">Select a Week:</label>
      <select id="weekSelect" onChange={event => setSelectedOption(event.target.value)}>
        <option value="first">First Week</option>
        <option value="second">Second Week</option>
        <option value="third">Third Week</option>
        <option value="fourth">Fourth Week</option>
      </select>
      <button onClick={handleSubmit}>Begin Creation of Week</button>
      </div>
      <Boxes />
    </div>
  );
}

export default App;
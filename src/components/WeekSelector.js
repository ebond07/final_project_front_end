import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function WeekSelector() {
  const [DselectedOption, DsetSelectedOption] = useState();
  

  const weekNumberMap = {
    "first": 1,
    "second": 2,
    "third": 3,
    "fourth": 4
  };
  
  
  function handleDelete() {
    const weekNumber = weekNumberMap[DselectedOption];
    axios.delete(`http://localhost:8080/api/weeks/${weekNumber}`)
      .then((response) => {
        if (response.status === 200) {
          toast(`Week ${weekNumber} deleted successfully!`);
        }
      })
      .catch((error) => {
        console.error(error);
        toast(`An error occurred while deleting week ${weekNumber}.`);
      });
  }
  
  return (
    <div style={{textAlign: 'center'}}>
      <div>
      
      </div>
      <div>
      <label htmlFor="weekDelete">Delete a Week:</label>
      <select id="weekDelete" onChange={event => DsetSelectedOption(event.target.value)}>
        <option value="None">Select A Week</option>
        <option value="first">First Week</option>
        <option value="second">Second Week</option>
        <option value="third">Third Week</option>
        <option value="fourth">Fourth Week</option>
      </select>
      <button onClick={handleDelete}>Delete The Selected Week</button>
      </div>
    </div>
  );
}

export default WeekSelector;

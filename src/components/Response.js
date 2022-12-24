import React, {useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

export function submitDay(weekNumber, dayName, temperature) {
    
  axios.post(`http://localhost:8080/api/weeks/${weekNumber}/days`, {
    'name': dayName,
    'weather': {
      'temperature': temperature,
      'precipitation': 0
    }
  })
    .then((response) => {
      if (response.status === 201) {
        toast(`Successfully submitted temperature for ${dayName}`);
        getTemperature(1)
      }
    })
    .catch((error) => {
      console.error(error);
      toast(`Error occurred while submitting temperature for ${dayName}`);
    });
}
let temperature = 0;
async function getTemperature(dayID) {
    
    try {
      const response = await axios.get(`http://localhost:8080/api/days/${dayID}`);
      temperature = response.data.weather.temperature;
    } catch (error) {
      console.error(error);
      console.log(`Error occurred while getting temperature for }`);
    }
    return temperature;
  }

function Response(){

    return(
        <div>
            <h3>Weekly Average Temperature</h3>
        </div>
    );
}

export default Response;
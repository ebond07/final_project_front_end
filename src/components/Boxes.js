import React, { useState, useEffect } from 'react';
import SwipeableViews from 'react-swipeable-views';
import {submitDay} from './Response';
import WeekSelector from './WeekSelector';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const styles = {
  slide: {
    padding: 0,
    minHeight: 10,
    color: '#fff',
    textAlign: 'center',
  },
  slide1: {
    backgroundColor: '#5b6a82',
  },
  slide2: {
    backgroundColor: '#d6cd15',
  },
  slide3: {
    backgroundColor: '#1569d6',
  },
};

function Boxes() {
  const weekNumberMap = {
    "first": 1,
    "second": 2,
    "third": 3,
    "fourth": 4
  };
  const [selectedOption, setSelectedOption] = useState();
  const [counts, setCounts] = useState([0, 0, 0, 0, 0, 0, 0]);
  const [colors, setColors] = useState(['blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue']);

  function handleSubmit() {
    const setWeekNumber = weekNumberMap[selectedOption];
    axios.post('http://localhost:8080/api/weeks', {
      'weekOfMonth': setWeekNumber
    })
      .then((response) => {
        if (response.status === 201) {
          toast(`Week ${setWeekNumber} initialized successfully!`);
        }
      })
      .catch((error) => {
        console.error(error);
        toast(`An error occurred while creating week ${setWeekNumber}`);
      });
  }

  function handleClick(index, increment) {
    const newCounts = [...counts];
    newCounts[index] += increment;
    setCounts(newCounts);
  }

  function resetCount(){
    setCounts([0, 0, 0, 0, 0, 0, 0]);
  }

  useEffect(() => {
    const newColors = counts.map(count => (count > 0 ? 'red' : 'blue'));
    setColors(newColors);
  }, [counts]);

  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  return (
    
    <div>
      <label htmlFor="weekSelect">Select a Week:</label>
      <select id="weekSelect" onChange={event => setSelectedOption(event.target.value)}>
        <option value="None">Select A Week</option>
        <option value="first">First Week</option>
        <option value="second">Second Week</option>
        <option value="third">Third Week</option>
        <option value="fourth">Fourth Week</option>
      </select>
      <button onClick={handleSubmit}>Begin Creation of Week</button>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
        <button onClick={() => resetCount()}>Reset Temps</button>
        {counts.map((count, index) => (
          <div key={index} style={{ width: '150px', height: '150px', border: '2px solid black', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ width: '100%', backgroundColor: 'white', textAlign: 'center' }}>{daysOfWeek[index]}</div>
            <SwipeableViews enableMouseEvents>
              <div style={Object.assign({}, styles.slide, styles.slide1)}>Cloudy</div>
              <div style={Object.assign({}, styles.slide, styles.slide2)}>Sunny</div>
              <div style={Object.assign({}, styles.slide, styles.slide3)}>Rain</div>
            </SwipeableViews>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <button style={{ color: 'red' }} onClick={() => handleClick(index, 1)}>+</button>
              <span style={{ color: colors[index] }}>{count}&deg;C</span>
              <button style={{ color: 'blue' }} onClick={() => handleClick(index, -1)}>-</button>
            </div>
            <div style={{ height: '15px' }}></div>
            <button style={{ display: 'block', margin: '0 auto' }} onClick={() =>submitDay(weekNumberMap[selectedOption], daysOfWeek[index], count)}>Submit Day</button>
            <button style={{ display: 'block', margin: '0 auto' }}>Update Day</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Boxes;

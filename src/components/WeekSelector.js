import React from 'react';

function WeekSelector() {
  return (
    <div style={{textAlign: 'center'}}>
      <label htmlFor="weekSelect">Select The Week of The Month:</label>
      <select id="weekSelect">
        <option value="first">First Week</option>
        <option value="second">Second Week</option>
        <option value="third">Third Week</option>
        <option value="fourth">Fourth Week</option>
      </select>
    </div>
  );
}

export default WeekSelector;

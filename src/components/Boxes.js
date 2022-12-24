import React, { useState, useEffect } from 'react';
import SwipeableViews from 'react-swipeable-views';

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
  const [counts, setCounts] = useState([0, 0, 0, 0, 0, 0, 0]);
  const [colors, setColors] = useState(['blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue']);

  function handleClick(index, increment) {
    const newCounts = [...counts];
    newCounts[index] += increment;
    setCounts(newCounts);
  }

  useEffect(() => {
    const newColors = counts.map(count => (count > 0 ? 'red' : 'blue'));
    setColors(newColors);
  }, [counts]);

  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  return (
    
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
        {counts.map((count, index) => (
          <div key={index} style={{ width: '150px', height: '150px', border: '2px solid black', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ width: '100%', backgroundColor: 'white', textAlign: 'center' }}>{daysOfWeek[index]}</div>
            <SwipeableViews enableMouseEvents>
              <div style={Object.assign({}, styles.slide, styles.slide1)}>Cloudy</div>
              <div style={Object.assign({}, styles.slide, styles.slide2)}>Sunny</div>
              <div style={Object.assign({}, styles.slide, styles.slide3)}>Rain</div>
            </SwipeableViews>
            <button style={{ color: 'red' }} onClick={() => handleClick(index, 1)}>+</button>
            <span style={{ color: colors[index] }}>{count}</span>
            <button style={{ color: 'blue' }} onClick={() => handleClick(index, -1)}>-</button>
            <div style={{ height: '15px' }}></div>
            <button style={{ display: 'block', margin: '0 auto' }}>Submit Day</button>
          </div>
        ))}
      </div>
      <div style={{ height: '10px' }}>
      <button style={{ display: 'block', margin: 'auto', marginTop: '15px' }}>Submit Week</button>
      </div>
    </div>
  );
}

export default Boxes;

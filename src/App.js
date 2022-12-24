import React from 'react';
import Boxes from './components/Boxes';
import WeekSelector from './components/WeekSelector';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Response from './components/Reponse';

function App() {
  return (
    <div style={{textAlign: 'center'}}>
      <h1 style={{ textAlign: 'center' }}>Ideal Weather Weeks</h1>
      <WeekSelector />
      <Boxes />
      <ToastContainer />
      <Response />
    </div>
  );
}

export default App;
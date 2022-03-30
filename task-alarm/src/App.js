import './App.css';
import React, { useState } from 'react';

import HomePage from './HomePage';
import MentalTask from './MentalTask';
import PhysicalTask from './PhysicalTask';
import TimeOutPage from './TimeOutPage';
import Success from './Success';
import RestartingAlarm from './RestartingAlarm';

function App() {
  const [alarmList, setAlarmList] = useState([]);
  const [page, setPage] = useState('home');

  if (page === 'home') {
    return (
      <div className="App">
        <HomePage setPage={setPage} alarmList={alarmList} setAlarmList={(newList) => setAlarmList(newList)}/>
      </div>
    );
  } else if (page === 'mental-tasks') {
    return (
      <div className="App">
        <MentalTask setPage={setPage}/>
      </div>
    );
  } else if (page === 'physical-tasks') {
    return (
      <div className="App">
        <PhysicalTask setPage={setPage} />
      </div>
    );
  } else if (page === 'time-out') {
    return (
      <div className="App">
        <TimeOutPage setPage={setPage} />
      </div>
    );
  } else if (page === 'success') {
    return (
      <div className="App">
        <Success setPage={setPage} />
      </div>
    );
  } else if (page === 'restarting-alarm') {
    return (
      <div className="App">
        <RestartingAlarm setPage={setPage} />
      </div>
    );
  }
}

export default App;

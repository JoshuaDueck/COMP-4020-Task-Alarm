import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

import HomePage from './HomePage';
import MentalTask from './MentalTask';
import PhysicalTask from './PhysicalTask';
import AlarmNew from './AlarmNew';
import AlarmList from './AlarmList';

function App() {
  const [page, setPage] = useState('home');
  const [alarms, setAlarms] = useState([]);
  const addAlarm = alarm => {
    console.log(alarm);
    if (!alarm.text || /^\s*$/.test(alarm.text)) {
      return;
    }

    const newAlarms = [alarm, ...alarms];

    setAlarms(newAlarms);
    console.log(alarms);
  };

  if (page === 'home') { 

    return (
      <div className="App">
        <HomePage setPage={setPage} />
        <AlarmList name={alarms}/>
      </div>
    );
  } else if (page === 'mental-tasks') { 

    return (
      <div className="App">
        <MentalTask />
      </div>
    );
  } else if (page === 'physical-tasks') {   

    return (
      <div className="App">
        <PhysicalTask />
      </div>
    );
  }else if (page === 'alarm-new') {   

    return (
      <div className="App">
        <AlarmNew onSubmit={addAlarm}/>
      </div>
    );
  }

  return (
    <div className="App">
      <HomePage setPage={(newPage) => setPage(newPage)}/>
    </div>
  );
}

export default App;

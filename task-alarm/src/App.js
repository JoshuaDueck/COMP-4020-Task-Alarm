import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

import HomePage from './HomePage';
import MentalTask from './MentalTask';
import PhysicalTask from './PhysicalTask';

function App() {
  const [page, setPage] = useState('home');

  if (page === 'home') {
    return (
      <div className="App">
        <HomePage setPage={setPage} />
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
  }

  return (
    <div className="App">
      <HomePage setPage={(newPage) => setPage(newPage)}/>
    </div>
  );
}

export default App;

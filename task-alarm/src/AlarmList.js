import React, { useState } from 'react';
import AlarmForm from './AlarmForm';
import Alarm from './Alarm';

function AlarmList(props) {
  const [alarms, setAlarms] = useState([]);

  const addAlarm = alarm => {
    console.log(alarm);
    if (!alarm.text || /^\s*$/.test(alarm.text)) {
      return;
    }

    const newAlarms = [alarm, ...alarms];

    setAlarms(newAlarms);
    console.log(...alarms);
  };

  const updateAlarm = (alarmId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setAlarms(prev => prev.map(item => (item.id === alarmId ? newValue : item)));
  };

  const removeAlarm = id => {
    const removedArr = [...alarms].filter(alarm => alarm.id !== id);

    setAlarms(removedArr);
  };

  const completeAlarm = id => {
    let updatedAlarms = alarms.map(alarm => {
      if (alarm.id === id) {
        alarm.isComplete = !alarm.isComplete;
      }
      return alarm;
    });
    setAlarms(updatedAlarms);
  };

  return (
    <>
      <h1>{alarms}</h1>
      {//<AlarmForm onSubmit={addAlarm} />
      }
      
      <Alarm
        alarms={props.name}
        completeAlarm={completeAlarm}
        removeAlarm={removeAlarm}
        updateAlarm={updateAlarm}
      />
    </>
  );
}

export default AlarmList;

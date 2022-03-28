import AlarmForm from './AlarmForm';
import React, { useState } from 'react';

function AlarmNew(props) {

    // const [input, setInput] = useState(props.edit ? props.edit.value : '10:00');  
  
  
    // const handleSubmit = e => {
    //   e.preventDefault();
  
    //   props.onSubmit({
    //     id: Math.floor(Math.random() * 10000),
    //     text: input
    //   });
    //   setInput('');
    // };
  


    const [alarms, setAlarms] = useState([]);

    const addAlarm = alarm => {
      //console.log(alarm);
      if (!alarm.text || /^\s*$/.test(alarm.text)) {
        return;
      }
      props.onSubmit({
            id: Math.floor(Math.random() * 10000),
             text: alarm.text
           });
      const newAlarms = [alarm, ...alarms];
  
      setAlarms(newAlarms);
      console.log(alarms);
    };


    const handleBack = () => {
        window.location.href = './';
    }
    
    return (
        <div id="alarm-new">
            <p>AlarmNew</p>
            <AlarmForm onSubmit={addAlarm} />
            <button onClick={() => handleBack()}>Back</button>
        </div>
    );
}

export default AlarmNew;
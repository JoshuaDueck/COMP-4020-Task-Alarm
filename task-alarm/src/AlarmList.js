import React, { useState } from 'react';
import AlarmForm from './AlarmForm';
import Alarm from './Alarm';
import Modal from 'react-modal';


function AlarmList(props) {
  const [alarms, setAlarms] = useState([]);
  const [show,setShow]=useState(true)
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    //subtitle.style.color = '#f00';
  }
  Modal.setAppElement('#root');

  function closeModal() {
    setIsOpen(false);
  }
  const addAlarm = alarm => {
    if (!alarm.text || /^\s*$/.test(alarm.text)) {
      return;
    }
    console.log(alarm)
    const newAlarms = [alarm, ...alarms];
    closeModal();
    setAlarms(newAlarms);
    console.log(...alarms);
  };

  const updateAlarm = (alarmId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    console.log(newValue);
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
      <div className="App">
      <button onClick={openModal}>Add a new Alarm</button>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <AlarmForm onSubmit={addAlarm}/>
        <button onClick={closeModal}>close</button>
      </Modal>

     {/* <button onClick={()=>setShow(true)} >Show</button>
     <button onClick={()=>setShow(false)} >Hide</button> */}

    </div>

      <Alarm
        alarms={alarms}
        completeAlarm={completeAlarm}
        removeAlarm={removeAlarm}
        updateAlarm={updateAlarm}
      />
    </>
  );
}

export default AlarmList;

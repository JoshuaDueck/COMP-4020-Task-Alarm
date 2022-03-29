import React, { useState } from 'react';
import AlarmForm from './AlarmForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import Modal from 'react-modal';

const Alarm = ({ alarms, completeAlarm, removeAlarm, updateAlarm }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
    autoFocus: true

});
const [modalIsOpen, setIsOpen] = React.useState(false);
function openModal() {
  setIsOpen(true);
}
function afterOpenModal() {
  // references are now sync'd and can be accessed.
  //subtitle.style.color = '#f00';
}

function closeModal() {
  setIsOpen(false);
}
  const submitUpdate = value => {
    updateAlarm(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return (

        <AlarmForm edit={edit} onSubmit={submitUpdate} />
);
  }

  return alarms.map((alarm, index) => (
    <div
      className={alarm.isComplete ? 'alarm-row complete' : 'alarm-row'}
      key={index}
    >
      <div key={alarm.id} onClick={() => completeAlarm(alarm.id)}>
        {alarm.text} {alarm.diff.value} 
      </div>
      <div className='icons'>
        <RiCloseCircleLine
          onClick={() => removeAlarm(alarm.id)}
          className='delete-icon'
        />
        <TiEdit
        
          onClick={() => setEdit({ id: alarm.id, value: alarm.text })     }
          className='edit-icon'
        />
      </div>
    </div>
  ));
};

export default Alarm;

import React, { useState } from 'react';
import AlarmForm from './AlarmForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

const Alarm = ({ alarms, completeAlarm, removeAlarm, updateAlarm }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
    autoFocus: true

});

  const submitUpdate = value => {
    updateAlarm(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <AlarmForm edit={edit} onSubmit={submitUpdate} />;
  }

  return alarms.map((alarm, index) => (
    <div
      className={alarm.isComplete ? 'alarm-row complete' : 'alarm-row'}
      key={index}
    >
      <div key={alarm.id} onClick={() => completeAlarm(alarm.id)}>
        {alarm.text}
      </div>
      <div className='icons'>
        <RiCloseCircleLine
          onClick={() => removeAlarm(alarm.id)}
          className='delete-icon'
        />
        <TiEdit
          onClick={() => setEdit({ id: alarm.id, value: alarm.text })}
          className='edit-icon'
        />
      </div>
    </div>
  ));
};

export default Alarm;

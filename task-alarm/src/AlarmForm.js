import React, { useState, useEffect, useRef } from 'react';
import TimePicker from 'react-time-picker';

function AlarmForm(props)  {
  const [input, setInput] = useState(props.edit ? props.edit.value : '10:00');

  const inputRef = useRef(null);



  const handleSubmit = e => {
          e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className='alarm-form'>
      {props.edit ? (
        <>
          <TimePicker 
            placeholder='Update your item'
            value={input}
            onChange={setInput}
            name='text'
            ref={inputRef}
            className='alarm-input edit'
          />
          <button onClick={handleSubmit} className='alarm-button edit'>
            Update
          </button>
        </>
      ) : (
        <>
          <TimePicker 
            placeholder='Add a alarm'
            value={input}
            onChange={setInput}
            name='text'
            className='alarm-input'
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='alarm-button'>
            Add alarm
          </button>
        </>
      )}
    </form>
  );
}

export default AlarmForm;
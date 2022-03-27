import React, { useState, useEffect, useRef } from 'react';
import TimePicker from 'react-time-picker';
import Modal from 'react-modal';

function AlarmForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '10:00');

  const inputRef = useRef(null);

  const [modalIsOpen, setIsOpen] = React.useState(true);
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


  const handleSubmit = e => {
    closeModal();
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };

  return ( 
<tr>

    <div className="AlarmForm">
    <form onSubmit={handleSubmit} className='alarm-form'>
      {props.edit ? (
        <>
        
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >

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
        <button onClick={closeModal}>close</button>
      </Modal>
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
    </div>
</tr>

  );
}

export default AlarmForm;
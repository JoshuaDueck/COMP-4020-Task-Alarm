import React, { useState, useEffect, useRef, Component } from "react";
import TimePicker from "react-time-picker";
import Modal from "react-modal";
import Select from "react-select";
import { Container } from "react-bootstrap";

function AlarmForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "10:00");
  const [inputDiff, setInputDiff] = useState(
    props.edit ? props.edit.value : "EASY"
  );
  const options = [
    { value: "EASY", label: "EASY" },
    { value: "HARD", label: "HARD" },
  ];

  Modal.setAppElement("#root");

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

  const handleSubmit = (e) => {
    closeModal();
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
      diff: inputDiff,
    });
    setInput("");
    setInputDiff("");
  };

  return (
    <tr>
      <div className="AlarmForm">
        <form onSubmit={handleSubmit} className="alarm-form">
          {props.edit ? (
            <>
              <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
              >
                <div className="rectangle">
                  <TimePicker
                    placeholder="Update your item"
                    value={input}
                    onChange={setInput}
                    name="text"
                    ref={inputRef}
                    className="alarm-input"
                  />

                  <Container className="conta">
                  <div class="wrap">
                      <span>Difficulty</span>
                    </div>

                    <Select
                      className="diffChoice"
                      options={options}
                      value={inputDiff}
                      onChange={setInputDiff}
                    />
                  </Container>
                </div>
                <button onClick={handleSubmit} className="alarm-button">
                  Update
                </button>
              </Modal>
            </>
          ) : (
            <>
              <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
              >
                <div className="rectangle">
                  <TimePicker
                    placeholder="Add a alarm"
                    value={input}
                    onChange={setInput}
                    name="text"
                    className="alarm-input"
                    ref={inputRef}
                    disableClock = "true"
                  />
                  <Container className="conta">
                    <Select
                      className="diffChoice"
                      options={options}
                      value={inputDiff}
                      onChange={setInputDiff}
                    />
                    <div class="wrap">
                      <span>Difficulty</span>
                    </div>
                  </Container>
                </div>
                <div class="vertical-center">

                <button onClick={handleSubmit} className="alarm-button">
                  Add alarm
                </button>
                  </div>

              </Modal>
            </>
          )}
        </form>
      </div>
    </tr>
  );
}

export default AlarmForm;

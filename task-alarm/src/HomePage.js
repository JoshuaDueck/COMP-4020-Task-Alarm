import Header from "./Header";
import AlarmList from "./AlarmList";
import React, { useState , Component} from "react";

function HomePage(props) {
    const [pageState, setPageState] = useState('viewing-alarms');
    const [alarmToEdit, setAlarmToEdit] = useState(null);
    const [input, setInput] = useState('10:00');

    const handleBack = () => {
        setPageState('viewing-alarms');
    }

    const triggerMentalTasks = () => {
        props.setPage('mental-tasks');
    }

    const triggerPhysicalTasks = () => {
        props.setPage('physical-tasks');
    }

    const addAlarm = () => {
        setPageState('adding-alarm');
    }

    const saveAlarm = (alarm) => {
        console.log(alarm);
        
        if (alarm.time !== "") {
            props.setAlarmList([...props.alarmList, alarm]);
        }
        setAlarmToEdit(null);
        setPageState('viewing-alarms');
    }

    const editAlarm = (alarmId) => {
        console.log("Editing alarm! " + alarmId);
        setPageState('editing-alarm');
        setAlarmToEdit(alarmId);
    }

    const saveEditedAlarm = (alarm) => {
        console.log(alarm);

        if (alarm.time !== "") {
            props.setAlarmList(props.alarmList.map(alarmItem => {
                if (alarmItem.id === alarm.id) {
                    return alarm;
                } else {
                    return alarmItem;
                }
            }));
        }
        setAlarmToEdit(null);
        setPageState('viewing-alarms');
    }

    const deleteAlarm = (alarmId) => {
        console.log("Deleting alarm! " + alarmId);
        props.setAlarmList(props.alarmList.filter(alarm => alarm.id !== alarmId));
    }

    if (pageState === 'viewing-alarms') {
        return (
            <div id="homepage">
                <Header title="Alarms" right={<button className="new-alarm-button" onClick={addAlarm}>+</button>}/>
                <AlarmList alarms={props.alarmList} onEdit={(alarmId) => editAlarm(alarmId)} onDelete={(alarmId) => deleteAlarm(alarmId)}/>
                <table className="footer-table">
                    <tr>
                        <td>
                            <button className="task-button" onClick={() => triggerMentalTasks()}>Practice Mental Tasks</button>
                        </td>
                        <td>
                            <button className="task-button" onClick={() => triggerPhysicalTasks()}>Practice Physical Tasks</button>
                        </td>
                    </tr>
                </table>
            </div>
        );
    } else if (pageState === 'adding-alarm') {
        return (
            <div className="alarmEdit">
                <Header title="Add Alarm" />
                <div className="rectBox">

                <form className="add-alarm-form">
                <div className="lowerBox">

                    <label>
                        <input className="time-input" type="time" name="time" defaultValue='00:00'/>
                    </label>
                    <br/>
                    <br/>
                    <div className="lowerBox">
                    </div>

                    <li>
                        <select className="difficulty-input" name="difficulty" >
                            <option value="Easy">Easy</option>
                            <option value="Hard">Hard</option>
                        </select>
                    </li>
                    </div>
                </form>
                </div>
                <div className="bottom-button">
                <button  className="bottom-button-element"onClick={() => saveAlarm({id: Math.floor(Math.random()*1000000), time: document.querySelector('input[name="time"]').value, type: document.querySelector('select[name="difficulty"]').value})}>Save</button>
                <button className="bottom-button-element back" onClick={() => handleBack()}>Cancel</button>

                </div>
            </div>
        );
    } else if (pageState === 'editing-alarm') {
        let alarmObj = props.alarmList.find((alarm) => alarm.id === alarmToEdit);
        return (
            <div>
                <Header title="Edit Alarm" />
                <div className="rectBox">

                <form className="add-alarm-form">
                    <label>
                        <input className="time-input" type="time" name="time" defaultValue={ alarmObj.time }/>
                    </label>
                    <br/>
                    <br/>
                    <label>
                    <div className="lowerBox">
                    <li className="difficultText">Difficulty</li>

                    <li>
                        <select className="difficulty-input" name="difficulty" >
                            <option value="Easy">Easy</option>
                            <option value="Hard">Hard</option>
                        </select>
                    </li>
                    </div>
                    </label>
                
                </form>
                </div>
                <div className="bottom-button">
                        <button className="bottom-button-element" onClick={() => saveEditedAlarm({id: alarmObj.id, time: document.querySelector('input[name="time"]').value, type: document.querySelector('select[name="difficulty"]').value})}>Save</button>
                        <button className="bottom-button-element back" onClick={() => handleBack()}>Cancel</button>

                </div>
            </div>
        );
    }
}

export default HomePage;
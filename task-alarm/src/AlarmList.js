import { BsThreeDots, BsTrash } from 'react-icons/bs';
import React, { useState } from 'react';

function AlarmList(props) {
    const [value, setValue] = useState('yes');

    const getHours = (time) => {
        return time.split(":")[0];
    }

    const getMinutes = (time) => {
        return time.split(":")[1];
    }
    
    const timeConvert = (time) => {
        let hours = getHours(time);
        let minutes = getMinutes(time);
        let ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12;
        let strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }

    return (
        <div className="alarm-list">
            <table className="alarm-list-table">
                { props.alarms.map((alarm) => {
                        return (
                            <tr className="alarm-table-row" key={alarm.id}>
                                <td className="alarm-table-cell"><strong>{timeConvert(alarm.time)}</strong></td>

                                <td className="alarm-table-cell">
                                    <td className='AlarmDiff'>
                                    <li className="strongAlarmPage">Difficulty:</li>
                                    <li className="strongAlarmPage strong">{alarm.type}</li>
                                  
                                    </td>
                                </td>
                                <td className="alarm-table-action-cell">
                                <label class="switch">
                                    <input type="checkbox"></input>
                                    <span class="slider round"></span>
                                </label>
                                </td>
                                <td className="alarm-table-action-cell">
                                    <button className="alarm-action" onClick={() => props.onDelete(alarm.id)}><BsTrash  /></button>
                                </td>
                                <td className="alarm-table-action-cell">
                                    <button className="alarm-action" onClick={() => props.onEdit(alarm.id)}><BsThreeDots  /></button>
                                </td>
                            </tr>
                        );
                })}
            </table>
        </div>
    );
}

export default AlarmList;
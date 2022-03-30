function AlarmList(props) {
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
                                <td className="alarm-table-cell">Difficulty: <strong>{alarm.type}</strong></td>
                                <td className="alarm-table-action-cell">
                                    <input className="alarm-toggle" type="checkbox"></input>
                                </td>
                                <td className="alarm-table-action-cell">
                                    <button className="alarm-action" onClick={() => props.onDelete(alarm.id)}>Delete</button>
                                </td>
                                <td className="alarm-table-action-cell">
                                    <button className="alarm-action" onClick={() => props.onEdit(alarm.id)}>Edit</button>
                                </td>
                            </tr>
                        );
                })}
            </table>
        </div>
    );
}

export default AlarmList;
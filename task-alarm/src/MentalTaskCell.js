function MentalTaskCell(props) {
    if (props.isSelected) {
        return (
            <td className="mental-task-cell-selected" onClick={() => props.handleCellClick()}>
                {props.number}
            </td>
        );
    } else {
        return (
            <td className="mental-task-cell" onClick={() => props.handleCellClick()}>
                {props.number}
            </td>
        );
    }
}

export default MentalTaskCell;
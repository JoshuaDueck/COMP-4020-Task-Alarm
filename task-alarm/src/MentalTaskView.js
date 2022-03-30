import React, { useEffect, useState } from 'react';
import MentalTaskCell from './MentalTaskCell';

function MentalTaskView(props) {
    const [selectedIndices, setSelectedIndices] = useState([]);

    const handleCellClick = (index) => {
        if (selectedIndices.includes(index)) {
            setSelectedIndices(selectedIndices.filter(i => i !== index));
        } else {
            setSelectedIndices([...selectedIndices, index]);
        }
    }

    const handleSubmit = () => {
        props.handleSubmit(selectedIndices);
        setSelectedIndices([]);
    }

    return (
        <div className="mental-task-view">
            <p className="target-message">Select numbers that add up to</p>
            <p className="target-number">{props.target}</p>
            <table className="mental-task-table">
                <tr className="mental-task-row">
                    <MentalTaskCell number={props.numbers[0]} isSelected={ selectedIndices.includes(0) } handleCellClick={() => handleCellClick(0)} />
                    <MentalTaskCell number={props.numbers[1]} isSelected={ selectedIndices.includes(1) } handleCellClick={() => handleCellClick(1)} />
                </tr>
                <tr className="mental-task-row">
                    <MentalTaskCell number={props.numbers[2]} isSelected={ selectedIndices.includes(2) } handleCellClick={() => handleCellClick(2)} />
                    <MentalTaskCell number={props.numbers[3]} isSelected={ selectedIndices.includes(3) } handleCellClick={() => handleCellClick(3)} />
                </tr>
            </table>
            <button className="mental-task-submit-button" onClick={() => handleSubmit()}>Submit</button>
        </div>
    );
}

export default MentalTaskView;
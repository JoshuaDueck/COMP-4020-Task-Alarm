import React, { useEffect, useState } from 'react';
import Header from './Header';
import Time from './Time';
import MentalTaskView from './MentalTaskView';

function MentalTask(props) {
    const [secondsRemaining, setSecondsRemaining] = useState(300);
    const [taskState, setTaskState] = useState('running');

    const [currStage, setCurrStage] = useState(0);
    const [targetNumber, setTargetNumber] = useState(29);
    const [numbers, setNumbers] = useState([18,12,27,11]);
    const [numCorrect, setNumCorrect] = useState(0);
    const [numToWin, setNumToWin] = useState(5);

    const hardcodedStages = [
        {
            target: 27,
            numbers: [15, 7, 3, 9]
        },
        {
            target: 18,
            numbers: [4, 9, 2, 7]
        },
        {
            target: 30,
            numbers: [17, 7, 6, 21]
        },
        {
            target: 90,
            numbers: [28, 36, 19, 54]
        },
        {
            target: 41,
            numbers: [21, 14, 6, 7]
        }
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            if (secondsRemaining > 0) {
                setSecondsRemaining(secondsRemaining - 1);
            } else if (taskState === 'running') {
                setTaskState('time-out');
                props.setPage('restarting-alarm');
            }
        }, 1000);
        return () => clearInterval(interval);
    });

    const handleBack = () => {
        window.location.href = './';
    }

    const handleSubmit = (selectedIndices) => {
        let sum = 0;

        for (let i = 0; i < selectedIndices.length; i++) {
            sum += numbers[selectedIndices[i]];
        }

        setCurrStage((currStage + 1) % hardcodedStages.length);
        setNumbers(hardcodedStages[currStage].numbers);
        setTargetNumber(hardcodedStages[currStage].target);

        if (sum === targetNumber) {
            if (numCorrect + 1 === numToWin) {
                props.setPage('success');
            }
            setNumCorrect(numCorrect + 1);
        }
    }

    return (
        <div id="mental-task">
            <Header left={<button onClick={() => handleBack()}>Back</button>} title={ "Tasks Correct: "+numCorrect+"/"+numToWin } right={<Time seconds={secondsRemaining} />} />
            <MentalTaskView numbers={numbers} target={targetNumber} handleSubmit={(selectedIndices) => handleSubmit(selectedIndices)}/>
        </div>
    );
}

export default MentalTask;
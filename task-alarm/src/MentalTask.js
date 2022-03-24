import React, { useEffect, useState } from 'react';
import Header from './Header';
import Time from './Time';

function MentalTask() {
    const [secondsRemaining, setSecondsRemaining] = useState(300);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setSecondsRemaining(secondsRemaining - 1);
        }, 1000);
        return () => clearInterval(interval);
    })

    const handleBack = () => {
        window.location.href = './';
    }

    return (
        <div id="mental-task">
            <Header left={<button onClick={() => handleBack()}>Back</button>} title="Mental Task" right={<Time seconds={secondsRemaining} />} />
        </div>
    );
}

export default MentalTask;
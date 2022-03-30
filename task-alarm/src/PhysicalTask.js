import React, { useEffect, useState } from 'react';
import Header from './Header';
import Time from './Time';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobile } from "@fortawesome/free-solid-svg-icons";


function PhysicalTask(props) {
    const [secondsRemaining, setSecondsRemaining] = useState(300);
    const [doShake, setDoShake] = useState(true);
    const [secondsInTask, setSecondsInTask] = useState(1);
    const goalSeconds = 60;

    useEffect(() => {
        const interval = setInterval(() => {
            setSecondsRemaining(secondsRemaining - 1);
            setSecondsInTask(secondsInTask + 1);

            if (secondsInTask >= goalSeconds) {
                props.setPage('success');
            }

            if (doShake) {
                if (secondsInTask % 10 === 0) {
                    setDoShake(false);
                }
            } else {
                if (secondsInTask % 5 === 0) {
                    setDoShake(true);
                }
            }
        }, 1000);
        return () => clearInterval(interval);
    })


    const handleBack = () => {
        props.setPage('restarting-alarm');
    }

    if (doShake) {
        return (
            <div className="physical-task">
                <Header left={<button onClick={() => handleBack()}>Back</button>} title="Physical Task" right={<Time seconds={secondsRemaining} />} />
                <div className="phnImg"><FontAwesomeIcon icon={faMobile} fontSize="200px" shake> </FontAwesomeIcon> </div>
                <div className="command"><h2>KEEP SHAKING!</h2></div>
                <div className="shakeTimer">{secondsInTask}/{goalSeconds} <br/>seconds</div>
            </div>
        );
    } else {
        return (
            <div className="physical-task">
                <Header left={<button onClick={() => handleBack()}>Back</button>} title="Physical Task" right={<Time seconds={secondsRemaining} />} />
                <div className="redImg"><FontAwesomeIcon icon={faMobile} fontSize="200px"> </FontAwesomeIcon> </div>
                <div className="command"><h2>WAIT!</h2></div>
                <div className="shakeTimer">{secondsInTask}/{goalSeconds} <br/>seconds</div>
            </div>
        );
    }


}

export default PhysicalTask;
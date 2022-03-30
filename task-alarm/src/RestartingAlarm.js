import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useEffect, useState } from "react";
import Time from "./Time";

function RestartingAlarm(props) {
    const [secondsRemaining, setSecondsRemaining] = useState(30);
    
    useEffect(() => {
        const interval = setInterval(() => {
            if (secondsRemaining > 0) {
                setSecondsRemaining(secondsRemaining - 1);
            }
        }, 1000);
        return () => clearInterval(interval);
    });
    
    return (
        <div className="restarting-alarm">
            <p className="restarting-alarm-message">Task Failed</p>
            <FontAwesomeIcon icon={faXmark} size="5x" />
            <p className="restarting-alarm-message">Restarting alarm:</p>
            <Time className="restart-timer" seconds={secondsRemaining} />
            <button className="restarting-alarm-button" onClick={() => props.setPage('home')}>Home</button>
        </div>
    );
}

export default RestartingAlarm;
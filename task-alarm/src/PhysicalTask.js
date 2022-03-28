import React, { useEffect, useState } from 'react';
import Header from './Header';
import Time from './Time';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobile} from "@fortawesome/free-solid-svg-icons";


function PhysicalTask() {
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
    var instruction;
    const setPhnColor= () => {
        if(secondsRemaining <=295 && secondsRemaining >290) 
        {
            instruction="Stop!";
            return <div className="redImg"><FontAwesomeIcon icon={faMobile} fontSize="200px"> </FontAwesomeIcon> </div>
        }
        else
        {
            instruction="Shake your phone";
            return <div className="phnImg"><FontAwesomeIcon icon={faMobile} fontSize="200px" shake> </FontAwesomeIcon> </div>
        }
    }

    return (
        <div id="physical-task">
            <Header left={<button onClick={() => handleBack()}>Back</button>} title="Pysical Task" right={<Time seconds={secondsRemaining} />} />
            {setPhnColor()}
            <div className="command">{<h2>{instruction}</h2>} </div>
            <div className="shakeTimer">{<Time seconds={secondsRemaining-240}> </Time>} </div>
      

        </div>
    );
}

export default PhysicalTask;
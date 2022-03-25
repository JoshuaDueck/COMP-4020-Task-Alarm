function Time(props) {
    
    if (props.seconds > 0) {
        return (
            <p>{ Math.floor(props.seconds/60) }:{ (props.seconds%60).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false }) }</p>
        );
    } else {
        return (
            <p>Time's up!</p>
        ); 
    }
}

export default Time;
function Time(props) {
    return (
        <span>{ Math.floor(props.seconds/60) }:{ (props.seconds%60).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false }) }</span>
    );
}

export default Time;
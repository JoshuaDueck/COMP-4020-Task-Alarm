function Time(props) {
    return (
        <span className={ props.className }>{ Math.floor(props.seconds/60) }:{ (props.seconds%60).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false }) }</span>
    );
}

export default Time;
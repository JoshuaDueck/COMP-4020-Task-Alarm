function RestartingAlarm(props) {
    const handleBack = () => {
        window.location.href = './';
    }

    return (
        <div className="restarting-alarm">
            <p className="restarting-alarm-message">Task failed.</p>
            <p className="restarting-alarm-message">Re-engaging alarm.</p>
            <button className="restarting-alarm-button" onClick={() => props.setPage('home')}>Home</button>
            <button className="restarting-alarm-button" onClick={handleBack}>Try again.</button>
        </div>
    );
}

export default RestartingAlarm;
function TimeOutPage(props) {
    return (
        <div className="time-out-page">
            <p>Time's up!</p>
            <button onClick={() => props.setPage('home')}>Back to home</button>
        </div>
    );
}

export default TimeOutPage;
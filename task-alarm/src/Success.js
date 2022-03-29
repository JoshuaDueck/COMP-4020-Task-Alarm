function Success(props) {
    return (
        <div className="success">
            <p className="success-message">Well done!</p>
            <p className="success-message">Alarm disabled.</p>
            <button className="success-button" onClick={() => props.setPage('home')}>Home</button>
        </div>
    );
}

export default Success;
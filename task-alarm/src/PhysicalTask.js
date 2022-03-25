function PhysicalTask() {
    const handleBack = () => {
        window.location.href = './';
    }
    
    return (
        <div id="physical-task">
            <p>Physical Task</p>
            <button onClick={() => handleBack()}>Back</button>
        </div>
    );
}

export default PhysicalTask;
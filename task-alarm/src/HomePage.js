import AlarmList from './AlarmList';

function HomePage(props) {
    const triggerMentalTasks = () => {
        props.setPage('mental-tasks');
    }

    const triggerPhysicalTasks = () => {
        props.setPage('physical-tasks');
    }

    return (
        <div id="homepage">
            <p>Home page</p>
            
            <AlarmList/>
            <table className="footer-table">
                <tr>
                    <td>
                        <button className="task-button" onClick={() => triggerMentalTasks()}>Practice Mental Tasks</button>
                    </td>
                    <td>
                        <button className="task-button" onClick={() => triggerPhysicalTasks()}>Practice Physical Tasks</button>
                    </td>
                </tr>
            </table>
        </div>
    );
}

export default HomePage;
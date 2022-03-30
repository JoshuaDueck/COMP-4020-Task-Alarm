import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function Success(props) {
    return (
        <div className="success">
            <p className="success-message">Well done!</p>
            <FontAwesomeIcon icon={faCheck} size="5x" />
            <p className="success-message">Alarm disabled.</p>
            <button className="success-button" onClick={() => props.setPage('home')}>Home</button>
        </div>
    );
}

export default Success;
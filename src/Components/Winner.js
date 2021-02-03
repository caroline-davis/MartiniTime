/* eslint-disable import/no-anonymous-default-export */
import { useHistory } from "react-router-dom";
import './Styling/Winner.css';

export default ({ winnerName }) => {

    let history = useHistory();

    function handleClick() {
        history.push("/");
    }

    return (
        <div className="page-container">
            <div>{winnerName}</div>
            <button className="back" type="button" onClick={handleClick}>🏠</button>
        </div>
    )
} 
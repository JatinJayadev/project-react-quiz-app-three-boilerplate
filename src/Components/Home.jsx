import './Home.css'
import { Link } from "react-router-dom";

function HomeComponent() {
    return (
        <div className='main-container'>
            <p>Quiz App</p>
            <Link to="/quiz">
                <button className='play-btn'>Play</button>
            </Link>
        </div>
    )
}

export default HomeComponent
import './Result.css'
import { Link } from 'react-router-dom'

function ResultComponent() {
    return (
        <div className='result-container'>
            <h2>Result</h2>
            <div className='box' >
                <h3>You need more practice!</h3>
                <h1>Your score is 20%</h1>
                <div className='details' >
                    <p>Total number of questions</p>
                    <p>15</p>
                </div>
                <div className='details'>
                    <p>Number of attempted questions</p>
                    <p>9</p>
                </div>
                <div className='details'>
                    <p>Number of correct answers</p>
                    <p>3</p>
                </div>
                <div className='details'>
                    <p>Number of wrong answers</p>
                    <p>6</p>
                </div>
            </div>

            <div className='footer-btns' >
                <Link to="/quiz">
                    <button className='playagain'>Play again</button>
                </Link>
                <Link to="/">
                    <button className='back'>Back to home</button>
                </Link>
            </div>
        </div>
    )
}

export default ResultComponent
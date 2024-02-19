import './Result.css'
import { Link } from 'react-router-dom'

function ResultComponent() {
    const score = localStorage.getItem("Score")
    const attempts = localStorage.getItem("Attempts")
    const correct = localStorage.getItem("Correct")

    return (
        <div className='result-container'>
            <h2>Result</h2>
            <div className='box' >
                <h3>You need more practice!</h3>
                <h1>Your score is {score}</h1>
                <div className='details' >
                    <p>Total number of questions</p>
                    <p>15</p>
                </div>
                <div className='details'>
                    <p>Number of attempted questions</p>
                    <p>{attempts}</p>
                </div>
                <div className='details'>
                    <p>Number of correct answers</p>
                    <p>{correct}</p>
                </div>
                <div className='details'>
                    <p>Number of wrong answers</p>
                    <p>{attempts - correct}</p>
                </div>
            </div>

            <div className='footer-btns' >
                <Link to="/quiz">
                    <button className='playagain'>Play again</button>
                    {localStorage.clear()}
                </Link>
                <Link to="/">
                    <button className='back'>Back to home</button>
                </Link>
            </div>
        </div>
    )
}

export default ResultComponent
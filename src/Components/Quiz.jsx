import './Quiz.css'
import '../resources/quizQuestion'
import { useState } from 'react'
import question from '../resources/quizQuestion'
import { Link } from "react-router-dom";

function QuizComponents() {
    const [state, setState] = useState(0)

    console.log(question[state].question)

    const handleClickPrev = () => {
        if (state == 0) {
            setState(14)
        } else {
            setState(state - 1)
        }
        console.log(state)
    }

    const handleClickNext = () => {
        if (state == 14) {
            setState(0)
        } else {
            setState(state + 1)
        }
        console.log(state)
    }

    const handleExit = () => {
        alert("Do you want to quit")
        setState(0)
        console.log(state)
    }

    const handleClickFinish = () => {
        setState(0)
    }

    return (
        <div className='container'>
            <h1>Question</h1>

            <p className='notag'>{state + 1} of {question.length}</p>

            <p className='questiontag'>{question[state].question}</p>

            <div className='optcont'>
                <button>{question[state].optionA}</button>
                <button>{question[state].optionB}</button>
                <button>{question[state].optionC}</button>
                <button>{question[state].optionD}</button>
            </div>

            <div className='footer'>
                <button className='prev btn' onClick={handleClickPrev}>Previous</button>
                <button className='next btn' onClick={handleClickNext}>Next</button>
                <button className='quit btn' onClick={handleExit}>Quit</button>
                <Link to="/result" >
                    <button className='finish btn' onClick={handleClickFinish}>Finish</button>
                </Link>
            </div>
        </div>

    )
}

export default QuizComponents
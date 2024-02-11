import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SQuiz() {
    const home = useNavigate()
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [sure, setsure] = useState(null)
    const [show, setshow] = useState(false)
    const question = [
        {
            qtext: 'What is the capital of France?',
            answeroption: [
                { atext: 'Paris', iscorrect: true },
                { atext: 'Rome', iscorrect: false },
                { atext: 'Berlin', iscorrect: false },
                { atext: 'Madrid', iscorrect: false }
            ]
        },
        {
            qtext: 'What is the capital of India?',
            answeroption: [
                { atext: 'Rajasthan', iscorrect: false },
                { atext: 'Punjab', iscorrect: false },
                { atext: 'Delhi', iscorrect: false },
                { atext: 'New Delhi', iscorrect: true }
            ]
        }
    ]

    const check = () => {
        const selected = question[currentQuestion].answeroption[sure];
        if (selected.iscorrect) {
            setScore(score + 1)
        }
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < question.length) {
            setCurrentQuestion(nextQuestion)
            setsure(null)
        }
        else {
            setshow(true)
        }
    }

    const rest = () => {
        setCurrentQuestion(0);
        setScore(0);
        setshow(false)
        setsure(null)
    }
    const exit = () => {
        home("/")
    }
    return (
        <>
            <button className="ebu" onClick={exit}>Home</button>
            {
                show ? (
                    <div className="score">
                        <h3>Your Score is {score} out of {question.length}</h3>
                        <div className="bu"><button onClick={rest}>Restart Quiz</button></div>
                    </div>
                ) : (
                    <>
                        <div className="question">
                            <span>Question {currentQuestion + 1}</span>/{question.length} :-
                            <h2>{question[currentQuestion].qtext}</h2>
                        </div>
                        <div className="answer">
                            {question[currentQuestion].answeroption.map((data, index) => {
                                return (
                                    <>
                                        <input onChange={()=>{setsure(index)}} name="answeroption" checked={sure === index} id={`option${index}`} type="radio" />
                                        <label htmlFor={`option${index}`} >{data.atext}</label> <br />
                                    </>
                                )
                            })
                            }
                            <button onClick={check}>Submit</button>
                        </div>
                    </>
                )
            }
        </>
    )
}
export { SQuiz }
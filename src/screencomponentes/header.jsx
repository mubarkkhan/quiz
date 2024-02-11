import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
    const quiz = useNavigate()
    const click = ()=>{
        quiz("./quiz")
    }
    return (
        <>
            <div className="display">
                <h1 style={{ color: "#1e9495", fontFamily: "cursive", fontWeight: "700" }}>Welcome to QUIZ store</h1>
                <button onClick={click}>Start Quiz</button>
            </div>
        </>
    )
}
export { Header }
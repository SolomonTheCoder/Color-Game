import { useState } from "react"
import "./GuessColor.css"

const GuessColor = () => {
    const color = {
        "white": ["#ffffff", "#f2f2f2", "#e6e6e6", "#d6d6d6", "#cccccc", "#b3b3b3"],
        "red": ["#ff0000", "#e60000", "#cc0000", "#b30000", "#990000", "#800000"],
        "blue": ["#0000ff", "#0000e6", "#0000cc", "#0000b3", "#000099", "#000080"],
        "black": ["#000000", "#1a1a1a", "#333333", "#4d4d4d", "#666666", "#808080"],
        "green": ["#008000", "#006f00", "#005f00", "#004f00", "#003f00", "#003300"]
    }

    const mainColors = Object.keys(color)
    const randomMainColor = () => mainColors[Math.floor(Math.random() * mainColors.length)]

    const [changeColor, setChangeColor] = useState(randomMainColor())
    const [score, setScore] = useState(0)
    const [message, setMessage] = useState("")
    const [incorrect] = useState({ color: "red" })
    const [correct] = useState({ color: "green" })
    const [animate, setAnimate] = useState(false)
    const [display, setDisplay] = useState(false)


    const checkColor = (selectedColor) => {
        setAnimate(false)
        setTimeout(() =>
            setAnimate(true), 10);

        selectedColor === color[changeColor][0] ?
            (setMessage("Correct Guess"),
                setScore((prevScore) => prevScore + 1)) :
            setMessage("Wrong Guess")


        setDisplay(true)
        setTimeout(() => {
            setDisplay(false)
            setChangeColor(mainColors[Math.floor(Math.random() * mainColors.length)])
        }, 2000);
    }

    const resetGame = () => {
        setScore(0)
        setMessage("")
        setChangeColor(randomMainColor())
    }

    const randomColors = [...color[changeColor]].sort(() => Math.random() - 0.5)

    return (
        <>
            <div className="container">
                <div className="gameInstruction" data-testid="gameInstructions">
                    <h1>Guess the Correct Color</h1>
                </div>
                <div className="colorBox" data-testid="colorBox" style={{ backgroundColor: color[changeColor][0] }}>
                </div>
                <div className="Btn">
                    {randomColors.map((shade, index) =>
                    (<button key={index} onClick={() => checkColor(shade)} style={{ background: shade }}>
                    </button>)
                    )}
                </div>
                <div className={`gameStatus ${animate ? "fade" : ""}`} style={{ display: display ? "flex" : "none" }} data-testid="gameStatus">
                    <p style={{ color: message === "Correct Guess" ? correct.color : incorrect.color }}>{message}</p>
                </div>
                <div className="Score" data-testid="score">
                    <p>{score}</p>
                </div>
                <button className="ResetBtn" data-testid="newGameButton" onClick={resetGame}>
                    Restart
                </button>
            </div>
        </>
    )
}

export default GuessColor
import { useState } from "react";
import styles from "../styles/Game.module.css";
import { calculateWinner } from "../utils/game";
import Board from "./Board";

export default function Game() {
  const [history, setHistory] = useState([
    {
      squares: Array(9).fill(null),
    },
  ]);
  const [dogIsNext, setDogIsNext] = useState(true);
  const [stepNumber, setStepNumber] = useState(0);

  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);
  const nextPlayer = dogIsNext ? "🐶" : "🐭";

  function handleClick(i: number) {
    const currentHistory = history.slice(0, stepNumber + 1);

    if (winner || current.squares[i]) {
      return;
    }
    const newSquares = [...current.squares];
    newSquares[i] = nextPlayer;
    setHistory([...currentHistory, { squares: newSquares }]);
    setDogIsNext(!dogIsNext);
    setStepNumber(currentHistory.length);
  }

  function jumpTo(step) {
    setStepNumber(step);
    setDogIsNext(step % 2 === 0);
  }

  const status = winner ? `Winner: ${winner}` : `Next player: ${nextPlayer}`;

  const moves = history.map((step, move) => {
    const description = move ? `Go to move # ${move}` : "Go to game start";
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });
  return (
    <div className={styles.game}>
      <div className={styles.gameBoard}>
        <Board squares={current.squares} onClick={(i) => handleClick(i)} />
      </div>
      <div className={styles.gameInfo}>
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

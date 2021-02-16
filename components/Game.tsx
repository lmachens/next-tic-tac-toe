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
  const current = history[history.length - 1];
  const winner = calculateWinner(current.squares);
  const nextPlayer = dogIsNext ? "🐶" : "🐭";

  function handleClick(i: number) {
    if (winner || current.squares[i]) {
      return;
    }
    const newSquares = [...current.squares];
    newSquares[i] = nextPlayer;
    setHistory([...history, { squares: newSquares }]);
    setDogIsNext(!dogIsNext);
  }

  const status = winner ? `Winner: ${winner}` : `Next player: ${nextPlayer}`;

  return (
    <div className={styles.game}>
      <div className={styles.gameBoard}>
        <Board squares={current.squares} onClick={(i) => handleClick(i)} />
      </div>
      <div className={styles.gameInfo}>
        <div>{status}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
}

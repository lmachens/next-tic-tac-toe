import { useState } from "react";
import styles from "../styles/Board.module.css";
import Square from "./Square";

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [dogIsNext, setDogIsNext] = useState(true);

  function handleClick(i: number) {
    const newSquares = [...squares];
    newSquares[i] = dogIsNext ? "🐶" : "🐭";
    setSquares(newSquares);
    setDogIsNext(!dogIsNext);
  }

  function renderSquare(i: number) {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />;
  }

  const status = `Next player: ${dogIsNext ? "🐶" : "🐭"}`;

  return (
    <div>
      <div className={styles.status}>{status}</div>
      <div className={styles.boardRow}>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className={styles.boardRow}>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className={styles.boardRow}>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

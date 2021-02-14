import styles from "../styles/Game.module.css";
import Board from "./Board";

export default function Game() {
  return (
    <div className={styles.game}>
      <div className={styles.gameBoard}>
        <Board />
      </div>
      <div className={styles.gameInfo}>
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
}

import { ReactNode } from "react";
import styles from "../styles/Square.module.css";

type Props = {
  value: ReactNode;
  onClick?(): void;
};
export default function Square(props: Props) {
  return (
    <button className={styles.square} onClick={() => props.onClick()}>
      {props.value}
    </button>
  );
}

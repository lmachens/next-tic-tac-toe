import { ReactNode } from "react";
import styles from "../styles/Square.module.css";

type Props = {
  value: ReactNode;
};
export default function Square(props: Props) {
  return <button className={styles.square}>{/* TODO */}</button>;
}

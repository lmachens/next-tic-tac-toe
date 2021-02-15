import { ReactNode, useState } from "react";
import styles from "../styles/Square.module.css";

type Props = {
  value: ReactNode;
};
export default function Square(props: Props) {
  const [value, setValue] = useState(null);

  return (
    <button className={styles.square} onClick={() => setValue("🐶")}>
      {value}
    </button>
  );
}

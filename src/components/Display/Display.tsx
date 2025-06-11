import React from "react";
import styles from "./display.module.css";

interface DisplayProps {
  showInput: string;
}

const Display: React.FC<DisplayProps> = ({ showInput }) => {
  return (
    <div className={styles.display}>
      <input type="text" readOnly value={showInput} />
    </div>
  );
};

export default Display;

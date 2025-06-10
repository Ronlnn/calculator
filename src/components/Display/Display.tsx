import React from "react";
import styles from "./display.module.css";

const Display: React.FC = ({ showInput }) => {
  return (
    <div className={styles.display}>
      <input type="text" readOnly value={showInput} />
    </div>
  );
};

export default Display;

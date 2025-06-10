import React from "react";
import styles from "./display.module.css";

const Display: React.FC = () => {
  return (
    <div className={styles.display}>
      <input type="text" readOnly />
    </div>
  );
};

export default Display;

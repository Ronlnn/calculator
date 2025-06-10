import React from "react";
import styles from "./button.module.css";

const Button: React.FC = ({ value, handleInput, isOrange }) => {
  const buttonClass = `${styles.button} ${isOrange ? styles.orange : ""}`;

  return (
    <button className={buttonClass} onClick={() => handleInput(value)}>
      {value}
    </button>
  );
};

export default Button;

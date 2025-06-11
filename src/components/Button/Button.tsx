import React from "react";
import styles from "./button.module.css";

interface ButtonsProps {
  value: string;
  handleInput: (value: string) => void;
  isOrange?: boolean;
}

const Button: React.FC<ButtonsProps> = ({ value, handleInput, isOrange }) => {
  const buttonClass = `${styles.button} ${isOrange ? styles.orange : ""}`;

  return (
    <button className={buttonClass} onClick={() => handleInput(value)}>
      {value}
    </button>
  );
};

export default Button;

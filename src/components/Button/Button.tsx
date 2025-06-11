import React, { useState } from "react";
import styles from "./button.module.css";

interface ButtonsProps {
  value: string;
  handleInput: (value: string) => void;
  isOrange?: boolean;
  active?: boolean;
}

const Button: React.FC<ButtonsProps> = ({
  value,
  handleInput,
  isOrange,
  active,
}) => {
  const [activeBtn, setActiveBtn] = useState(false);
  const buttonClass = `${styles.button} ${isOrange ? styles.orange : ""} ${
    active ? styles.active : ""
  }${activeBtn ? styles.active : ""}`;

  const handleClick = () => {
    setActiveBtn(true);
    handleInput(value);
    setTimeout(() => setActiveBtn(false), 150);
  };
  return (
    <button className={buttonClass} onClick={handleClick}>
      {value}
    </button>
  );
};

export default Button;

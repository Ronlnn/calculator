import React, { useEffect } from "react";
import styles from "./keyboard.module.css";
import Button from "../Button/Button";
import { buttons } from "../../helpers/buttons";

const Keyboard: React.FC = ({ handleInput, input, setInput }) => {
  //Ввод клавиатуры
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const { key } = event;
      if (/[0-9]/.test(key)) {
        handleInput(key);
      } else if (["+", "-", "*", "/"].includes(key)) {
        handleInput(key);
      } else if (key === "Enter") {
        handleInput("=");
      } else if (key === "Escape") {
        handleInput("AC");
      } else if (key === "." || key === ",") {
        handleInput(",");
      } else if (key === "Backspace") {
        setInput(input => input.slice(0, -1));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [input]);
  return (
    <div className={styles.keyboard}>
      {buttons.map(btn => (
        <Button
          key={btn.value}
          value={btn.value}
          handleInput={handleInput}
          isOrange={btn.isOrange}
        />
      ))}
    </div>
  );
};

export default Keyboard;

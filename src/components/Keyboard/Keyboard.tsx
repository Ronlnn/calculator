import React, { useEffect, useState } from "react";
import styles from "./keyboard.module.css";
import Button from "../Button/Button";
import { buttons } from "../../helpers/buttons";
import type { ButtonsConf } from "../../helpers/buttons";

interface KeyboardProps {
  handleInput: (value: string) => void;
}

const Keyboard: React.FC<KeyboardProps> = ({ handleInput }) => {
  const [activeKey, setActiveKey] = useState<string | null>(null);
  //Ввод клавиатуры
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      let key = event.key;
      if (key === "Enter") key = "=";
      else if (key === "Escape") key = "AC";
      else if (key === "." || key === ",") key = ",";

      const isValidKey =
        /[0-9]/.test(key) || ["+", "-", "*", "/", "=", "AC", ","].includes(key);

      if (isValidKey) {
        setActiveKey(key);
        handleInput(key);
        setTimeout(() => setActiveKey(null), 150);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleInput]);
  return (
    <div className={styles.keyboard}>
      {buttons.map((btn: ButtonsConf) => (
        <Button
          key={btn.value}
          value={btn.value}
          handleInput={handleInput}
          isOrange={btn.isOrange}
          active={activeKey === btn.value}
        />
      ))}
    </div>
  );
};

export default Keyboard;

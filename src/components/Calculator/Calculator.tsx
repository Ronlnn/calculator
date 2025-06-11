import React, { type FC, useState } from "react";
import styles from "./calculator.module.css";
import Display from "../Display/Display";
import Keyboard from "../Keyboard/Keyboard";
import { calculate } from "../../helpers/calculate";

const Calculator: React.FC = () => {
  const [input, setInput] = useState("");
  const [prevValue, setPrevValue] = useState<number | null>(null);
  const [operator, setOperator] = useState<string | null>(null);
  const [displayValue, setDisplayValue] = useState("");

  const handleInput = (event: string) => {
    if (event === "AC") {
      setInput("");
      setDisplayValue("");
      setPrevValue(null);
      setOperator(null);
    } else if (["+", "-", "*", "/"].includes(event)) {
      if (prevValue === null) {
        setPrevValue(parseFloat(input));
      } else if (operator) {
        const currentValue = parseFloat(input);
        const result = calculate(prevValue, currentValue, operator);
        setPrevValue(result);
        setInput(result.toString());
      }
      setOperator(event);
      setDisplayValue(`${input}${event}`);
      setInput("");
    } else if (event === "=") {
      if (prevValue !== null && operator && input) {
        const currentValue = parseFloat(input);
        const result = calculate(prevValue, currentValue, operator);
        setDisplayValue(prevValue => `${prevValue}=${result}`);
        setInput(result.toString());
        setPrevValue(null);
        setOperator(null);
      }
    } else {
      setInput(input => input + event);
      setDisplayValue(prevValue => prevValue + event);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display showInput={displayValue || input} />
      <Keyboard handleInput={handleInput} input={input} />
    </div>
  );
};

export default Calculator;

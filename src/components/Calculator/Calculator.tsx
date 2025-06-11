import React, { type FC, useState } from "react";
import styles from "./calculator.module.css";
import Display from "../Display/Display";
import Keyboard from "../Keyboard/Keyboard";
import {
  calculate,
  strToNum,
  numToStr,
  formatNumber,
} from "../../helpers/calculate";

const Calculator: React.FC = () => {
  const [input, setInput] = useState("");
  const [prevValue, setPrevValue] = useState<number | null>(null);
  const [operator, setOperator] = useState<string | null>(null);
  const [displayValue, setDisplayValue] = useState("");

  const handleInput = (event: string) => {
    //Сброс
    if (event === "AC") {
      setInput("");
      setDisplayValue("");
      setPrevValue(null);
      setOperator(null);
      return;
    }
    // Изменение знака
    if (event === "+/-") {
      if (input) {
        const num = strToNum(input) * -1;
        const newNum = numToStr(num);
        setInput(newNum);
        setDisplayValue(prev => `${prev} ${newNum}`);
      }
      return;
    }
    //Процент
    if (event === "%") {
      if (input) {
        const num = strToNum(input) / 100;
        const newNum = numToStr(num);
        setInput(newNum);
        setDisplayValue(prev => `${prev} ${newNum}`);
      }
    }
    // Дробные
    if (event === "," || event === ".") {
      if (!input.includes(",")) {
        setInput(prev => (prev === "" ? "0," : prev + ","));
        setDisplayValue(prev => (prev === "" ? "0," : prev + ","));
      }
      return;
    }
    // Базовые операторы
    if (["+", "-", "*", "/"].includes(event)) {
      if (input) {
        const currentEvent = strToNum(input);

        if (prevValue === null) {
          setPrevValue(currentEvent);
        } else if (operator) {
          const result = calculate(prevValue, currentEvent, operator);
          setPrevValue(result);
          setInput(numToStr(result));
        }
        setOperator(event);
        setDisplayValue(prev => `${prev} ${event} `);
        setInput("");
      }
      return;
    }
    // Результат
    if (event === "=") {
      if (prevValue !== null && operator && input) {
        const currentEvent = strToNum(input);
        const result = calculate(prevValue, currentEvent, operator);
        setDisplayValue(prev => `${prev} = ${numToStr(result)}`);
        setInput(numToStr(result));
        setPrevValue(null);
        setOperator(null);
      }
      return;
    }
    // Цифры
    setInput(prev => {
      if (prev === "0" && event === "0") return prev;
      return prev + event;
    });
    setDisplayValue(prev => prev + event);
  };

  return (
    <div className={styles.calculator}>
      <Display showInput={formatNumber(displayValue || input)} />
      <Keyboard handleInput={handleInput} input={input} />
    </div>
  );
};

export default Calculator;

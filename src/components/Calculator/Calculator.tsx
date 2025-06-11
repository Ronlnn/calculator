import React, { type FC, useState } from "react";
import styles from "./calculator.module.css";
import Display from "../Display/Display";
import Keyboard from "../Keyboard/Keyboard";

const Calculator: React.FC = () => {
  const [input, setInput] = useState("");

  const handleInput = event => {
    setInput(input => input + event);
    console.log(input);
  };
  return (
    <div className={styles.calculator}>
      <Display showInput={input} />
      <Keyboard handleInput={handleInput} input={input} setInput={setInput}/>
    </div>
  );
};

export default Calculator;

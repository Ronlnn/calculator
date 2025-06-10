import React, { type FC } from "react";
import styles from "./calculator.module.css";
import Display from "../Display/Display";

const Calculator: React.FC = () => {
  return (
    <div className={styles.calculator}>
      <Display />
      <div className={styles.container}>
        <button>AC</button>
        <button>+/-</button>
        <button>%</button>
        <button className={styles.right}>/</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className={styles.right}>*</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button className={styles.right}>-</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button className={styles.right}>+</button>
        <button>Sun</button>
        <button>0</button>
        <button>,</button>
        <button className={styles.right}>=</button>
      </div>
    </div>
  );
};

export default Calculator;

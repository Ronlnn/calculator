import React from "react";
import styles from "./keyboard.module.css";
import Button from "../Button/Button";

const Keyboard: React.FC = ({ handleInput }) => {
  return (
    <div className={styles.keyboard}>
      <Button value="AC" handleInput={handleInput} />
      <Button value="+/-" handleInput={handleInput} />
      <Button value="%" handleInput={handleInput} />
      <Button value="/" handleInput={handleInput} isOrange="true" />
      <Button value="7" handleInput={handleInput} />
      <Button value="8" handleInput={handleInput} />
      <Button value="9" handleInput={handleInput} />
      <Button value="*" handleInput={handleInput} isOrange="true" />
      <Button value="4" handleInput={handleInput} />
      <Button value="5" handleInput={handleInput} />
      <Button value="6" handleInput={handleInput} />
      <Button value="-" handleInput={handleInput} isOrange="true" />
      <Button value="1" handleInput={handleInput} />
      <Button value="2" handleInput={handleInput} />
      <Button value="3" handleInput={handleInput} />
      <Button value="+" handleInput={handleInput} isOrange="true" />
      <Button value="Sun" handleInput={handleInput} />
      <Button value="0" handleInput={handleInput} />
      <Button value="," handleInput={handleInput} />
      <Button value="=" handleInput={handleInput} isOrange="true" />
    </div>
  );
};

export default Keyboard;

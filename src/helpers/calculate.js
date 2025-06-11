export const calculate = (a, b, operator) => {
  if (operator === "+") {
    return a + b;
  } else if (operator === "-") {
    return a - b;
  } else if (operator === "*") {
    return a * b;
  } else if (operator === "/") {
    if (b === 0) {
      alert("Error");
      throw new Error("Error");
    }
    return a / b;
  } else {
    return b;
  }
};

export const strToNum = str => {
  return parseFloat(str.replace(/,/g, "."));
};

export const numToStr = num => {
  return num.toString().replace(/\./g, ",");
};

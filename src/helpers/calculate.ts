export const calculate = (a: number, b: number, operator: string) => {
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

export const strToNum = (str: string) => {
  return parseFloat(str.replace(/,/g, "."));
};

export const numToStr = (num: number) => {
  return num.toString().replace(/\./g, ",");
};

export const formatNumber = (value: number | string, maxLength = 25) => {
  const [int, dec] = value.toString().split(".");
  const grouped = int.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  const formatted = dec ? `${grouped}.${dec}` : grouped;

  // Ограничение ввода
  return formatted.length > maxLength
    ? formatted.slice(0, maxLength) + "..."
    : formatted;
};

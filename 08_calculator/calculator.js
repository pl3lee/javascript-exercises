const add = function(num1, num2) {
	return Number(num1) + Number(num2);
};

const subtract = function(num1, num2) {
	return Number(num1) - Number(num2);
};

const sum = function(arrayOfNumbers) {
	let tempSum = 0;
  let len = arrayOfNumbers.length
  for (let i = 0; i < len; i++) {
    tempSum += Number(arrayOfNumbers[i]);
  }
  return tempSum;
};

const multiply = function(arrayOfNumbers) {
  let tempProduct = 1;
  let len = arrayOfNumbers.length
  for (let i = 0; i < len; i++) {
    tempProduct *= Number(arrayOfNumbers[i]);
  }
  return tempProduct;
};

const power = function(num, power) {
	let tempProduct = 1;
  for (let i = 0; i < power; i++) {
    tempProduct *= Number(num);
  }
  return tempProduct;
};

const factorial = function(num) {
	let tempProduct = 1;
  if (num === 0) {
    return tempProduct;
  } else {
    for (let i = num; i > 0; i--) {
      tempProduct = tempProduct * i;
    }
  }
  return tempProduct;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

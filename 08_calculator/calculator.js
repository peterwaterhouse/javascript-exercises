const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (args) {
  total = 0;
  if (args.length > 0) {
    args.forEach((num) => {
      total = total + num;
    })
  }
  return total;
};

const multiply = function (args) {
  total = 0;
  if (args.length > 0) {
    total = args[0];
    args.shift();
    args.forEach((num) => {
      total = total * num;
    })
  }
  return total;
};

const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function (num) {
  if (num === 0) { return 1; }
  else { return num * factorial(num - 1); }
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

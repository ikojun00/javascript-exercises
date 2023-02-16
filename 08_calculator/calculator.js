const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(a) {
  let sum = 0;
	a.forEach(element => sum = sum + parseInt(element));
  return sum;
};

const multiply = function(a) {
  let multiply = 1;
	a.forEach(element => multiply = multiply * parseInt(element));
  return multiply;
};

const power = function(a, b) {
	let power = 1;
  for(let i=0; i<b; i++)
    power = power * a;
  return power;
};

const factorial = function(a) {
	let factorial = 1;
  for(let i=1; i<=a; i++)
    factorial = factorial * i;
  return factorial;
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

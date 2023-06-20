var calculator = require('./calc');
var data = require('./fsasynchronous.js')
var x=50, y=10;

console.log("Addition of 50 and 10 is" + calculator.add(x,y) + data);
console.log("Subtraction of 50 and 10 is" + calculator.sub(x,y) + data);
console.log("Multiplication of 50 and 10 is" + calculator.mult(x,y) + data);
console.log("Division of 50 and 10 is" + calculator.div(x,y) + data);
var util = require('util');
var my_name = "Nani";
my_class = 5,
my_roll_no= 143,
my_fav_subject= {subj1:"Tamil", subj2:"Maths"};

var format1 = util.format("My name is %s", my_name);
var format2 = util.format("I read in class %d", my_class);
var format3 = util.format("My roll no is %d", my_roll_no);
var format4 = util.format("My favorite subjects are %j", my_fav_subject);

console.log(format1);
console.log(format2);
console.log(format3);
console.log(format4);
querystring = require('querystring');
const obj1 = querystring.parse('name=sivam&company=javapoint');
const obj2 = querystring.stringify('name=sivam&comapny=javapont');
const obj3 = querystring.escape('name=sivam&company=javapiont');
const obj4 = querystring.unescape('name=sivam&company=javapiont');
console.log(obj1);
console.log(obj2);
console.log(obj3);
console.log(obj4);
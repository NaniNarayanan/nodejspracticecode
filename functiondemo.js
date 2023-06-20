function sum(a,b){
    return a+b;
}
var s = sum(3,4);
console.log('Normal function:' + s);

var sum = (a,b) => {
    return a+b;
}

var s = sum(3,4);
console.log('Arrow Function:' + s)
var buffer1 = new Buffer.from("ABC");
var buffer2 = new Buffer.from("ABCD");
var result = buffer1.compare(buffer2);

if(result<1){
    console.log(buffer1 + "comes before" + buffer2);
}
else if(result === 0){
    console.log(buffer1 + "is same as" + buffer2);
}
else{
    console.log(buffer1 + "comes after" + buffer2)
}
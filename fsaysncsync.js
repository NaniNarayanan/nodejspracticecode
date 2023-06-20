var fs = require("fs");
//Async read

fs.readFile('file.txt',function(err,data){
    if(err){
        return console.error(err);
    }
    console.log("Asynchronous read:" + data.toString());
});

//Synchronous read
var data = fs.readFileSync('file.txt');
console.log("Synchronous read:" + data.toString());
console.log("Program Ended");
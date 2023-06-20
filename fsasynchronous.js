var fs = require("fs");
//Asynchronous-opening file

console.log("Going to open File");

fs.open('file.txt','r+',function(err){
    if(err){
        return console.error(err);
    }
    console.log("File Opend Successfully");

}),
fs.open('file.txt','w+',function(err){
    if(err){
        return console.error(err);
    }
    console.log("File Successfully wirte");
}),

fs.unlink('file.txt',function(err){
    if(err)throw err;
    console.log('File Deleted');
});

var data = fs.readFileSync('file.txt');
console.log("Read File:"+data.toString());
console.log("read Successfully");


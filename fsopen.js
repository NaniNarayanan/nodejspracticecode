var fs = require('fs');

fs.open('file2.txt','r+',function(err,file){
    if(err)throw err;
    console.log('Saved!');
});
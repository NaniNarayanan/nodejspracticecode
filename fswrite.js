var fs = require('fs');

fs.writeFile('file3.txt','My Content Here!',function(err){
    if(err)throw err;
    console.log('Saved!');
});
var fs = require('fs');

fs.appendFile('file2.txt','Hello Content!', function(err){
    if(err)throw err;
    console.log('Saved!');
});
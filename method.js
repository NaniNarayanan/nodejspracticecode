

var http = require('http');
var fs = require('fs');

http.get('/show_file',(req,res)=>{
    const path = './public/file/file2.text'
    if(fs.existsSync(path)){
        res.contentType("file/text");
        fs.createReadStream(path).pipe(res)
    }else{
        res.status(200)
        console.log('File not found')
        res.send('File not found')
    }
}).listen(8080)
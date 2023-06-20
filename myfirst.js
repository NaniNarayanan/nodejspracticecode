var http = require('http');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'html'});
    res.end('Hello World This is NodeJS');
}).listen(8080);
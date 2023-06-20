var http = require('http');
var server = http.createServer(function(req,res){
    if(req.url == '/'){
        res.writeHead(200,{'Content-Type':'text/html'});

        res.write("<html><body><p>This is home page</p></body></html>");
        res.end();
    }
    else if(req.url == '/admin'){
        res.writeHead(200,{'Content-Type':'text/html'});

        res.write("<html><body><p>This is admin page</p></body></html>");
        res.end();
    }
    else if(req.url == '/employee'){
        res.writeHead(200,{'Content-Type':'text/html'});

        res.write("<html><body><p>This is employee page</p></body></html>");
        res.end();
    }
    else
        res.end("invalid Request");
});

server.listen(3000);
console.log('NodeJS web server at port 3000 is running sccessfully')
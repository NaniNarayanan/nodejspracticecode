var http = require("http");
var data = require('./serverexport.js')
var events = require('events');
const fs = require('fs');
const url = require('url');
const qs = require('querystring');

var server=http.createServer(function(req,res){
  if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      const formData = qs.parse(body);
      fs.appendFile('data.txt', `${formData.name},${formData.email},${formData.mobile},${formData.image}\n`, err => {
        if (err) {
          console.error(err);
          res.writeHead(500, {'Content-Type': 'text/plain'});
          res.end('Internal Server Error');
        } else {
          res.writeHead(200, {'Content-Type': 'text/plain'});
          res.end('Data saved successfully!');
        }
      });
    });
  }
     else if(req.url == "/"){
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(`<html>
        <head>
        <script>
function myFunction() {
  alert("Hello, World!");
}
</script>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        </head>
        <body>
        <header>
        <p class="text-center text-white bg-info p-4">Header</p>
      </header>
      <nav class="navbar navbar-expand-md navbar-primary bg-dark">
          <a class="navbar-brand" href="#">Logo</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse ms-5" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active text-white bg-dark px-3">
               Register
              </li>
              <li class="nav-item text-white bg-dark px-3">
              <a href="/log">Log</a>
              </li>
              <li class="nav-item text-white bg-dark px-3">
                <a href="/about">About</a>
              </li>
            </ul>
          </div>
        </nav>
       <div class="container">
       <div class="row mt-5 d-flex justify-content-center">
       <div class="col-8">
       <form method="POST" class="mb-5">
 <div class="form-group">
   <label for="name">Name:</label>
   <input type="text" name="name" class="form-control" id="name" placeholder="Enter name">
 </div>
 <div class="form-group">
   <label for="email">Email:</label>
   <input type="email" name="email" class="form-control" id="email" placeholder="Enter email">
 </div>
 <div class="form-group">
   <label for="mobile">Mobile number:</label>
   <input type="tel" name="mobile" class="form-control" id="mobile" placeholder="Enter mobile number">
 </div>
 <div class="form-group">
   <label for="image">Image:</label>
   <div class="custom-file">
     <input type="file" name="image" class="custom-file-input" id="image" accept="image/*">
     <label class="custom-file-label" for="image">Choose file</label>
   </div>
 </div>
 <button type="submit" class="btn btn-primary mt-4">Submit</button>
</form>
       </div>
       </div></div>
        </body>
        <footer class="mt-5">
    <div class="container-fluid bg-light text-dark text-center mt-5 py-3">
      &copy; 2023
    </div>
  </footer>
  </html>`);
    }
    else if(req.url == "/log"){
        res.writeHead(200,{'content-Type':'text/Html'});
        res.write(`<html>
        <head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        </head>
        <body>
        <header>
        <p class="text-center text-white bg-info p-4">Header</p>
      </header>
        <nav class="navbar navbar-expand-md navbar-info bg-dark">
          <a class="navbar-brand" href="#">Logo</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse ms-5" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active text-white bg-dark px-3">
              <a href="/">Register</a>
              </li>
              <li class="nav-item text-white bg-dark px-3">
             Log
              </li>
              <li class="nav-item text-white bg-dark px-3">
                <a href="/about">About</a>
              </li>
            </ul>
          </div>
        </nav>
        <main class="h-50">
        <p>log</p>
        </main>
        </body>
        <footer class="mt-5 py-1">
    <div class="container-fluid bg-light text-dark text-center mt-5 py-3">
      &copy; 2023
    </div>
  </footer>
  </html>`);
        res.end();
    }
    else if(req.url == "/about"){
        res.writeHead(200,{'content-Type':'text/Html'});
        res.write(`<html>
        <head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        </head>
        <body>
        <header>
        <p class="text-center text-white bg-info p-4">Header</p>
      </header>
        
        <nav class="navbar navbar-expand-md navbar-info bg-dark">
          <a class="navbar-brand" href="#">Logo</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse ms-5" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active text-white bg-dark px-3">
              <a href="/">Register</a>
              </li>
              <li class="nav-item text-white bg-dark px-3">
              <a href="/log">Log</a>
              </li>
              <li class="nav-item text-white bg-dark px-3">
               About
              </li>
            </ul>
          </div>
        </nav>
        <main class="h-50">
        <p>about</p>
        </main>
        </body>
        <footer class="mt-5 py-1">
    <div class="container-fluid bg-light text-dark text-center mt-5 py-3">
      &copy; 2023
    </div>
  </footer>
  </html>`);
        res.end();
    }
    else if (req.url == "/pro3") {
        res.writeHead(200,{'content-Type':'text/Html'});

        var eveemit= new events.EventEmitter();
        var fun1= function(){
            res.write("fun1 of 1");
        };

        var fun1= function(){
            res.write("fun1 of 2");
        };

        var fun2= function(){
            res.write("fun2");
        };
        eveemit.on("FUN1",fun1);
        // eveemit.removeAllListeners("FUN1", fun1);
      eveemit.emit("FUN1");
      eveemit.emit("FUN2");
    //   res.write(eveemit.listenerCount('FUN1'));

    }
    res.end();
}).listen(3000);
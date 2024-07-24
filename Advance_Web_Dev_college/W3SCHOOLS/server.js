var http = require('http');
//core Module

//create a server object:
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hello World!');
   //write a response to the client
  res.write('How World!');
   //write a response to the client
  res.write('How World!');
   //write a response to the client
  
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080



//In Node.js, events are handled using the EventEmitter class. 
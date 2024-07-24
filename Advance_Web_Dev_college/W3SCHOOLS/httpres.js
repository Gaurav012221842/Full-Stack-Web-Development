//create node server 

const http = require('http');

const server = http.createServer((req,res)=>{
    res.setHeader('Content-type','text/html');
    res.write('<html>');
    res.write('<head><title>Gaurav</title></head>');
    res.write('<body><h1>Welcome to wo !</h1></body>');
    res.write(' <h1>Welcome to my coding era !</h1> ');
    res.write(' <h1>Welcome to my coding era !</h1> ');
    res.write(' <h1>Welcome to my coding era !</h1>');
    res.write(' <h1>Welcome to my coding era !</h1>');
    res.write(' <h1>Welcome to my coding area!</h1></body>');
    res.write('</html>');
    res.end();
    });

server.listen(3000);
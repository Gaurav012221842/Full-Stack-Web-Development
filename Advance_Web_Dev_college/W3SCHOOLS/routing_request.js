// const http= require('http');
// const server =http.createServer((req,res)=>{
//     const url=req.url;
//     if(url==='/'){
//         res.setHeader('Content-type','text/html');
//         res.write('<html>') 
//         res.write('<head><title>Enter the name</title></head>');
//         res.write('<body> <form action ="/message" method="POST"><input type="text" name="message"><input type="submit" value="send"></body>');
//         res.write('</html>');
//         return res.end();

//     }
//     res.setHeader('Content-type','text/html');
//     res.write('<html>');
//     res.write('<head><title>Gaurav</title></head>');
//     res.write('<body><h1>Welcome to my coding era !</h1></body>');
 
//     res.write('</html>');
//     res.end();
// });
// server.listen(4000);

const http = require('http');
const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === '/') {
        res.setHeader('Content-type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Enter the name</title></head>');
        res.write('<body> <form action="/message" method="POST"><input type="text" name="message"><input type="submit" value="send"></form></body>');
        res.write('</html>');
        return res.end();
    }
    res.setHeader('Content-type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Gaurav</title></head>');
    res.write('<body><h1>Welcome to my coding era!</h1></body>');
    res.write('</html>');
    res.end();
    
});
server.listen(4000);

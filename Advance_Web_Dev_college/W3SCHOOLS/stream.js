const http = require('http');
const fs=require('fs');
const log=require('console');
const server = http.createServer((req, res) => {
    const url = req.url;
    const method=req.method;
    if (url === '/') {
        res.setHeader('Content-type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Enter the name</title></head>');
        res.write('<body> <form action="/message" method="POST"><input type="text" name="message"><input type="submit" value="send"></form></body>');
        res.write('</html>');
        return res.end();
    }
    if(url==='/message'&&method==='POST'){  
        const body=[];
        req.on('data',(chunk)=>{
            body.push(chunk);
            console.log(chunk);
        })
        req.on('end',()=>{
            const parseBody=Buffer.concat(body).toString();//asynchronus 
            console.log(parseBody);
            const message=parseBody.split('=');
            fs.writeFileSync('cse.txt',message[1]);
        })
        fs.writeFileSync('hello.txt','SAMPLES');
        res.setHeader('Location','/');
        res.statusCode=302;
        return res.end();
    }
    res.setHeader('Content-type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Gaurav</title></head>');
    res.write('<body><h1>Welcome to my coding era!</h1></body>');
    res.write('</html>');
    res.end();
});
server.listen(1000);

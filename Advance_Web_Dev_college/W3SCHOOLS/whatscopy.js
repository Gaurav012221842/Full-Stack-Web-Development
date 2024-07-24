const http=require('http');
const server=http.createServer((req,res)=>{
    const url=req.url;
    if(url==='/age')
    {
        res.setHeader('content-type','text/html');
        res.write('<head><title>age</title></head>');
        res.write('<body><h1>My father age is 45</h1><form action="/age" method="Post"><input type name="message"><input type="submit"value="send"></body>');
        res.write('</html>');
        res.end();
    }
    if(url==='/father'){
        res.setHeader('content-type','text/html');
    res.write('<html>');
    res.write('<head><title>Father</title></head>');
    res.write('<body><h1>My father name is Vinod </h1><form action="/age" method="Post"><input type name="message"><input type="submit"value="send"></body>');
    res.write('</html>');
    res.end();
    }
    if(url==='/ '){
        res.setHeader('content-type','text/html');
    res.write('<html>');
    res.write('<head><title>Father</title></head>');
    res.write('<body><h1>My father name  Anil Yadav</h1><form action="/age" method="Post"><input type name="message"><input type="submit"value="send"></body>');
    res.write('</html>');
    res.end();
    }
    else if(url==='/'){
    res.setHeader('content-type','text/html');
    res.write('<html>');
    res.write('<head><title>ARPIT</title></head>');
    res.write('<body><h1>My name is  Yash Tripathi</h1><h2>Learning NodeJs</h2></body>');
    res.write('</html>');
    res.end();
    }
 });
 server.listen(9000);
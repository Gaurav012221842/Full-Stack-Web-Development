 
const http= require('http');

function rqLister(req,res){
    console.log(req);
}

const server = http.createServer(rqLister);
server.listen(3000);
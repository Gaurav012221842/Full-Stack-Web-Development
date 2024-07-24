// const http=require('http');
// const express=require('express');
// const app=express();
// app.get('/',(req, res) => {
//     res.json('Get request from server');
// })
// const server=http.createServer(app);
// server.listen(9000);
// console.log("Server is running on port 9000");

    //COMMMUNICATION BETWEEN CLIENT AND SERVER


        
const http = require('http');
const path=require('path');
const express=require('express');
const app=express();
const server=http.createServer(app);
const SocketIo=require('socket.io');
const io=SocketIo(server);
io.on('connection',(socket)=>{
});
app.get('/',(req, res) => {
    res.sendFile(path.join(__dirname ,'src', 'app.html'));
})
app.get('/color',(req, res) => {
    res.sendFile(path.join(__dirname ,'src', 'color.html'));
})
server.listen(3000);
console.log("Server is running on port 3000");
const SocketIO= require("socket.io");
const io=SocketIO(server);
app.get('/',  (req, res)=>{
    res.sendFile(path.join(__dirname,'src','app.html'));;
});
io.on('connection',socket=>{
    console.log(socket.id);
});
server.listen(9090);

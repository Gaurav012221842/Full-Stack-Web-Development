const express=require('express');
const path=require('path');
const app=express();


const staticPath=path.join(__dirname,"../public");
//builtin middleware
app.use(express.static(staticPath));
app.get("/",(req,res)=>{
    res.send("Hello World");
});
app.get("/about",(req,res)=>{
    res.send("About Page");
});
app.listen(8000,()=>{
    console.log("Server running at http://localhost:8000");
});
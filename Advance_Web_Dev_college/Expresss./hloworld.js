const exress=require("express");
const app=exress();
const PORT=4010;
const HOSTNAME='localhost';
app.get('/',(req,res)=>{
    res.send('<h1>Hello WOrld <i>with</i> gaurav</h1>');
});
app.get('/about',(req,res)=>{
    res.send('About Page');
});
app.get('/contact',(req,res)=>{
    res.send('Contact Page');
});
app.listen(PORT,()=>{
    console.log(`Server running at ${HOSTNAME}:${PORT}`);
});
app.listen(3010,()=>{
    console.log("Server running");
});

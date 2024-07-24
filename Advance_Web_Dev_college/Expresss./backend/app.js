const express=require('express');
const app=express();
const authRouter=require('./router/authrouter')
app.use('/api/auth/',authRouter);
app.use('/',(req,res)=>{
    res.status(200).json({data:"WTauth server"});
});
module.exports = app;
6
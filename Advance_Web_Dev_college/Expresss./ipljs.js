const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const adminRoutes=require('./admin');
const shopeRoutes=require('./admin');
app.use('/ind',adminRoutes);
app.use(shopeRoutes);
app.use((req,res,next)=>{
    res.status(404).send('<h1>404 Page not found</h1>');
   })
app.use(bodyParser.urlencoded({ extended: true }))
app.listen(4000);
console.log("Runnig page");





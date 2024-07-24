const express=require('express');
const router=express.Router();
router.get('add-product',(req,res,next)=>{
    res.send('<h1>Product List </h1><form action="http://localhost:4000/store-product" method="POST> <input type="text" name="item" > <input type="submit" value="send" > </form>' )
});
router.post('/store-product',(req,res,next)=>{
    console.log('Item name: ',req.body.item);
    res.send('Item Received');
});
module.exports=router;





        


// const app=express();
// const bodyParser=require('body-parser');
// const adminRoutes=require('./Routes/admin');
// app.use(bodyParser.urlencoded({extended: false}));
// app.use(adminRoutes);
// app.listen(3000);
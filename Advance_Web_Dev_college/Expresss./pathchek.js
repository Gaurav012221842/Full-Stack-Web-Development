const express=require("express");
const path=require('path');
const app=express();


//Middleware is not part of code by mistak written in copy
function Same(filePath1, filePath2) {
  return filePath1==filePath2;
}


const filePath1 = '/path/to/file1.txt';
const filePath2 = '/path/to/file1.txt';
app.get('/',(req,res)=>{


if (Same(filePath1, filePath2)) {
  console.log("Same directory");
  res.send('thhe files are in the same directory.');
} else {

  console.log("Different directory");
  res.send('the files are in different directory.');
  
}});
app.listen(3000,()=>{
    console.log("Server listening on port 3000");
});
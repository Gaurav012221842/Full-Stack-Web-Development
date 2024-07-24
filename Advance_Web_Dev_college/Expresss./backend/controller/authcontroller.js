const signup=(req,res,next) => {
    const {name,email,password,confirmpassword}=req;
    console.log(name,email,password,confirmpassword);
    return res.status(200).json({
        success:true,
        data:{}
    })
}
module.exports={
    signup
}
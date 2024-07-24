let mypromise = new Promise((myResolve,myReject)=>{
    myResolve();
})
//Kconsole.log(mypromise);

mypromise.then(()=>{
    console.log('success');
}).catch(()=>{
    console.log('failed');
})













const simran=new Promise((resolve,reject)=>{
    let parent=false;
    if(parent){
        resolve('Yes papa maan gye');
    }
    else{
        reject('No papa Find a IAS ');
    }
});

simran.then((data)=>{
    console.log("Simram say "+data);
}).catch((err)=>{
    console.log("Simram say "+err);
})
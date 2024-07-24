setTimeout(()=>{
    console.log('Time Over');
},2000)
console.log('Gaurav');


// setInterval(()=>{
//     console.log('Fun');
// },1000)
// console.log('On');


const fetchData=(callback)=>{
    callback("Train Started")
}

setTimeout(()=>{
    fetchData((status)=>{
        console.log(status);
    })
},5000);
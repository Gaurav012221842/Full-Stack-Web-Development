//It creates a new array with results of some operation. The value its callback returns are used to form new array.
//arr.map(callbackfunc(value,index,array))
//let newarr=arr.map((val)=>{
//    return val*2;
//})
let num=[4,5,6];
let newarr=num.map((val)=>{
    return val*val;
})
console.log(newarr)
//Creates a new array of elements that give true for a condition/filter.Eg. all even elements
let newar=num.filter((val)=>{
    return val%2===0;
})
console.log(newar)
//Perform some operation and reduces the array to a single value.It returns that single value.
let arrreduce=num.reduce((res,curr)=>{
    return res+curr;
})
console.log(arrreduce)
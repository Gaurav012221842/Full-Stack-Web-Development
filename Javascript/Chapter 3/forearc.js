let num=[3,4,5];
let calcsq=(num)=>{
    console.log(num**2);
};
num.forEach(calcsq);
let newarr=num.map((val)=>{
    return val*val;
})
console.log(newarr)
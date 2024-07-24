let marks=[60,30,95,23,93,91,90];
let newar=marks.filter((val)=>{
    return val>=90;
})
console.log(newar)
//Take a number of size arr;
//let n=prompt("Enter a number ");
let arr=[];
for(let i=1;i<=5;i++){
    arr[i-1]=i;
}
let newarr=arr.reduce((res,curr)=>{
    return res+curr;
})
let newarrr=arr.reduce((res,curr)=>{
    return res*curr;
})
console.log(newarr)
console.log(newarrr)
let arr=[];
arr.push("Gaurav");//add element to last
arr.push("Saurav");
arr.pop();//delete array element to last
console.log(arr)
let food=["potato","Tomato","Ginger","Coriander"]
console.log(food);
console.log(food.toString());//conveer array to string
console.log(food)
let ar=food.concat(arr)//concat two array in third
console.log(ar)
ar.shift();//delete first element 
console.log(ar)
ar.unshift("Riya");//add first element
console.log(ar)

ar.splice(0,1,"Kamu","Ramu","Shamu")//slice startidx,del_count,element to be add
console.log(ar)
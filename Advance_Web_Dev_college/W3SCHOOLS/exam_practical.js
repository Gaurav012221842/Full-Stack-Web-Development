function add(a,b){
    let Local=10;
    console.log(Local)
    return Local+a+b;
}
console.log(add(3,4));


const dinner=["Sambhar","dosa","italy","et","Sambhar","dosa","italy","et"];
const [...item]=dinner;
console.log(...item);

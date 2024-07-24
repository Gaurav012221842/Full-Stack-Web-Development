function keyword(){
    let result=0;
    for(let i=0;i<arguments.length;i++){
        result+=arguments[i];
    }
    return result; 
    console.log(arguments);
}
console.log(keyword(4,5,6,7,4,22,54))
console.log(keyword(4,5, 2,54))
console.log(keyword(4,5,54))
console.log(arguments.length);
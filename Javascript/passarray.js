function processarray(array,fn){
    for(let i=0;i<array.length;i++){
        console.log("index",i,"value",array[i],"cube value is : ", fn(array[i]));
    }
}




processarray( [4,3,2,5,6] , function cube(x) {return x*x*x;} );





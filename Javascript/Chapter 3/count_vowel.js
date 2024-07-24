let str="Gaurav yadav";
let x=str.length;
let count=0;
function countt(str,x){
    for(let i=0;i<x;i++){
        if(str[i]=='a'){
            count++;
        }
        if(str[i]=='e'){
            count++;
        }
        if(str[i]=='i'){
            count++;
        }
        if(str[i]=='o'){
            count++;
        }
        if(str[i]=='u'){
            count++;
        }
        if(str[i]=='A'){
            count++;
        }
        if(str[i]=='E'){
            count++;
        }
        if(str[i]=='I'){
            count++;
        }
        if(str[i]=='O'){
            count++;
        }
        if(str[i]=='U'){
            count++;
        }
    }
}
countt(str,x);
console.log(count)
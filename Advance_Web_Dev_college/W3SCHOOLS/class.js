// const add=(a,b)=>{
//     return a+b;
// }
// console.log(add(5,6))



// function addd(a,b){
//     return a+b;
// }
// console.log(addd(55,6))



// function varscope(){
//     var x=1;
//     if(true){
//         let x=4;
//         console.log(x);
//     }
//     console.log(x);
// }
// varscope();



// const person={
//     name:"Gaurav",
//     age: 23
// }
// console.log(person)



// const person={
//     name:"Gaurav",
//     age: 23,
//     msg:function(){
//         console.log('my name is '+this.name);
//     },
//     kid:function(){
//         console.log('my age is '+this.age);
//     }
// }

// person.msg();
// person.kid();



// const hobbies=['cricket','football'];
// for(const games of hobbies){
//     console.log(games);
// }



// const hobbies=['cricket','football','cricket','football']
// console.log(hobbies.map(hobbies=> hobbies))



// const hobbies=['idly','dosa'];
// hobbies.push("briyani");
// console.log(hobbies)



// const lpu={dep:'cse'}
// lpu.dep='it'
// console.log(lpu)



//Spread & Rest Operation

// const item=['idly','dosa']
// const item2=item;
// console.log(item)
// console.log(item2)
// item2.push('sambar');
// console.log(item)



// const item=['idly','dosa']
// const item2=['vada']
// item2.push('samber')
// console.log(item2)



// const item=['idly','dosa']
// const item2=item.slice();
// item2.push('sambar')
// console.log(item)
// console.log(item2)



// const item=['idly','dosa']

// const item2=[...item]
// item2.push("samber")
// console.log(item);
// console.log(item2)




// const student1={name: 'aru',roll:3};
// const student2={...student1,age:5,class:0}
// console.log(student1,student2);
// const student3={name:'Laru'}
// const student4={...student3,age:6}
// console.log(student3,student4)



//REST OPERATOR


const item=(itm1,itm2,itm3)=>{
    return [itm1,itm2,itm3+3];
}
console.log(item(1,34, 40))



const items=(...item)=>{
    return item;
}
console.log(items(1,2,3,4,9))

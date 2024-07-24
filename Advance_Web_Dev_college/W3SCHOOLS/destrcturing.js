// const person={name: 'ramya',age: 34};
// const name=person.name;
// console.log(name);

// const market={stock: 'HDFC'};
// const name=market.stock;
// console.log(name);
// console.log(market.stock)

// const markt={stock:'PNB'};
// const {stock}=markt;
// console.log(stock);

// const person={name: 'ramya',age:30};
// const {name,age}=person;
// console.log(age,name)

//  const cricket={name:"rohit",job:"Batting"};
//   const cricket2={name:"Virat",job:"Batting and captaincy"};
// const{job}=cricket2;
// console.log(job);


const dinner=['Dosa','Italy'];
const [item1,item2,item4]=dinner;
console.log(item1,item2,item4);


const diner=['Dosa','Italy','Smbhr'];
const [...item3]=diner;
console.log(...item3);


const cric=["virat","duplesis"]
const cric2=["maxwell"];
cric.push(cric2);console.log(cric);

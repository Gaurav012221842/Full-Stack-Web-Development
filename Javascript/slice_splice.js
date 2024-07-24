const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(1,1);
// console.log(fruits) 

// fruits.splice(2, 0, "Lemon", "Kiwi");
// console.log(fruits)
// fruits.splice(2, 1, "Lemon", "Kiwi");
// console.log(fruits)
fruits.splice(2, 2, "Lemon","Kiwi");
console.log(fruits) 
const citrus = fruits.slice(1, 2);

const citrps = fruits.slice(0);
console.log(citrus) 
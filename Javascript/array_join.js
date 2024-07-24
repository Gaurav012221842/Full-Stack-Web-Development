const fruits=["Hello","HI","How ","Ram"];
console.log(fruits);
console.log("Array is: ",fruits.join(" * "));
fruits.pop();
console.log("After Popping: ",fruits.join(" * "));
fruits.push("Ram siya Ram");
console.log("Af;ter adding: ",fruits.join(" * "));
fruits.shift();
console.log("After Shifting : ",fruits);
console.log("Return Length;; : ",fruits.unshift());

fruits.unshift("Bonjour");
console.log("Return Length After Shifting : ",fruits.unshift());
console.log("After adding: ",fruits.join(" * "));
fruits[fruits.length]="Hey";
console.log("Withour push add: ",fruits);

delete fruits[2];
console.log(fruits);
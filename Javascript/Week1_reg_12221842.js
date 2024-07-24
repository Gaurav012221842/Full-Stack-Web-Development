const product={
    name: "Ball pen",
    rating: 6,
    offer: 5,
    price:20
};
console.log(product);
 
console.log(`Product name is ${product.name} and rate is ${product.rating} and offer  is ${product.offer} and price is ${product.price} `);
console.log(typeof product)

function square( num){
    return num*num;

}
console.log(square(5));
function summ(n,m,o){
    return n+m+o;
}
console.log(summ(4,5,6 ));  
var a=0; var b =0; while (a <3) { a++; b += a; console.log(b); }
var x = 0; while (x != 0) { if(x == 1) continue; else x++; }

console.log(x)
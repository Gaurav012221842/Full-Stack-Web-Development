let temperature=18
if(temperature<20){
    console.log("it is really cold");
}
else{
    console.log("it's really hot");
}
console.log("PW skills");
let score = 110;
let life=3
let bullets=1000
console.log('Welcome to the PW game');
if (score > 99) {
    console.log("You gained a life");
    score=score-100
    life+=1
    let bullets=2000
    console.log(`your bullets is ${bullets}`)
} else {
    console.log("You don't get a life");
}
console.log(`Your score is ${score} and my life is ${life} and bullets are ${bullets}`);
let getStarFromUser=8
let starInNumber=parseInt(getStarFromUser)
if(starInNumber==1){
    console.log("poor");
}else if(starInNumber==2){
    console.log("emm, ok");
}else if(starInNumber==4){
    console.log("good");
}
else{
    console.log("Try to make theory");
}




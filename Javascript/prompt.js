let score=prompt("Enter score between 0-100");
let grade;
if(score>90){
    grade="A";
}
else if(score>80&&score<90){
    grade="B";
}
else{
    grade="F";
}
console.log("According to your console grade is : ",grade);
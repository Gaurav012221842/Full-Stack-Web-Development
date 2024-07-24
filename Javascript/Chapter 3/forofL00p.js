let str="GauravKumar";
for(let i of str){
    console.log(i);
}
const profile={
    username:"@yadav",
    isfollow:false,
    follower:123,
    following:23
}
for(let i in profile){
    console.log("Key = ",i," value = ",profile[i])
}
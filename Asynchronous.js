/*
async await>> promise chains >> callback hell
Sychronous Programming:-code runs in particular sequence as given in program. 
Asynchronous Programming:-Due to synchronous,Sometime Imp instruction get blocked/delay.
Asynchronouse code allowed to run next instruction immediately and dosen't block flow. 

*/
console.log("one")
console.log("two")
setTimeout(()=>{
    console.log("Asychronuse, callback function at last")
})
setTimeout(()=>{
    console.log("Asychronuse, callback function after 4sec")
},4000)
console.log("three")

//Callback function is function passed as argument in another function 
function sum(a,b){
    console.log(a+b)
}
function calculate(a,b,sumCallback){
    sumCallback(a,b)
}

calculate(4,6,sum)//sum is call back function 
//also in setTimeout,callback function is used 
// calculate(4,6,sum())//in argumnet ,don't use parathesis





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
//Callback Hell or Pyramid of doom :-Nested callback structure one in another forming Pyramid.Difficult to understand and complex
function getData(id,getDataNext){
    setTimeout(()=>{
        console.log("data"+id)
        if(getDataNext){
            getDataNext(id)
        }
        
    },2000)
}

getData(1)
// getData(2,getData)
// getData(2,getData(3))//bad ways to pass argument to callback function ...pass in arrow function
getData(6,()=>{
    getData(7)
})
//if we want dependency between data1 and data2..like after geeting data1 proceed to data 2
//real time :first we compare Username if username matched then only we compare password.otherwise drop that whole flow

//we first 2 sec for Data11 then after 2sec for data22 then data33 then data44
getData(11,()=>{
    getData(22,()=>{
        getData(33,()=>{
            getData(44)
        })
    })
})






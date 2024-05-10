// /*
// async await>> promise chains >> callback hell
// Sychronous Programming:-code runs in particular sequence as given in program. 
// Asynchronous Programming:-Due to synchronous,Sometime Imp instruction get blocked/delay.
// Asynchronouse code allowed to run next instruction immediately and dosen't block flow. 

// */
// console.log("one")
// console.log("two")
// setTimeout(()=>{
//     console.log("Asychronuse, callback function at last")
// })
// setTimeout(()=>{
//     console.log("Asychronuse, callback function after 4sec")
// },4000)
// console.log("three")

// //Callback function is function passed as argument in another function 
// function sum(a,b){
//     console.log(a+b)
// }
// function calculate(a,b,sumCallback){
//     sumCallback(a,b)
// }

// calculate(4,6,sum)//sum is call back function 
// //also in setTimeout,callback function is used 
// // calculate(4,6,sum())//in argumnet ,don't use parathesis
// //Callback Hell or Pyramid of doom :-Nested callback structure one in another forming Pyramid.Difficult to understand and complex
// function getData(id,getDataNext){
//     setTimeout(()=>{
//         console.log("data"+id)
//         if(getDataNext){
//             getDataNext(id)
//         }
        
//     },2000)
// }

// // getData(1)
// // // getData(2,getData)
// // // getData(2,getData(3))//bad ways to pass argument to callback function ...pass in arrow function
// // getData(6,()=>{
// //     getData(7)
// // })
// //if we want dependency between data1 and data2...like after geting data1 proceed to data 2
// //real time first we compare Username if username matched then only we compare password.otherwise drop that whole flow

// //we first 2 sec for Data11 then after 2sec for data22 then data33 then data44
// // getData(11,()=>{
// //     getData(22,()=>{
// //         getData(33,()=>{
// //             getData(44)
// //         })
// //     })
// // })
/*Promise is an object in JS,eventually completion of task.
Initially state:-pending then
state:-"fulfilled" if resolve() called
or state:-"rejected" if reject() called 

Promise is Solution on Callback hell
*/
let myPromise=new Promise((resolve,reject)=>{
    console.log("I am Promise.No need to call me")
    resolve("Successfully")//first called then get high priority
    reject("Something went wrong error")
})
console.log(myPromise)
// console.log(myPromise.PromiseResult)//wrong 
myPromise.then((res)=>{
    console.log(res)
})
myPromise.catch((err)=>{
    console.log(err)
})
//Promise's property is access by .then((res)=>{}) res is result
//.then is used for resolve condition
//.catch()is used for reject

// Promise are used in Function .Function return promise 
function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Promise started")
            resolve(200)
        },1000)
    })
}

function api2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Promise 2")
            resolve(200)
        },2000)
    })
}

// let p1=api()
// p1.then(()=>{
//     let p2=api2()
//     p2.then((res)=>{
//         console.log(res)
//     })
// })

function getData(id){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data"+id)
            resolve("success")
        },2000)
    })
}

// getData(1).then((res)=>{
//   console.log(res)  
// })
// getData(1).then((res)=>{
//     getData(2).then((res)=>{
//         getData(3).then((res)=>{
//             getData(4)
//         })
//     })
// })

// getData(1).then((res)=>{
//     return getData(2)
// }).then((res)=>{
//     return getData(3)
// }).then((res)=>{
//     return getData(4)
// }).then((res)=>{
//     console.log(res)
// })

/*
Async-Await:-
Async is used for always return Promise 
Await:-await can't use without async in JS. It is used to pause all other surrounding function until promise is settled
easy to understand and maintain,manage

*/
async function AsynApi(){
    console.log("hello")
}
AsynApi()

function getData1(id){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(id==3){
                reject("error: not allowed")
            }else{
            console.log("started with data"+id)
            resolve("success")
            }
        },2000)
    })
}

// await getData1(1);//wrong 
async function AllData(){
    await getData1(1);//if data1 procceded then it will jumpt on next await till otherawait will wait
    await getData1(2);
    await getData1(3);
    await getData1(4);
}

AllData();
//IIFE:-Immediately Invoked function Expression :-only execute one time
(function(){console.log("requested API")})()
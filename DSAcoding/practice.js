console.log("1, if the character is an uppercase alphabet (A - Z).\n0, if the character is a lowercase alphabet (a - z).\n-1, if the character is not an alphabet.");
let char;
char="6"//The input can be any single character.
// char=6 giving 1 which is wrong
let result;
// if(char.toUpperCase()==char){
// result=1
// }else if(char.toLowerCase()==char){
//     result=0
//     }else{
//         result =-1
//     }
//Right Answer by regular expression

if(/[a-z]/.test(char)){
    result=0
}else if(/[A-Z]/.test(char)){
    result=1
}else{
    result=-1
}
console.log(char,result)
console.log(/[0-9]/.test(char) )//regular expression for checking range from 0 to 9 or from a to z or from A to Z
console.log(/[0-9]|10/.test(char));//0 to 10
console.log(/^([0-9]|[1-8][0-9]|90)$/.test(char));// one for single-digit numbers (0-9) and one for two-digit numbers (10-90). 
/*Explanation:

^ asserts the start of the string.
[0-9] matches any single digit from 0 to 9.
[1-8][0-9] matches two digits where the first digit is in the range 1-8 and the second digit can be any digit (0-9), effectively matching numbers from 10 to 89.
90 matches the number 90 specifically.
$ asserts the end of the string.
*/
///////////////////////////////////////////////////////////////////
/*Q 1)// Convert this
let arr = {
	b: 2,
  a: 1,
  c_label: 'bye',
  a_label: 'hello',
  b_label: 'hi',
  c: 3,
};

// To This
// let brr = {
//   a: {
//     value: 1,
//     label: 'hello',
//   },
//   b: {
//     value: 2,
//     label: 'hi',
//   },
//   c: {
//     value: 3,
//     label: 'bye',
//   },
// };
// Convert this
*/

let arr = {
	b: 2,
  a: 1,
  c_label: 'bye',
  a_label: 'hello',
  b_label: 'hi',
  c: 3,
};
let brr={}

console.log(arr)
for(let key in arr){
    console.log(key,arr[key])
    if(key.length==1){
        brr[key]={ 
            value:arr[key],
            label:arr[`${key}_label`]
        }
    }
}
console.log("brr is",brr)
/////////////////////////////////
/*
Q2)const questions = [
  {
    title: 'Question 1',
    questions: [
      {
        title: 'Question 1.1',
        questions: [
          {
            title: 'Question 1.1.1',
          },
          {
            title: 'Question 1.1.2',
          },
        ],
      },
      {
        title: 'Question 1.2',
        questions: [
          {
            title: 'Question 1.2.1',
          },
          {
            title: 'Question 1.2.2',
          },
        ],
      },
    ],
  },
];
// Print all titles.

*/


/////////////////////////////////////////////////////////////////////////////////
// Q3. Promise of print after 5 sec by promise
function getPrint(){
    console.log("printing data")
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Print")
            resolve("Print")
        },5000)
    })
}

getPrint()

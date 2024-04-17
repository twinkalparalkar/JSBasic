alert("Pop Up")
console.log("print my message")
///////// Regular expression
char=5
if (/[A-Z]/.test(char)) {
    console.log(1)
} else if (/[a-z]/.test(char)) {
    console.log(0)
} else {
    console.log(-1)
}
// regular expression :-is used when we want pattern (we can't use toUpperCase() method)
// if(x===x.toUpperCase()){ return 1;} 
function getDataTypeSize(dataType) {
    switch(dataType.toLowerCase()) 
    {
        case 'integer':
            return 4; // Assuming 4 bytes for integer
        case 'long':
            return 8; // Assuming 8 bytes for long
        case 'float':
            return 4; // Assuming 4 bytes for float
        case 'double':
            return 8; // Assuming 8 bytes for double
        case 'character':
            return 1; // Assuming 1 byte for character
        default:
            return -1; // Invalid data type
    }
}
/*
Variable name is case sensitive
space is not allowed
only letter, digit, underscore(_),dollar($) are allowed
first letter is not digit.It can be alphabets,_,$
Reserved keyword are not allowed
*/
let brandName="Tata"//Use Camel case (first letter is small and second word's first letter is Capitalize )
const totalPrice=500
console.log(brandName,totalPrice)
/*let const and var:-are keywords to declare
1. Don't use "var" in ES6 because var can redeclare variable(var is global scope)
var a=10;
var a=15;

below are invalid:
let a=10;
var a=10;
or 
const a=90;
var a=0;
or 

let a=10
const a=20;
or 
var a=10;
let a=10;
2.let and const are not redeclare the variable.(both are block scope)
3.const always use with value.
let a;//valid
const a;//invalid
const a=10;//valid
*/

const student={fullName:"rita",age:25}
console.log(student["fullName"],student["age"],student.fullName,typeof student)
student["fullName"]="raghav"
console.log(student)
/*
Here we use const to declare and update object's key values.
because if we want to change object then we need to change all key value pairs.

*/

console.log(123+123)
console.log("123"+123)
const profile={userName:"Shraddha",
                follower:25,
                following:4,
                post:96,
                detail:"ex-Microsoft",
                isFollow:true};
console.log(profile,typeof profile["userName"],profile.post)
//Operator
//Arithmatic Operator(+,-,*,/,%,**,++,--)
let [a,b]=[2,4];//using destructuring assignment
console.log(a+b,a-b,a*b,a/b,a%b,a**b)
console.log("Use integer division :",Math.floor(25/2))
console.log("preIncreament",++a)//first value will increase then print
console.log("postIncreament",b++)//first value will print then change
console.log(a--,--a)

//Assignment Opeartor(=,+=,-=,*=,/=,%=,**=)
console.log("a=a**3",a**=3)
console.log("a=a+4",a+=4)

//Comparson Operator(==,===,!=,!==,<,>,<=,>=)
console.log("not and double equal to",a!==b,a!=b,a<b,"this will give boolean value results")

//Logical Operator(&&,||,!)
console.log(a==b && a!==b,!(a==b),"this will give boolean value results")

//Conditional Statement: if Statement,if-else statement, else-if statement

let n=25;
if(n % 2===0){
    console.log("even number")
}else if(n %2!==0){
    console.log("odd number")
}else{
    console.log("String")
}
let age=20;
if(age>18) console.log("Single line if statement,this is valid")

//Ternary Operator a?b:c 3 operands
age>18 ? console.log("adult"): console.log("not adult");

//syntax ->Rules to code or any Language rules
//MDN -> to read Documentation of JS:-https://developer.mozilla.org/en-US/
//Switch Statement ->not used
let fruit="Mangoes";
switch(fruit){
    case "Mangoes":
        console.log("18")
        break;
    case "Papayas":
        console.log("25")
        break;
    default:
        console.log(`${fruit} is not fruit`)
}
//Question
let num=prompt("Enter a number:")//taking inpiut from user but In Pop-up
if(num % 5===0){
    console.log(num+" is multiple of 5")
}else{
    console.log(num+" is Not multiple of 5")
}

let score=90;

if(score<=90 && score>=100){//Chceking range at same time
    console.log("Grade A");
}else if(score<=70 && score>=89){
    console.log("Grade B");
}else if(score<=60 && score>=69){
    console.log("Grade C");
}else if(score<=50 && score>=59){
    console.log("Grade D");
}else{
    console.log("Grade F");
}
//Loop :-for loop, while loop, do-while loop, 
//special:- for-of loop (String),for-in loop(Object)

let sum=0;
for(let i=1;i<6;i++){
    sum+=i;
    console.log("sum =",sum,"of",i)
}

// console.log(i)//i is not exit outside loop
//Avoid Infinite Loop (Use valid stopping condition)

let i=1;
while(i<6){
    console.log("while loop is same as for loop",i);
    i++;//updation
}

i=0;
do{
    console.log("at least one time,Do-while loop run "+i)
    i+=2;
}while(i<5);

/////////////////////////////////////////
let custom="JavaScript Learning"

for(let i of custom){
    console.log("for-of loop is used for accessing each character of string",i);
}

let student1={name:"Rani",age:23,schoolName:"M.N.C School"};

for(let key in student1){
    console.log("(for-in loop is used for Object)",key,student1[key],"right way");
    // console.log("error",student.key,"is undefined");
}
//////////////////////////////////////////////////

console.log("all even number from 0 to 100 (number can divided by 2")
for(let i=0;i<=100;i+=2){
    console.log(i)
}
//Guessing number game
console.log("Create a game where you start with any random game number,Ask the user to keep guessing the game number until user enters correct number");

let gameNum=23;
let userNum=prompt("Enter the number");
while(gameNum!=userNum){
    userNum=prompt("You entered wrong number,Guess again")
}
console.log("Congratulations,You won")
/////////////////////







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
//String in JS
let str="Twinkal Paralkar"
let str1='Star'
console.log("String built-in property",str.length,str[0])
console.log(`(String Interpolation)Template literal with backquote for using variable as single string
\nname\tis\t${str}\t${2+3+4} embedded expression`)
console.log("escape character\n for next line and \t for tab space ")
let s="s\tB"//escape character is counted as single chracter (length =1 for \n)
console.log(`${s} is length ${s.length}`)

//String Methods(in-built functions)
let string1="   Mumbai Metro"
console.log(string1.toUpperCase(),string1)// Method will never change original string value.
//it will always return new String.
//Javascript String is immutable (not change).
//Some method make some change in String but they actually create new string
// string1=string1.toLowerCase()
console.log("new string will update in old string",string1)
console.log(string1.trim(),"remove space from starting and ending")
console.log(string1.slice(3),string1.slice(1,4),"end is optional and not included\n(slice is used to  divide string)");
console.log(string1.replace("mb","l"),"Replace method is case sensitive and \nit will only replace first matching element(not all)")
console.log(`${string1} and ${string1.replaceAll("M","l")}`)

let str2=" Indians "
let str3="best city to grow"
console.log(string1.concat(str2,str3),"to join multiple strings")
console.log(string1+str2+str3,"to join multiple strings(similar way by operator)")

console.log("Indices",string1[4],string1.charAt(3),typeof string1)
console.log("not existing index will give 'undefined'",string1[100])
string1[0]="S"//not Updating in JS(ignore by JS)no error
console.log(string1)
let userName=prompt("Enter full name:")
console.log(`@${userName.toLowerCase()}${userName.length}`)

////
// Array in JS
const marks=[23,56,89]
marks[0]=10//we can update array by indices
console.log(marks,typeof marks,marks.length,marks[2],marks[100])

for(let i in marks){
    console.log(marks[i])
}
let sum=0
for(let mark of marks){
    console.log(mark)
    sum+=mark
}console.log(`average is ${sum/marks.length}`)
for(let i=0;i<marks.length;i++){
    console.log(marks[i])
}
//Practice question 
console.log("Array with prices of 5 items,all items have offer 10 % off on them.\nChange the array to store final price after applying offer.")
let finalPrice=[200,300,100,555]
for(let i =0;i<finalPrice.length;i++){
    let percent=finalPrice[i]/10
    finalPrice[i]-=percent;
}
console.log(finalPrice)
//Array Method
let food=["veg","non-veg","chicken","juice"]
food.push("chips")//Add element at last(Making changes to original Array)
food.pop()//Remove element from last(Making changes to original Array)
food.unshift("carrot")//Add element at first position(Making changes to original Array)
food.shift()//Remove element from first position(Making changes to original Array)

console.log(food,food.toString(),"convert Array into String seperated by comma\n(not Making changes to original Array)")
console.log(food.concat(["a1","a2"],["b1","b2"]),food)//to join Multiple Array(not Making changes to original Array)
console.log(food.slice(1,3))//cut Array into small array(not Making changes to original Array),end is not included
console.log(food.slice(),"is used to copy same Array")
//splice method(start index,number of deleting element from that index,adding element at that index by shifting other element ) 
//splice(start index,delcount,newelement)
// food.splice(1,0,"c1","c2")//adding(Making changes to original Array)
// food.splice(1,1,"c1","c2")
// food.splice(1,2)//deleting
// food.splice(1,1,"c2")//replace
let deletedPart=food.splice(2)//divid array
food.splice()//no change, no error
console.log(food,deletedPart)

///

let company=["Bloomberry","Microsoft","Uber","Google","IBM","Netflix"]
company.shift()
console.log(company)
company.splice(1,1,"Ola")
company.push("Amazon")
///
console.log("I am"*100)//Not a Number
///////////Function///////////////////////////////////
//it is used to avoid redundancy(don't repeat yourself)
function Mymessage(msg){//msg is paramter,local varible,block scope
 return msg;//return only single value ,no code after return statement
}
console.log(Mymessage(),"argument is not passed,msg is not have value")
console.log(Mymessage("I love JS"),"argument is passed")
//Arrow function :-Compact way of writing function(Modern JS)
const sum=(a,b)=>{return a+b;}
console.log(sum(2,90))
////function return count of vowel in String
let str="hello";
function checkVowel(str){
    let count=0;
    for(let char of str){
        if(char=="a"
        ||char=="e"
        ||char=="i"
        ||char=="o"
        ||char=="u"){
            count++;
        }
    }
    return count;
}
console.log(checkVowel(str))
///difference between method and function
//A function is a block of code that performs a specific task or calculation
//A Method is a function that is associated with an object or a class or any Data structure
"err".toUpperCase() //is Method
let a=[23,56,78]

a.forEach((val,idx,arr)=>{console.log(val*val,idx,arr)})//forEach is used for accessing each value(not return any array)
let r=a.map((val,idx,arr)=>{console.log(val,idx,arr)})//similar to forEach ,create new array always
const result=a.filter((val)=> {
    return val%2==0;
})//filter array with return condition(create new array)
console.log(r,result,"map don't use return statement then  [undefined, undefined, undefined] ")
r=a.map((val)=>{return val**2;})
console.log(r)

/*here we passed function into forEach,map,filter.
callback function is function passed as argument into other function.
High order function or method is function take other function as argument and return other function.
forEach is HOF
*/
// reduce :-used to convert any array into single vale like sum,average
r=a.reduce((result,currentval)=>{
    return result +currentval
})
console.log(r)
r=a.reduce((result,currentval)=>{
    return result>currentval? result:currentval;
})
console.log("maximum is",r)
///////
let arr=[90,80,70,34,100]
arr.filter((val)=>{
    return val>=90;
})
///////
let n=prompt("Enter number")
let fact=[]
for(let i=1;i<=n;i++){
fact.push(i)
}
const resultValue=fact.reduce((res,curr)=>{
    return res*curr;
})
console.log(fact,`factorial of ${n} is ${resultValue}`)
///////////////////////////////







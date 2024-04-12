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



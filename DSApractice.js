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

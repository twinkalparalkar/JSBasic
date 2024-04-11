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
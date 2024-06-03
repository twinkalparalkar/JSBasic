# HOISTING & LET, VAR, CONST
1)Execution context
2)Hoisting 
index()
function index(){
console.log("hello")
}
 
3)Temporal dead zone
4)The difference between let, var, const
-before intialation,let and const is in temporal dead zone
-after intialation,
const b=90;
let a=90;
window.a is not used
//console.log(a,window.a+"is undefined")
for var, window.a is used
-redeclaration
for var, it is allowed
for let and const,it is not allowed
-Changing value
for var and let,it is allowed
for const, it is not allowed


5)Different types of errors and how to produce them.
-Syntax error:-Let is not unexpected
-type error:-const type not allowed to change value
-reference error:-Y is not defined
6)Implementation-based questions based on let, var, const

# CLOSER
1)Closer:-nested Function will have lexical scope of its parent in the form of closer.
2)Implementation-based questions based on closer
3)lexical Scopes:-the way of finding variable in first the local space then its parent's LE and finally in global space
4)Lexical Environment=local space+LE of its parent
	
# CALLBACK
	Callback
	Callback Hell and implementation of it
	How to solve the callback hell problem with a promise
	How to solve the promise hell problem with async await

# PROMISE
	Promise
	Important Promise methods and their implementations with real-life examples
		ALL
		ANY
		RACE

# ASYNCHRONOUS JS
	API
	Various Axios Methods and Their usecase with Implementations
		GET
		POST
		PUT
		DELETE
		PATCH
	Async Keyword
	Await keyword and its limitations
	EventLoop
	Callstack
	Callback Queue:-?
	Microtask Queue:-?
m1=JSON.stringify(m):-is used to convert object into JSON format

# CALL, APPLY, BIND
:-to use object and method together
1)Call
2)Apply
3)Bind
Example and there use cases with implementations

function addfunction(a,b,c){ 
	console.log(this.num+a+b+c)
	}
const obj={num:90}

addfunction.call(obj,3,4,5)
addfunction.apply(obj,[3,4,5])

let result=addfunction.bind(obj)
result(5,3,4)

Pollyfill with implementations:-?
Create your own Call, Apply, Bind Method


# ARRAY, OBJECT, STRING
	Array
Various Important Methods and Their Implementations
Map
Filter
Reduce
ForEach
Find
	
# Object
Various Important Methods and Their Implementations
	Keys
	Values
	Entries

# String
	Various Important Methods and Their Implementations
		Replace
    ReplaceAll
    toLowerCase
    toUpperCase
    Split
    Slice
    Splice

# OOPs
	Pillars of OOPs
	Explanation of all the pillars with real-world examples
	Class
	Constructor
	Static keyword
	Super keyword
  Prototype
	Prototype Chain
  Create your own Reduce method
  Implementation based questions

# FUNCTIONS
	Higher Order Functions
	Callback Function
	First Class Functions
	Arrow Functions

# SPREAD & REST
	Spread Operator
	Rest Operator
	Difference
	Use cases and Implementations

# CURRING
	Curring:-?
	Implementation with Usecase
	Infinite Curring implementation with Usecase

# BROWSER
1)LocalStorage, SessionStorage, Cookies:-
for LocalStorage,Never Expire 
memory:-10mb
storage Location:-browser(store as key:pair)

localStorage.setItem("key",56)
localStorage.getItem("key")
localStorage.removeItem("key")

for SessionStorage,Expire after closing tab
memory:-5mb
storage Location:-browser

for Cookies,Manually set of Expire
memory:-4kb
storage Location:-browser and server

2)How to use them
	What is the difference
	Common API status codes
		200
		400
		500
		201

Q1)print 1 at 1sec and print 2 at 2 sec and print 3 at 3sec by var
:-
//for(var i=0;i<4;i++){
//setTimeout(()=>console.log(i),i*1000)
//}

function y(i){
	setTimeout(()=>console.log(i),i*1000)
}

for(var i=0;i<4;i++){
	y(i)
}

Q2)const print1=(arr)=>{
}
const nam1=print1(["Lakshmi","Lakshman"])
nam1()//give "Lakshmi"
nam1()//give "Lakshman"
:-
const print1=(arr)=>{
let i=0;
return ()=>{
console.log("print",arr[i])
i++;
}
}
const nam1=print1(["Lakshmi","Lakshman"])
nam1()//give "Lakshmi"
nam1()//give "Lakshman"

Q3)
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

Q4)const questions = [
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

for(var i=0;i<questions.)


// Print all titles.

Q5. Promise of print after 5 sec by promise

Q6. recurrsion Question



# HOISTING & LET, VAR, CONST
1)Execution context
2)Hoisting
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
	Closer
	Implementation-based questions based on closer
	Scopes
	Lexical Environment
	
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

# CALL, APPLY, BIND
	Call
	Apply
	Bind
	Example and there use cases with implementations
Pollyfill	with implementations:-?
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

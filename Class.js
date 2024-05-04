// Class and Object
const student={//object is having properties and function
    fullName:"Shreya",
    age:56,
    printMark(){
        console.log("direct passing function")
    },
    calc: function(){
        return "anonamous function without name"
    },
    calc1:()=>{
        console.log("arrow function",this.age)
    },
    calc2:function detail(p){
        console.log(p)
    }
}
console.log(student,student.fullName,student["age"],student.calc(),student.calc1())
student.calc1()
student.printMark()
student.calc2("pasing argument")
//this.age ->take respective object's property 
/*Prototype -> this provides default methods like .pop(),push("") in array 
[[Prototype]] : Object
[[Prototype]] : Array
*/
//Prototype is reference to object
const emp={
    calc(){
        console.log("salary")
    }
}

const karan={
    salary:5000
}
//karan object can use property or method of emp object by __proto__

karan.__proto__=emp 
console.log(karan.salary,karan)
karan.calc()//one object can use other object's property ,other object come into prototype 
//If object and prototype have same method, object's method will be used 

const object1={attritube1:"prototype"}
const object2={attritube1:"original property"}
object2.__proto__=object1 
console.log(object2,object2.attritube1)
//Class in JS :-always have default constructor for initialization in prototype
class Car{
    constructor(speed,type){//custom constructor for pasing argument
        this.speed=speed
        this.brandType=type 
        console.log("creating new object")
    }
    start(){
        console.log("start Car")
    }
    stop(time){
        console.log(time)
    }
}
let obj1=new Car(39,"TVS")//this argument for constructor
obj1.stop(49)
obj1.brandType="RD"//change object property
console.log(obj1)

//Inheritance



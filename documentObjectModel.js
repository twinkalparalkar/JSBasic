////DOM:-Document Object Model in JS
/*
In Web Development,There is 3 part:HTML(for Structure),CSS(for Style),JS(for Logic)
Best practice is to create 3 seperate file.
It will increase Readability of code,Modularity(seperation of code),Browser's Caching (less loading time)

CSS(mention this in Head tag of HTML file):-<link rel="stylesheet" href="style.js"/>
JS(mention this in Body tag of HTML file at end):-<script src="logic.js"></script>
We can used Multiple JS and CSS file in HTML.

Window Object:-is Gloabl object automatically created by Browser.(it is browser object,not JS object)

we can access HTML tag/code in JS by using DOM means
All HTML code is converted into document object Which is present in Window Object.  

Window :->Document:->HTML:->Head(meta element)+Body(page content)
each node is object
When web page is created then DOM tree is created
*/
window.console.log("Hello")
console.log("hello")
window.alert("Hi ,How are you?")//here we don't mention word "window". browser can understand automatically
console.log(document,window.document)
console.dir(document)//give all properties and methods

console.log(document.body)
console.log(document.head.title)
document.body.style.color="red";
///DOM Manipulation(to Make changes)
// selecting Element:
console.log("ID is used for unique element",document.getElementById("para"))//return null if empty or single element tag
console.log("Class is used for common style to multiple element",document.getElementsByClassName("box"))//return HTML collection (similar like Array)
document.getElementById("para").style.color="blue";
console.log(document.getElementsByTagName("p"))//return HTML collection

//best ways of selecting
console.log(document.querySelector("#para"))//return first matching element(ID,Class,Tag)
console.log(document.querySelector(".box"))
console.log(document.querySelectorAll("div"))//return all matching element
//DOM Properties
console.log(document.querySelector("#para").innerText)//return text content of it and its children
console.log(document.querySelector("#para").innerHTML)//return HTML content 
console.log(document.querySelector("#para").tagName)//retrun tag name
console.log(document.querySelector("#para").textContent)//return text content even hidden text
/////Create p element"Hello "append "Js Tutorial" to this text using JS
let paragraph=document.querySelector("#para")
paragraph.innerText=paragraph.innerText +" ,Js Tutorial"//we can change value also
////Create 3 div with common class name "Box" Access them and add some Uniqueness of them
let boxs=document.querySelectorAll(".box")
for(let box of boxs){
 box.style.width="100px"//node.style:-to change styling
 box.style.height="100px"
 box.style.margin="20px"
box.style.fontSize="20px"
// box.style.visibility="hidden"
 box.style.backgroundColor="yellow"
 
}
///id ,class are attribute 
console.log(paragraph.getAttribute("id"))///to get attribute value
paragraph.setAttribute("class","box")//inserting attribute
//Insert element to DOM:-1)create element 2)add element 
let newBtn=document.createElement("button")
newBtn.innerText="Click me"
let div=document.querySelector("div")
div.append(newBtn)//add at end of node (inside)
div.prepend(newBtn)//add at start of node (inside)
div.before(newBtn)//add at before node (outside)
div.after(newBtn)//add at after node (outside)
//add button at starting of body
document.body.prepend(newBtn)//document.querySelector("body").prepend(newBtn)
// Delete element in DOM :-remove that button
document.body.querySelector("button").remove() 
//adding new class in Paragraph element without removing previous class
paragraph.setAttribute("class","newClass")//remove previous class
paragraph.classList.add("newClass")//adding with previous :-classList
/*
Events in JS :-changes in state of object e.g. mover events ,keyup,keydown,form submit,print event 
Inline event handling(using event inside HTML tag):-<button onclick="console.log('button was clicked')">Click me!</button>
onclick,ondblclick, onmouseover is attribute 
but Inline event handling is bad way (it makes HTML code bulky)
Use Event handling in JS :-node.event=(e)=>{//handle}
Event object e is special object that store detail about .....e.target,e.type,e.clientX ,e.clientY
Event Listeners (addEventListener(), removeEventListener()):-when event occur, it executed
node.addEventListener(event, callback)//we can use multiple event listener
*/
let btn=document.querySelector('button')
console.log(btn)
btn.onclick=(e)=>{
    console.log(e.target,e.type,e.clientX ,e.clientY,e)//Event Object
    console.log("Hello,I am JS event handling")
}//JS event Handling 
//JS event Handling is having high priority than Inline Event Handling.last event handling is updated 
btn.addEventListener('click',(e)=>{
    console.log("clicked once again")
})
// for removing ,we need to pass that callback function as varible
const handler1=()=>{
    console.log("Handler1 deleted ")
}
btn.addEventListener("click",handler1)
btn.removeEventListener('click',handler1)
///Create a toggle button that changes the screen to dark-mode and Light mode when clicked and lightmode when clicked again 
let btn1=document.querySelector('#mode')
let mode="light"
btn1.addEventListener('click',()=>{
    if(mode=='light'){
        mode="dark"
        // document.body.style.backgroundColor="black"
        document.body.classList.remove('light')
        document.body.classList.add('dark')
    }else{
        mode="light"
        // document.body.style.backgroundColor="white"
        document.body.classList.remove('dark')
        document.body.classList.add('light')
    }
})
console.log(mode)


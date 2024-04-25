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
let paragraph=document.querySelector("#para")
paragraph.innerText=paragraph.innerText +"hello"


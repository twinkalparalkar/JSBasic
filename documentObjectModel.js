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
*/
window.console.log("Hello")
console.log("hello")
window.alert("Hi ,How are you?")//here we don't mention word "window". browser can understand automatically
console.log(document,window.document)
console.dir(document)//give all properties and methods


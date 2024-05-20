let quote=document.querySelector(".quote")
let author=document.querySelector(".author")

window.addEventListener('load',()=>{
    updateQuote()
})

document.querySelector("#newQuoteButton").addEventListener("click",()=>{
    updateQuote()
})

const updateQuote=async ()=>{
    let data=await fetch("https://api.quotable.io/quotes/random?minLength=100&maxLength=140")
    console.log(data)
    let QuoteDetail=await data.json()
    console.log(QuoteDetail,QuoteDetail[0].author,QuoteDetail[0].content)
    quote.innerText=QuoteDetail[0].content
    author.innerText="-"+QuoteDetail[0].author
}

////////////////////////////////////////////
// const getData=async ()=>{
// let data=await fetch("https://api.quotable.io/quotes/random?minLength=100&maxLength=140")
// console.log(data)
// let QuoteDetail=await data.json()
// console.log(QuoteDetail,QuoteDetail[0].author,QuoteDetail[0].content)
// }

// // getData()

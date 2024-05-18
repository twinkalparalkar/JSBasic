const getData=async ()=>{
let data=await fetch("https://api.quotable.io/quotes/random?minLength=100&maxLength=140")
console.log(data)
let QuoteDetail=await data.json()
console.log(QuoteDetail,QuoteDetail[0].author,QuoteDetail[0].content)
}

// getData()

window.addEventListener('load',()=>{
    updateQuote()
})
const updateQuote=()=>{
    
}
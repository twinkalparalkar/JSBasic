const dropdown=document.querySelectorAll(".dropdown select")
const submitButton=document.querySelector("#getCurrency")
const fromFlagImg=document.querySelector("#fromFlagImg")
const toFlagImg=document.querySelector("#toFlagImg")
let msg=document.querySelector("#msg")
const BASE_URL="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies"
//codelist attached 161 locals in dropdown


for(let select of dropdown){
    for(let code in countryList){
       let newOption=document.createElement("option")
       newOption.value=code;
       newOption.innerText=code;
   
       if(select.name==="from" && code==="USD"){//add default select
        newOption.selected="selected"
       }else if(select.name==="to" && code==="INR"){
        newOption.selected="selected"
       }
       select.append(newOption);
    }
}

//Updating Flag Imag with selected dropdown country
const updateFlag=(e)=>{
    let selectedCountry=e.target.value
    if(e.target.name==="from"){
        fromFlagImg.src=`https://flagsapi.com/${countryList[selectedCountry]}/flat/64.png`

    }else if(e.target.name==="to"){
        toFlagImg.src=`https://flagsapi.com/${countryList[selectedCountry]}/flat/64.png`
    }
}
dropdown.forEach((select)=>{
    select.addEventListener('change',updateFlag)
})
//Calculating result with API

const getResult=async (e)=>{
    
    
    let fromCountry=dropdown[0].options[dropdown[0].selectedIndex].value;
    let toCountry=dropdown[1].options[dropdown[1].selectedIndex].value;

    let amount=document.querySelector("#amount")
    let amtvalue=amount.value
    if(amtvalue===""|| amtvalue<1){
        amtvalue=1;
        amount.value=1
    }
    let from=fromCountry.toLowerCase()
    let to=toCountry.toLowerCase()
    
    const api=await fetch(`${BASE_URL}/${from}.json`)
    const data=await api.json()
    
    let exchangeRate=data[from][to]
    let result=amtvalue*exchangeRate

    msg.innerText=`${amtvalue} ${fromCountry} = ${result} ${toCountry}`

}

submitButton.addEventListener('click',(e)=>{
    e.preventDefault()
    getResult()
})

//initail value

window.addEventListener('load',()=>{
    getResult()
})

/* 
API detail for rate of exchange eur to jpy:
https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json
json = fetchJSON(`/currencies/{fromCurrency}`)
rate = json[fromCurrency][toCurrency]

async function getRate(from,toCountry){
    from=from.toLowerCase()
    toCountry=toCountry.toLowerCase()
    
    const api=await fetch(`${BASE_URL}/${from}.json`)
    const data=await api.json()
    console.log(from,toCountry,data[from][toCountry])
    
}
*/



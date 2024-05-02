let userScore=0
let compScore=0
let choices=document.querySelectorAll(".choice")
let msg=document.querySelector('#msg')
let userScorePara=document.querySelector("#user-score")
let compScorePara=document.querySelector("#comp-score")
const computerChoice=()=>{
    const choices=['rock','paper','scissor']
    return choices[Math.floor(Math.random()*3)]
}
const showMsg=(userwin,userChoice,compChoice)=>{
    if(userwin==true){
        msg.innerText=`You win! Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor="green"
        userScore++;
        userScorePara.innerText=userScore;
    }else{
        msg.innerText=`You lose. Your ${compChoice} beats ${userChoice}`
        msg.style.backgroundColor="red"
        compScore++;
        compScorePara.innerText=compScore;
    }
}
const playGame=(userChoice)=>{
    const compChoice=computerChoice()
    console.log(userChoice ,"=",compChoice)
    if(userChoice===compChoice){
        console.log("game is Draw")
        msg.innerText='Game was Draw.Play again.'
    }else{
        let userwin=true;
        if(userChoice==="rock"){
            userwin= compChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
            userwin= compChoice==="rock"?true:false;
        }else{
            userwin= compChoice==="paper"?true:false;
        }
        showMsg(userwin,userChoice,compChoice)
        // if(userChoice==="rock" && compChoice==="paper"){
        //     userwin=false
        // }else if(userChoice==="rock" && compChoice==="scissor"){
        //     userwin=true
        // }else if(userChoice==="paper" && compChoice==="rock"){
        //     userwin=true
        // }else if(userChoice==="paper" && compChoice==="scissor"){
        //     userwin=false
        // }else if(userChoice==="scissor" && compChoice==="paper"){
        //     userwin=true
        // }else if(userChoice==="scissor" && compChoice==="rock"){
        //     userwin=false
        // }
    }

}
choices.forEach((element)=>{
    element.addEventListener("click",(e)=>{
        let userChoice=element.getAttribute('id')
        playGame(userChoice)
    })
})



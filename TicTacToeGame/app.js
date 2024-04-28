let boxes=document.querySelectorAll(".box")
let resetBtn=document.querySelector('#reset-btn')
let newGameBtn=document.querySelector('#new-btn')
let msg=document.querySelector("#msg")

let turnO=true//PlayerO
let winPattern=[
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]]

boxes.forEach((element)=>{
    element.addEventListener('click',(e)=>{
        if(turnO){
            e.target.innerText="O"
        }else{
            e.target.innerText="X"
        }
        turnO=!turnO
        element.disabled=true;
        checkWinner()
    })
})

const resetGame=()=>{
    EnableBoxes()
    turnO=true
    msg.classList.add('hide')
    newGameBtn.classList.add('hide')
}
const showWinner=(pos)=>{
    msg.innerText=`Congratulation,Winner is ${pos}`
    msg.classList.remove('hide')
    newGameBtn.classList.remove('hide')
}
const disableBoxes=()=>{
    boxes.forEach((box)=>{
        box.disabled=true;
    })
}
const EnableBoxes=()=>{
    boxes.forEach((box)=>{
        box.disabled=false;
        box.innerText=""
    })
}
const checkWinner=()=>{
    winPattern.forEach((subarray)=>{
        let pos0=boxes[subarray[0]].innerText;
        let pos1=boxes[subarray[1]].innerText;
        let pos2=boxes[subarray[2]].innerText;
        if(pos0 && pos1 && pos2 && pos0==pos1 && pos1==pos2){
            showWinner(pos0)
            disableBoxes();
        }
    })
}

newGameBtn.addEventListener('click',resetGame)
resetBtn.addEventListener('click',resetGame)
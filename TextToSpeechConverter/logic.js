const inputText=document.querySelector("#Text")
const ButtonListen=document.querySelector("#Listen")
const dropdown=document.querySelector("select")
const voiceGenerator=window.speechSynthesis;
let voices;

window.addEventListener("load",()=>{
    if(dropdown.options.length==0){
        dropdownVoices()
    }
})

ButtonListen.addEventListener("click",()=>{
    document.querySelector("#iconPlay").setAttribute("class","fa-solid fa-pause")
    
    const voiceObject=new SpeechSynthesisUtterance(inputText.value)
    voiceObject.voice=voiceGenerator.getVoices()[dropdown.options[dropdown.selectedIndex].value];
    voiceGenerator.speak(voiceObject);
    
    voiceObject.addEventListener("end", (event) => {
        event.preventDefault()
        document.querySelector("#iconPlay").setAttribute("class","fa-solid fa-play")
    });
    
})

function dropdownVoices(){
    voices=voiceGenerator.getVoices();
    for(let i=0;i<voices.length;i++){
        let option=document.createElement('option')
        option.innerText=voices[i].name +" "+voices[i].lang
        option.id=voices[i].voiceURI
        option.value=i
        if(i==1){
            option.selected="selected"
        }
        dropdown.append(option)
    }
}
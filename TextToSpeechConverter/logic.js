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
    const voiceObject=new SpeechSynthesisUtterance(inputText.value)
    // console.log(voices,voiceObject,inputText.value)
    voiceObject.voice=voiceGenerator.getVoices()[dropdown.options[dropdown.selectedIndex].value];
    // console.log(dropdown.options[dropdown.selectedIndex].value,voiceObject.voice)
    voiceGenerator.speak(voiceObject);
})

function dropdownVoices(){
    voices=voiceGenerator.getVoices();
    // console.log(dropdown)
    for(let i=0;i<voices.length;i++){
        // console.log(voices[i].name,voices[i].voiceURI)
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
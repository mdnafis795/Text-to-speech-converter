let speech = new SpeechSynthesisUtterance();
let Button = document.querySelector("button");
let TextArea = document.querySelector("textarea");

let voices = [];
let voiceselect = document.querySelector("select");
window.speechSynthesis.onvoiceschanged = ()=>{
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, i)=>(voiceselect.options[i] = new Option(voice.name,i)));
}

voiceselect.addEventListener("change", ()=>{
    speech.voice = voices[voiceselect.value];
});

Button.addEventListener("click", ()=>{
    speech.text = TextArea.value;
    window.speechSynthesis.speak(speech);
});
const synth = window.speechSynthesis;
let utter = null;

function toggleSpeak(elementId) {
  const text = document.getElementById(elementId).textContent;

  if (synth.speaking) {
    synth.cancel();
    return;
  }

  utter = new SpeechSynthesisUtterance(text);

  const voices = synth.getVoices();
  const spanishVoice = voices.find(v =>
    v.lang.startsWith("es") && v.name.toLowerCase().includes("female")
  ) || voices.find(v => v.lang.startsWith("es"));

  if (spanishVoice) {
    utter.voice = spanishVoice;
  }

  synth.speak(utter);
}

// En algunos navegadores, las voces no están listas al cargar
if (synth.onvoiceschanged !== undefined) {
  synth.onvoiceschanged = () => synth.getVoices();
}

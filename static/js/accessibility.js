function speakText(text) {
  const synth = window.speechSynthesis;
  const utter = new SpeechSynthesisUtterance(text);

  // Esperar a que las voces estén cargadas
  synth.onvoiceschanged = () => {
    const voices = synth.getVoices();
    // Busca una voz femenina en español
    const spanishVoice = voices.find(v => 
      v.lang.startsWith("es") && v.name.toLowerCase().includes("female")
    ) || voices.find(v => v.lang.startsWith("es")); // fallback si no encuentra explícitamente femenina

    if (spanishVoice) {
      utter.voice = spanishVoice;
    }

    synth.speak(utter);
  };

  // En caso de que ya estén cargadas
  const voices = synth.getVoices();
  if (voices.length > 0) {
    const spanishVoice = voices.find(v => 
      v.lang.startsWith("es") && v.name.toLowerCase().includes("female")
    ) || voices.find(v => v.lang.startsWith("es"));

    if (spanishVoice) {
      utter.voice = spanishVoice;
    }

    synth.speak(utter);
  }
}

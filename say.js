const say = (text, lang = "ja-JP") => { // en-US
  if (!window.SpeechSynthesisUtterance) {
    // console.log("音声合成API非対応");
    return;
  }
  const msg = new SpeechSynthesisUtterance();
  msg.lang = lang;
  msg.text = text;
  msg.volume = 1.0;
  msg.rate = 1.0;
  msg.pitch = 1.0;
  msg.onend = (e) => {
    //console.log(e.elapsedTime);
  };
  speechSynthesis.speak(msg);
};

export { say };

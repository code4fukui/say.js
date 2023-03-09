const say = (text, lang = "ja-JP") => { // en-US
  if (!window.SpeechSynthesisUtterance) {
    // console.log("音声合成API非対応");
    return null;
  }
  return new Promise((resolve) => {
    const msg = new SpeechSynthesisUtterance();
    msg.volume = 1.0;
    msg.rate = 1.0;
    msg.pitch = 1.0;
    msg.lang = lang;
    msg.text = text;
    speechSynthesis.speak(msg);
    msg.onend = (e) => {
      //console.log(e.elapsedTime);
      return resolve(e);
    }
  });
};

export { say };

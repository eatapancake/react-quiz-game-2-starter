import { useState } from "react";
function SpeakForm() {
  const [message, setMessage] = useState("");
  const [rate, setRate] = useState(1);
  const [pitch, setPitch] = useState(1);

  //Change event handler. It gets an event for the tirggered change
  //const onMessageChangr = (event) => {
  //console.log("Change!");
  // console.log(event.target);
  //console.log(event.target.value);
  //const newMessage = event.target.value;
  //setMessage(newMessage);
  // };

  const onMessageChange = (e) => setMessage(e.target.value);

  const onRateChange = (event) => {
    // console.log(event.target.value);
    const newRate = parseFloat(event.target.value);
    setRate(newRate);
  };
  const onPitchChange = (event) => {
    const newPitch = parseFloat(event.target.value);
    setPitch(newPitch);
  };

  const speak = () => {
    // alert(message);
    speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(message);
    utterance.pitch = pitch;
    utterance.rate = rate;
    speechSynthesis.speak(utterance);
  };
  return (
    <div>
      <div>
        <label htmlFor="message">Message:</label>
        <input
          id="message"
          type="text"
          value={message}
          onChange={onMessageChange}
        ></input>
      </div>
      <div>
        <label htmlFor="rate">Rate:</label>
        <input
          id="rate"
          type="range"
          min="0.1"
          max="10"
          step="0.1"
          value={rate}
          onChange={onRateChange}
        ></input>
      </div>
      <div>
        <label htmlFor="pitch">Pitch:</label>
        <input
          id="pitch"
          type="range"
          min="0.01"
          max="2"
          step="0.01"
          value={pitch}
          onChange={onPitchChange}
        ></input>
      </div>

      <button onClick={speak}>Speak 🔉</button>
    </div>
  );
}

export default SpeakForm;

import { useState } from "react";
import Confetti from "react-confetti";

function ConfettiDemo() {
  const [isRunning, setIsRunning] = useState(false);
  const [numParticles, setNumParticles] = useState(200);
  const [windStrength, setWindStrength] = useState(0);
  const [gravityStrength, setGravityStrength] = useState(0.2);

  const toggleConfetti = () => setIsRunning(!isRunning);
  const onParticlesChange = (event) => {
    const newNumParticles = parseInt(event.target.value, 10);
    setNumParticles(newNumParticles);
  };
  const onWindChange = (event) => {
    const newWindStrength = parseFloat(event.target.value);
    setWindStrength(newWindStrength);
  };
  const onGravityChange = (event) => {
    const newGravityStrength = parseFloat(event.target.value);
    setGravityStrength(newGravityStrength);
  };

  const buttonText = isRunning ? "Turn Confetti Off" : "Turn Confetti On";
  return (
    <div>
      <div>
        {/* Number of Particles  */}
        <label htmlFor="num-particles">Num Paricles:</label>
        <input
          type="range"
          id="num-particles"
          min="1"
          max="3000"
          step="1"
          value={numParticles}
          onChange={onParticlesChange}
        ></input>
      </div>
      {/* Wind Slider  */}
      <div>
        <label htmlFor="wind-slider">Wind Slider:</label>
        <input
          type="range"
          id="wind-slider"
          min="-1"
          max="1"
          step=".1"
          onChange={onWindChange}
        ></input>
      </div>
      <div>
        <label htmlFor="gravity-slider">Gravity Slider:</label>
        <input
          type="range"
          id="gravity-slider"
          min="0"
          max="1"
          step=".05"
          onChange={onGravityChange}
        ></input>
      </div>
      <div>
        <button onClick={toggleConfetti}>{buttonText}</button>
      </div>
      <Confetti
        numberOfPieces={numParticles}
        gravity={gravityStrength}
        wind={windStrength}
        run={isRunning}
        colors={["#4ebfbb", "#e879a0", "#e8e179"]}
        confettiSource={
          ({ x: window.innerWidth / 2 },
          { y: window.innerHeight / 2 },
          { w: window.innerHeight },
          { h: 0 })
        }
      ></Confetti>
    </div>
  );
}

export default ConfettiDemo;

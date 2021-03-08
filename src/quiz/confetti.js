import { useState } from "react";
import Confetti from "react-confetti";

function ConfettiMaker() {
  const [isRunning, setIsRunning] = useState(false);
  const [numParticles, setNumParticles] = useState(200);
  const [windStrength, setWindStrength] = useState(0);
  const [gravityStrength, setGravityStrength] = useState(0.2);

  return (
    <div>
      <Confetti colors={["#4ebfbb", "#e879a0", "#e8e179"]}></Confetti>
    </div>
  );
}

export default ConfettiMaker;

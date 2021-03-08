import "./end-screen.css";
import ConfettiMaker from "./confetti";

function EndStat({ label, value }) {
  return (
    <div className="end-screen__stat">
      <div className="end-screen__stat-label">{label}</div>
      <div className="end-screen__stat-value">{value}</div>
    </div>
  );
}

/**
 * EndScreen renders the final game stats
 * @param {object} props
 * @param {number} props.score
 * @param {number} props.bestScore
 * @param {() => void } props.onRetryClick
 */

function EndScreen({ score, bestScore, onRetryClick }) {
  return (
    <div className="end-screen">
      <ConfettiMaker />
      <h1>Quiz Complete!</h1>
      <div className="end-screen__trophy">✨🎂✨.</div>
      <EndStat label="Score" value={score} />
      <EndStat label="Best Score" value={bestScore} />
      <button className="end-screen__button" onClick={onRetryClick}>
        Retry?
      </button>
    </div>
  );
}

export default EndScreen;

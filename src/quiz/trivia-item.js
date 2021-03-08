import "./trivia-item.css";
import shuffle from "../common/shuffle";
import { useState } from "react";
import * as Tone from "tone";

/**
 *
 * @param {object} props
 * @param {string} props.correctAnswer
 * @param {string[] } props.incorrectAnswers
 * @param {string} props.question
 * @param {string} props.difficulty
 * @param {() => void } props.onNextClick
 * @param {(boolean) => void } props.onAnswerSelected
 *
 */

function TriviaItem({
  correctAnswer,
  incorrectAnswers,
  question,
  difficulty,
  onNextClick,
  onAnswerSelected,
}) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const hasPickedAnswer = selectedAnswer !== null;
  let scorePoints = 1;

  console.log(selectedAnswer, hasPickedAnswer);

  const allAnswers = [correctAnswer, ...incorrectAnswers];
  // useState can take a function that is run only when the state is initialized:
  const [shuffledAnswers] = useState(() => shuffle(allAnswers));

  let nextButtonClassName = "trivia-item__button trivia-item__next-button";
  if (!hasPickedAnswer) nextButtonClassName += " trivia-item__button--disabled";

  const onAnswerClick = (event) => {
    const playerAnswer = event.target.innerHTML;
    setSelectedAnswer(playerAnswer);
    const wasPlayerCorrect = playerAnswer === correctAnswer;
    // console.log("was correct: " + wasPlayerCorrect);
    if (difficulty === "medium") {
      scorePoints = 2;
    } else if (difficulty === "hard") {
      scorePoints = 3;
    }

    onAnswerSelected(wasPlayerCorrect, scorePoints);
  };
  //   console.log(shuffledAnswers);

  return (
    <div>
      <p>difficulty: {difficulty}</p>
      <p className="trivia-item__question">{question}</p>
      <ul className="trivia-item__answers">
        {shuffledAnswers.map((answer, i) => {
          let className = "trivia-item__button";

          if (hasPickedAnswer) {
            // trivia-item__button--disabled
            // trivia-item__button--incorrect
            // trivia-item__button--correct
            const pickedThisAnswer = answer === selectedAnswer;
            const isThisCorrect = answer === correctAnswer;

            if (pickedThisAnswer && isThisCorrect) {
              className += " trivia-item__button--correct";
            } else if (pickedThisAnswer && !isThisCorrect) {
              className += " trivia-item__button--incorrect";
            } else {
              className += " trivia-item__button--disabled";
            }
          }

          return (
            <li key={answer}>
              <button
                className={className}
                onClick={onAnswerClick}
                disabled={hasPickedAnswer}
              >
                {answer}
              </button>
            </li>
          );
        })}
      </ul>
      <button
        className={nextButtonClassName}
        onClick={onNextClick}
        disabled={!hasPickedAnswer}
      >
        Next ➡
      </button>
    </div>
  );
}

//Just for testing purposes
// triviaData = triviaData.slice(0,2);

export default TriviaItem;

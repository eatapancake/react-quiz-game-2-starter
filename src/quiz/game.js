import { useState } from "react";
import EndScreen from "./end-screen";
import Stats from "./stats";
import triviaData from "./trivia-data";
import TriviaItem from "./trivia-item";

function Game({ triviaData }) {
  const [gameState, setGameState] = useState({
    score: 0,
    triviaIndex: 0,
    isGameOver: false,
  });

  const { score, triviaIndex, isGameOver } = gameState;
  const questionNumber = triviaIndex + 1;
  const numQuestions = triviaData.length;

  const restartGame = () => {
    setGameState({
      score: 0,
      triviaIndex: 0,
      isGameOver: false,
    });
  };

  const loadNextQuestion = () => {
    if (triviaIndex >= triviaData.length - 1) {
      setGameState({
        ...gameState,
        isGameOver: true,
      });
    } else {
      //Using the spread operator to copy the gameState and override the triviaIndex
      setGameState({
        ...gameState,
        triviaIndex: triviaIndex + 1,
      });
    }
  };

  const onAnswerSelected = (wasPlayerCorrect, scorePoints) => {
    if (wasPlayerCorrect) {
      console.log(
        "The game was told that the player picked an answer",
        wasPlayerCorrect
      );
      setGameState({
        ...gameState,
        score: score + scorePoints,
      });
    }
  };

  let pageContent;
  if (isGameOver) {
    pageContent = (
      <EndScreen score={score} bestScore={0} onRetryClick={restartGame} />
    );
  } else {
    const triviaQuestion = triviaData[triviaIndex];
    const {
      correct_answer,
      incorrect_answers,
      question,
      difficulty,
    } = triviaQuestion;

    pageContent = (
      <TriviaItem
        key={triviaIndex}
        question={question}
        difficulty={difficulty}
        correctAnswer={correct_answer}
        incorrectAnswers={incorrect_answers}
        onNextClick={loadNextQuestion}
        onAnswerSelected={onAnswerSelected}
      />
    );
  }

  //   console.log(correct_answer, incorrect_answers, question);

  return (
    <>
      <Stats
        score={score}
        questionNumber={questionNumber}
        totalQuestions={numQuestions}
      />
      {pageContent}
    </>
  );
}

export default Game;

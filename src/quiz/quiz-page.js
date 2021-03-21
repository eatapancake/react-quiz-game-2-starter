import { useState, useEffect } from "react";
import he from "he";
import Game from "./game";
import LoadingSpinner from "../common/loading-spinner";
import ErrorMessage from "../common/error-message";

function QuizPage() {
  const [quizFetch, setQuizFetch] = useState({
    isLoading: true,
    errorMessage: "",
    data: null,
  });

  //empty array for dependancies means the effect only runs on mount.
  useEffect(() => {
    async function getQuiz() {
      try {
        console.log("Fetching!");
        const url =
          "https://opentdb.com/api.php?amount=10&category=31&type=multiple";
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(
            `Something went wrong, server responded with ${response.status}`
          );
        }

        const json = await response.json();
        const { response_code, results } = json;

        if (response_code === 1) {
          throw new Error("Bad API request - no results");
        } else if (response_code === 2) {
          throw new Error("Bad API request - invalid parameter!");
        }

        //Decode the trivia data HTML entities.
        const decodedResults = results.map((item) => {
          return {
            ...item,
            question: he.decode(item.question),
            correct_answer: he.decode(item.correct_answer),
            incorrect_answers: item.incorrect_answers.map((incorect) =>
              he.decode(incorect)
            ),
          };
        });

        //Successfully passed all the errors check!
        setQuizFetch({
          isLoading: false,
          errorMessage: "",
          data: decodedResults,
        });
      } catch (err) {
        //Display a generic error message.
        setQuizFetch({
          isLoading: false,
          errorMessage:
            "Something went wrong while loading the quiz. Please try again later. 😢",
          data: null,
        });
        //Display specific error for debugging in the console.
        console.error(err);
      }
    }
    getQuiz();
  }, []);

  const { isLoading, errorMessage, data } = quizFetch;

  let contents;
  if (isLoading) contents = <LoadingSpinner />;
  else if (errorMessage !== "")
    contents = <ErrorMessage>{errorMessage}</ErrorMessage>;
  else contents = <Game triviaData={data} />;

  return <main>{contents}</main>;
}

export default QuizPage;

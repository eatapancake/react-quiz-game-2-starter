import { useState, useEffect } from "react";
import he from "he";

//Utility function
function decodeTriviaDate(results) {
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
  return decodedResults;
}

//Another Utility function, but this time, an async one
async function fetchJson(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(
      `Something went wrong, server responded with ${response.status}`
    );
  }

  const json = await response.json();
  return json;
}

function useGetTriviaData(amount = 10, difficulty = "") {
  const [quizFetch, setQuizFetch] = useState({
    isLoading: true,
    errorMessage: "",
    data: null,
  });

  //empty array for dependancies means the effect only runs on mount.
  useEffect(() => {
    async function getQuiz() {
      try {
        // console.log("Fetching!");
        const params = new URLSearchParams({
          amount,
          category: "31",
          type: "multiple",
        });
        if (difficulty !== "") params.append("difficulty", difficulty);
        const url = `https://opentdb.com/api.php?${params.toString()}`;

        const json = await fetchJson(url);
        const { response_code, results } = json;

        if (response_code === 1) {
          throw new Error("Bad API request - no results");
        } else if (response_code === 2) {
          throw new Error("Bad API request - invalid parameter!");
        }

        //Successfully passed all the errors check!
        setQuizFetch({
          isLoading: false,
          errorMessage: "",
          data: decodeTriviaDate(results),
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
  }, [amount, difficulty]);

  const { isLoading, errorMessage, data } = quizFetch;
  return [isLoading, errorMessage, data];
}

export default useGetTriviaData;

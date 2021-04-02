import Game from "./game";
import LoadingSpinner from "../common/loading-spinner";
import ErrorMessage from "../common/error-message";
import useGetTriviaData from "./hooks/use-get-trivia-data";

function QuizPage() {
  // Array destructuring to create local variable with our own names.
  const [isLoading, errorMessage, data] = useGetTriviaData(5, "easy");

  let contents;
  if (isLoading) contents = <LoadingSpinner />;
  else if (errorMessage !== "")
    contents = <ErrorMessage>{errorMessage}</ErrorMessage>;
  else contents = <Game triviaData={data} />;

  return <main>{contents}</main>;
}

export default QuizPage;

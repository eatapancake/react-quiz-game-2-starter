import { useState, useEffect } from "react";
import ErrorMessage from "../common/error-message";
import LoadingSpinner from "../common/loading-spinner";

function RandomDogs() {
  const [DogFetch2, setDogFetch2] = useState({
    IsLoading: true,
    errorMessage: "",
    doge: "https://images.dog.ceo/breeds/shiba/shiba-5.jpg",
  });

  useEffect(() => {
    async function main() {
      console.log("Fetch initiated.!");
      try {
        const url = "https://dog.ceo/api/breeds/image/random/6";

        const response = await fetch(url);
        const json = await response.json();

        const { message, status } = json;

        if (status !== "success") {
          throw new Error("Unsuccessful");
        }

        setDogFetch2({
          IsLoading: false,
          errorMessage: "",
          doge: message,
        });
      } catch (err) {
        setDogFetch2({
          IsLoading: false,
          errorMessage: "An error has occured. Please try again",
          doge: null,
        });

        console.log("error has occured ");
        console.error(err);
      }
      console.log("done!");
    }
    main();
  }, []);

  const { IsLoading, errorMessage, doge } = DogFetch2;

  // const doge = DogFetch2;
  // console.log(`hello: ${DogFetch2.doge[0]} `);
  //   const { isLoading, errorMessage, data } = quizFetch;

  // console.log(`this is doge: ${doge}`);
  // console.log(`This is doge: ${doge}`);

  // let hm = () => {
  //   for (let i = 0; i < 7; i++) {
  //     return (
  //       <div>
  //         <a href={doge[i]}>
  //           <img src={doge[i]} alt="random doge"></img>
  //         </a>
  //       </div>
  //     );
  //   }
  // };
  // console.log(doge.image[0]);

  let content = <LoadingSpinner />;
  if (IsLoading) {
    content = <LoadingSpinner />;
    //For some reason the spinner isn't appearing while the images are loading
  } else if (errorMessage !== "") {
    content = (
      <ErrorMessage>Something went wrong. Please try again </ErrorMessage>
    );
  } else {
    content = (
      <div>
        <a href={doge[0]}>
          <img src={doge[0]} alt="random doge" height="200px"></img>
        </a>
        <a href={doge[1]}>
          <img src={doge[1]} alt="random doge" height="200px"></img>
        </a>
        <a href={doge[2]}>
          <img src={doge[2]} alt="random doge" height="200px"></img>
        </a>
        <a href={doge[3]}>
          <img src={doge[3]} alt="random doge" height="200px"></img>
        </a>
        <a href={doge[4]}>
          <img src={doge[4]} alt="random doge" height="200px"></img>
        </a>
        <a href={doge[5]}>
          <img src={doge[5]} alt="random doge" height="200px"></img>
        </a>
      </div>
    );
  }

  return content;
}

export default RandomDogs;

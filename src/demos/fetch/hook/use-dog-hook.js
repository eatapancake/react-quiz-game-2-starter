import { useEffect, useState } from "react";
import getDogs from "../get-dogs";

function useDogHook(numberOfDogs) {
  const [numDogs, setNumDogs] = useState(numberOfDogs);
  const [dogFetch, setDogFetch] = useState({
    isLoading: true,
    errorMessage: "",
    data: null,
  });

  useEffect(() => {
    async function fetchDogs() {
      // Initialize the state!
      setDogFetch({
        isLoading: true,
        errorMessage: "",
        data: null,
      });

      setNumDogs(numberOfDogs);

      try {
        const images = await getDogs(numDogs);
        console.log(numDogs);
        setDogFetch({
          isLoading: false,
          errorMessage: "",
          data: images,
        });
      } catch (err) {
        setDogFetch({
          isLoading: false,
          errorMessage:
            "Something went wrong loading the doggos. Please try again later.",
          data: null,
        });
      }
    }
    fetchDogs();
  }, [numDogs, numberOfDogs]);

  const { isLoading, errorMessage, data } = dogFetch;

  return [isLoading, errorMessage, data];
}

export default useDogHook;

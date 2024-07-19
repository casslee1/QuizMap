import { useState, useEffect } from "react";

export function useResults() {
  const [results, setResults] = useState("");

  const initialAnsweredQuestion =
  const initialGivenUpQuestion =

  const [answeredQuestion, setAnsweredQuestion] = useState(initialAnsweredQuestion);
  const [givenUpQuestion, setGivenUpQuestion] = useState(initialGivenUpQuestion);

  const date = new Date();
  const day = date.getdate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const todaysDate = `${day}-${month}-${year}`;

  useEffect(() => {
    const results = JSON.parse(localStorage.getItem("results"));
    if (results) {
      setResults(results);
    }
  }, []);

  const saveResults = (todaysScore) => {
    const newTodaysResults = {
      date: todaysDate,
      score: todaysScore,
    };

    const combinedStatistics = [...results, newTodaysResults];

    localStorage.setItem("results", JSON.stringify(combinedStatistics));
  };

  return { results, saveResults };
}

export default useResults;

//return { results: localStorage.setItem("statistics", JSON.stringify(combinedStatistics)), saveResults };

/*export function useResults() {
  
  const saveResults = (todaysScore) => {
    const statistics = {
      date: new Date().getTime(),
      score: todaysScore,
    };

    const previousStatistics =
      JSON.parse(localStorage.getItem("statistics")) || [];

    const combinedStatistics = [...previousStatistics, statistics];

    localStorage.setItem("statistics", JSON.stringify(combinedStatistics));
  };

  return { saveResults };
}
export default useResults;*/

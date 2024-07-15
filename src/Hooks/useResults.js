import { useState, useEffect } from "react";

export function useResults() {
  const [results, setResults] = useState("");

  useEffect(() => {
    const results = JSON.parse(localStorage.getItem("results"));
    if (results) {
      setResults(results);
    }
  }, []);

  const saveResults = (todaysScore) => {
    const todaysResults = {
      date: new Date().getTime(),
      score: todaysScore,
    };

    const combinedStatistics = [...results, todaysResults];

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

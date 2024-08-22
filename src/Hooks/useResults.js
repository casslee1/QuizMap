import { useState, useEffect } from "react";
import { getCurrentDate } from "../Components/Date/Date";

export function useResults() {
  const getTodaysDate = () => {
    const date = getCurrentDate();
    //const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const todaysDate = getTodaysDate();

  const localStorageResults = JSON.parse(localStorage.getItem("results")) || [];

  const [results, setResults] = useState(localStorageResults);

  const todaysResults = JSON.parse(localStorage.getItem("todaysResults")) || {};

  let initialAnsweredQuestion = [];
  let initialGivenUpQuestion = [];
  let initialFinished = false;

  if (todaysResults.date !== todaysDate) {
    const clearResults = {
      date: todaysDate,
      answeredQuestions: [],
      givenUpQuestions: [],
      finished: false,
    };
    localStorage.setItem("todaysResults", JSON.stringify(clearResults));
  } else {
    initialAnsweredQuestion = todaysResults.answeredQuestions || [];
    initialGivenUpQuestion = todaysResults.givenUpQuestions || [];
    initialFinished = todaysResults.finished || false;
  }

  const [answeredQuestion, setAnsweredQuestion] = useState(
    initialAnsweredQuestion
  );
  const [givenUpQuestion, setGivenUpQuestion] = useState(
    initialGivenUpQuestion
  );
  const [finished, setFinished] = useState(initialFinished);

  useEffect(() => {
    const newTodaysResults = {
      date: todaysDate,
      answeredQuestions: answeredQuestion,
      givenUpQuestions: givenUpQuestion,
      finished: finished,
    };

    localStorage.setItem("todaysResults", JSON.stringify(newTodaysResults));
  }, [answeredQuestion, givenUpQuestion, finished, todaysDate]);

  const saveResults = (todaysScore) => {
    const newResults = {
      date: todaysDate,
      score: todaysScore,
    };

    const combinedStatistics = [...results, newResults];

    const isDateInResultsAlready = results.some(
      (result) => result.date === todaysDate
    );

    console.log("Is date in results: " + isDateInResultsAlready);
    console.log("Length of stats array " + combinedStatistics.length);

    if (combinedStatistics.length !== 0 && isDateInResultsAlready === false) {
      localStorage.setItem("results", JSON.stringify(combinedStatistics));
      setResults(combinedStatistics);
    }
  };

  const getAverageScore = (results) => {
    if (results.length === 0) return 0;
    let sum = 0;
    for (let i = 0; i < results.length; i++) {
      sum += results[i].score;
    }

    let average = sum / results.length;
    //let roundedAverage = average.toFixed(1);

    if (average > 0) {
      return average;
    } else {
      return 0;
    }
  };

  const averageScore = getAverageScore(results);

  const daysOfZeroScore = results.filter(
    (item) => parseInt(item.score) === 0
  ).length;
  const daysOfOneScore = results.filter(
    (item) => parseInt(item.score) === 1
  ).length;
  const daysOfTwoScore = results.filter(
    (item) => parseInt(item.score) === 2
  ).length;
  const daysOfThreeScore = results.filter(
    (item) => parseInt(item.score) === 3
  ).length;
  const daysOfFourScore = results.filter(
    (item) => parseInt(item.score) === 4
  ).length;

  const handleAnswerClick = (index) => {
    if (!givenUpQuestion.includes(index) && !answeredQuestion.includes(index)) {
      setAnsweredQuestion([...answeredQuestion, index]);
    }
  };

  const handleGiveUpClick = (index) => {
    if (!answeredQuestion.includes(index) && !givenUpQuestion.includes(index)) {
      setGivenUpQuestion([...givenUpQuestion, index]);
    }
  };

  useEffect(() => {
    if (answeredQuestion.length + givenUpQuestion.length === 4) {
      setFinished(true);
    }
  }, [answeredQuestion, givenUpQuestion]);

  return {
    results,
    saveResults,
    answeredQuestion,
    givenUpQuestion,
    finished,
    handleAnswerClick,
    handleGiveUpClick,
    averageScore,
    daysOfZeroScore,
    daysOfOneScore,
    daysOfTwoScore,
    daysOfThreeScore,
    daysOfFourScore,
  };
}

export default useResults;

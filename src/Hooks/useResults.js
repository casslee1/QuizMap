import { useState, useEffect } from "react";

export function useResults() {
  const [results, setResults] = useState([]);

  const todaysResults = JSON.parse(localStorage.getItem("todaysResults")) || {};

  const initialAnsweredQuestion = todaysResults.answeredQuestions || [];
  const initialGivenUpQuestion = todaysResults.givenUpQuestions || [];
  const initialFinished = todaysResults.finished || false;

  const [answeredQuestion, setAnsweredQuestion] = useState(
    initialAnsweredQuestion
  );
  const [givenUpQuestion, setGivenUpQuestion] = useState(
    initialGivenUpQuestion
  );
  const [finished, setFinished] = useState(initialFinished);

  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const todaysDate = `${day}-${month}-${year}`;

  useEffect(() => {
    if (todaysResults.date !== todaysDate) {
      const clearResults = {
        date: todaysDate,
        answeredQuestions: [],
        givenUpQuestions: [],
        finished: false,
      };

      localStorage.setItem("todaysResults", JSON.stringify(clearResults));
    }
  }, [todaysResults.date, todaysDate]);

  useEffect(() => {
    const newTodaysResults = {
      date: todaysDate,
      answeredQuestions: answeredQuestion,
      givenUpQuestions: givenUpQuestion,
      finished: finished,
    };

    localStorage.setItem("todaysResults", JSON.stringify(newTodaysResults));
  }, [answeredQuestion, givenUpQuestion, finished, todaysDate]);

  useEffect(() => {
    const results = JSON.parse(localStorage.getItem("results"));
    if (results.date !== todaysDate) {
      setResults(results);
    }
  }, [todaysDate]);

  const saveResults = (todaysScore) => {
    const newTodaysResults = {
      date: todaysDate,
      score: todaysScore,
    };

    const combinedStatistics = [...results, newTodaysResults];

    localStorage.setItem("results", JSON.stringify(combinedStatistics));
  };

  const getAverageScore = (results) => {
    if (results.length === 0) return 0;
    let sum = 0;
    for (let i = 0; i < results.length; i++) {
      sum += results[i].score;
    }
    return sum / results.length;
  };

  const averageScore = getAverageScore(results);

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
  };
}

export default useResults;

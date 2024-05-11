import { useState, useEffect } from "react";
import { getTodaysQuestions } from "../Classes/getTodaysQuestions";

export function useTodaysQuestions() {
  const [questions, setQuestions] = useState();

  useEffect(() => {
    async function fetchData() {
      const questions = await getTodaysQuestions();
      setQuestions(questions);
    }
    fetchData();
  }, []);

  return questions;
}

import { useState, useEffect } from "react";
import { getTodaysQuestions } from "../Classes/getTodaysQuestions";

export function useTodaysQuestions() {
  const [questions, setQuestions] = useState();

  useEffect(() => {
    const questions = getTodaysQuestions();
    setQuestions(questions);
  }, []);

  return questions;
}

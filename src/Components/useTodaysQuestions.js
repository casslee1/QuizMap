import { useState, useEffect } from "react";
import { getTodaysQuestions } from "../Classes/getTodaysQuestions";

export function useTodaysQuestions() {
  const [questions, setQuestions] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const questions = await getTodaysQuestions();
        setQuestions(questions);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return { questions, loading, error };
}

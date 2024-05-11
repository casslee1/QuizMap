import Question from "./question";

export const getTodaysQuestions = async () => {
  const currentDay = new Date().getDay();

  const response = await fetch("/data.json");
  const data = await response.json();

  const questions = data
    .filter((item) => parseInt(item.questionDay) === currentDay)
    .map(
      (item) =>
        new Question(
          item.questionText,
          item.answerText,
          item.lat,
          item.lon,
          item.answerImage,
          item.questionDay
        )
    );
  return questions;
};

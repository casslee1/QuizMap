import Question from "./question";
//import { getTestingDate } from "../Components/Date/Date";

export const getTodaysQuestions = async () => {
  const currentDay = new Date().getDay();
  //const currentDay = getTestingDate();

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

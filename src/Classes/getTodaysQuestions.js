import Question from "./question";
import { getCurrentDate } from "../Components/Date/Date";
import { adjustPath } from "./util";

export const getTodaysQuestions = async () => {
  const date = getCurrentDate();
  const currentDay = date.getDay();
  //const currentDay = new Date().getDay();

  const response = await fetch(adjustPath("/data.json"));
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

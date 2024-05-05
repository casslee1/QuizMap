import Question from "./question";
import data from "../../public/data.json";

export const getTodaysQuestions = () => {
  const questions = data.map(
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

/*const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const currentDate = new Date();
const dayOfWeek = currentDate.getDay();
const day = weekdays[dayOfWeek];*/

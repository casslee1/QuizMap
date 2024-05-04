import Question from "./question";

export const getTodaysQuestions = () => {
  return [
    new Question("This is question number one"),
    new Question("This is question number two"),
    new Question("This is question number three"),
    new Question("This is question number four"),
  ];
};

/*export const getTodaysQuestions = () => {
  return [
    new Question("This is question number one"),
    new Question("This is question number two"),
    new Question("This is question number three"),
    new Question("This is question number four"),
  ];
};

const weekdays = [
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

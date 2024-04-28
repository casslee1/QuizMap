import { useState, useEffect } from "react";
import Box from '../Components/Box/Box';
import QuestionsAndMap from '../Components/QuestionsAndMap/QuestionsAndMap';
import Button from '../Components/Button/Button';
import '../Styles/index.css';
import { getTodaysQuestions } from "../Classes/GetTodaysQuestions";

const Game = () => {

const [selectedQuestion, setSelectedQuestion] = useState(0);
const [questions, setQuestions] = useState();

useEffect(() => {
    const questions = getTodaysQuestions();
    setQuestions(questions);
}, []);

    return (
      <div>

        <div className='background'>

        <div className="smallButtonWrapper">
         <Button name="?" buttonStyle="smallButton" whereTo="/about"/>
        </div>

          <div className="gameWrapper">

            <div className="boxWrapper">
             <div onClick={() => setSelectedQuestion(0)}><Box boxNum="1" /></div>
             <div onClick={() => setSelectedQuestion(1)}><Box boxNum="2" /></div>
             <div onClick={() => setSelectedQuestion(2)}><Box boxNum="3" /></div>
             <div onClick={() => setSelectedQuestion(3)}><Box boxNum="4" /></div>
            </div>

            <div>
             <h2>Question {selectedQuestion + 1}</h2>
             {questions == null ? "None" : questions[selectedQuestion].questionText}
             <QuestionsAndMap />
            </div>

          </div>
        </div>
      </div>
    );
  };
  
  export default Game;

  /*<QuestionsAndMap question="Foo?"/>*/
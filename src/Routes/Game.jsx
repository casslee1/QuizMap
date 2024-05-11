import { useState, } from "react";
import { useNavigate } from "react-router-dom";
import Box from '../Components/Box/Box';
import QuestionAndMap from '../Components/QuestionAndMap/QuestionAndMap';
import Button from '../Components/Button/Button';
import '../Styles/index.css';
import { useTodaysQuestions } from "../Components/useTodaysQuestions";


const Game = () => {

  const navigate = useNavigate()

  const [selectedQuestion, setSelectedQuestion] = useState(0);

  const questions = useTodaysQuestions();

  const question = questions == null ? null : questions[selectedQuestion].questionText;

    return (
      <div>

        <div className='background'>

        <div className="smallButtonWrapper">
         <Button name="?" buttonStyle="smallButton" handleClick={()=>{navigate("/about")}} />
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
             <QuestionAndMap questionDisplay={question} />
            </div>

          </div>
        </div>
      </div>
    );
  };
  
  export default Game;


  /*const [selectedQuestion, setSelectedQuestion] = useState(0);
const [questions, setQuestions] = useState();

useEffect(() => {
    const questions = getTodaysQuestions();
    setQuestions(questions);
}, []);

function useTodaysQuestions() {
  let [questions, setQuestions] = useState();
  questions = getTodaysQuestions();
  setQuestions(questions);
  return questions;
} 

questions == null ? "None" : questions[selectedQuestion].questionText*/
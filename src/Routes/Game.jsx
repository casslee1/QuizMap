import { useState, } from "react";
import { useNavigate } from "react-router-dom";
import Box from '../Components/Box/Box';
import QuestionAndMap from '../Components/QuestionAndMap/QuestionAndMap';
import Button from '../Components/Button/Button';
import '../Styles/index.css';
import { useTodaysQuestions } from "../Components/useTodaysQuestions";
import CircularProgress from '@mui/material/CircularProgress';


const Game = () => {

  const navigate = useNavigate()

  const [selectedQuestion, setSelectedQuestion] = useState(0);

  const { questions, loading, error} = useTodaysQuestions();

  const question = questions == null ? null : questions[selectedQuestion].questionText;
 
  if (loading) {
    return <div><CircularProgress /></div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

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



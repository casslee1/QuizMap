import { useState, } from "react";
import { useNavigate } from "react-router-dom";
import Box from '../Components/Box/Box';
import QuestionAndMap from '../Components/QuestionAndMap/QuestionAndMap';
import Button from '../Components/Button/Button';
import '../Styles/index.css';
import { useTodaysQuestions } from "../Hooks/useTodaysQuestions";
import CircularProgress from '@mui/material/CircularProgress';


const Game = () => {

  const navigate = useNavigate()

  const [selectedQuestion, setSelectedQuestion] = useState(0);
  const [answeredQuestion, setAnsweredQuestion] = useState([]);
  const [givenUpQuestion, setGivenUpQuestion] = useState([]);

  const { questions, loading, error} = useTodaysQuestions();

  const question = questions == null ? null : questions[selectedQuestion];

  const handleAnswerClick = (index) => {
    if (!givenUpQuestion.includes(index)){
      setAnsweredQuestion([...answeredQuestion, index]);
    }
  };

  const handleGiveUpClick = (index) => {
    if (!answeredQuestion.includes(index)){
      setGivenUpQuestion([...givenUpQuestion, index]);
    }
  };
 
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
             {questions.map((_, index) => (
              <div key={index} onClick={() => setSelectedQuestion(index)} >
                <Box boxNum={index + 1}  isAnswered={answeredQuestion.includes(index)} gaveUp={givenUpQuestion.includes(index)} boxImage={question.answerImage}/>
              </div>
            ))}
          </div>

          <div>
            <h2>Question {selectedQuestion + 1}</h2>
            <QuestionAndMap questionInfo={question} onAnswerClick={() => handleAnswerClick(selectedQuestion)}/>
          </div>

          <div>
            <Button name="I Give Up" buttonStyle="giveUpButton" handleClick={() => handleGiveUpClick(selectedQuestion)}/>
          </div>

        </div>
      </div>
    </div>
  );
};
  
export default Game;



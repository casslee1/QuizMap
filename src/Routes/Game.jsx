import { useState, useEffect } from "react";
import Box from '../Components/Box/Box';
import QuestionAndMap from '../Components/QuestionAndMap/QuestionAndMap';
import Button from '../Components/Button/Button';
import Results from '../Components/Results/Results';
import '../Styles/index.css';
import { useTodaysQuestions } from "../Hooks/useTodaysQuestions";
import CircularProgress from '@mui/material/CircularProgress';
import useResults from "../Hooks/useResults";

const Game = () => {

  const [selectedQuestion, setSelectedQuestion] = useState(0);
  const [answeredQuestion, setAnsweredQuestion] = useState([]);
  const [givenUpQuestion, setGivenUpQuestion] = useState([]);
  const [finished, setFinished] = useState(false);

  const {questions, loading, error} = useTodaysQuestions();

  const question = questions == null ? null : questions[selectedQuestion];

  const {saveResults} = useResults();

  const handleAnswerClick = (index) => {
    if (!givenUpQuestion.includes(index) && !answeredQuestion.includes(index)){
      setAnsweredQuestion([...answeredQuestion, index]);
    }
  };

  const handleGiveUpClick = (index) => {
    if (!answeredQuestion.includes(index) && !givenUpQuestion.includes(index)){
      setGivenUpQuestion([...givenUpQuestion, index]);
    }
  };

  useEffect(() => {
    if (answeredQuestion.length + givenUpQuestion.length === 4) {
      setFinished(true);   
      }
  }, [answeredQuestion, givenUpQuestion]);

  useEffect(() => {
    if (finished === true) {
      console.log("You are finished");  
      const todaysScore = answeredQuestion.length;
      saveResults(todaysScore); 
      }
  }, [finished, saveResults, answeredQuestion]);

  if (loading) {
    return <div><CircularProgress /></div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }


  return (
    <div>

      <div className='background'>

        <Results />

        <div className="gameWrapper">

          <div className="boxWrapper">
             {questions.map((quest, index) => (
              <div key={index} onClick={() => setSelectedQuestion(index)} >
                <Box boxNum={index + 1}  isAnswered={answeredQuestion.includes(index)} gaveUp={givenUpQuestion.includes(index)} boxImage={quest.answerImage} currentBox={selectedQuestion + 1}/>
              </div>
            ))}
          </div>

          <div>
            <h2>Question {selectedQuestion + 1}</h2>
            <QuestionAndMap questionInfo={question} onAnswerClick={() => handleAnswerClick(selectedQuestion)}  givenUp={givenUpQuestion.includes(selectedQuestion)} answered={answeredQuestion.includes(selectedQuestion)}/>
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



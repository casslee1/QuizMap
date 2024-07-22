import { useState, useEffect } from "react";
import Box from '../Components/Box/Box';
import QuestionAndMap from '../Components/QuestionAndMap/QuestionAndMap';
import Button from '../Components/Button/Button';
import Results from '../Components/Results/Results';
import HowToPlay from '../Components/HowToPlay/HowToPlay';
import '../Styles/index.css';
import { useTodaysQuestions } from "../Hooks/useTodaysQuestions";
import CircularProgress from '@mui/material/CircularProgress';
import useResults from "../Hooks/useResults";

const Game = () => {

  const [selectedQuestion, setSelectedQuestion] = useState(0);
  const [resultsDialogOpen, setResultsDialogOpen] = useState(false);
  const [howToDialogOpen, setHowToDialogOpen] = useState(false);
  const [dialogPoppedAfterFinished, setDialogPoppedAfterFinished] = useState(false);

    const handleClickOpen = () => {
    setResultsDialogOpen(true);
  };
  const handleClose = () => {
    setResultsDialogOpen(false);
  };

  const handleClickHowToOpen = () => {
    setHowToDialogOpen(true);
  };
  const handleHowToClose = () => {
    setHowToDialogOpen(false);
  };

  const {questions, loading, error} = useTodaysQuestions();

  const question = questions == null ? null : questions[selectedQuestion];

  const {saveResults, results, answeredQuestion, givenUpQuestion, finished, handleAnswerClick, handleGiveUpClick, averageScore} = useResults();



  useEffect(() => {
    if (finished === true && !dialogPoppedAfterFinished) {
      console.log("You are finished");  
      const todaysScore = answeredQuestion.length;
      saveResults(todaysScore);
      handleClickOpen(); 
      setDialogPoppedAfterFinished(true);
      }
  }, [finished, saveResults, answeredQuestion, dialogPoppedAfterFinished]);


  if (loading) {
    return <div><CircularProgress /></div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }



  return (
    <div>

      <div className='background'>

      <div>
        <Button name="Stats" buttonStyle="smallButton" handleClick={handleClickOpen}/>
          {<Results open={resultsDialogOpen} handleClose={handleClose} results={results} todaysScore={answeredQuestion.length} averageScore={averageScore}/> }
      </div> 

      <div>
        <Button name="?" buttonStyle="smallButton" handleClick={handleClickHowToOpen}/>
          {<HowToPlay openHowTo={howToDialogOpen} handleHowToClose={handleHowToClose}/> }
      </div> 

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



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
  const {saveResults, results, answeredQuestion, givenUpQuestion, finished, handleAnswerClick, handleGiveUpClick, averageScore, 
    daysOfZeroScore, daysOfOneScore, daysOfTwoScore, daysOfThreeScore, daysOfFourScore} = useResults();

let initialQuestion = 0;
for (let i = 0; i < 3; i++){
  if (!answeredQuestion.includes(i) && !givenUpQuestion.includes(i)){
    initialQuestion = i;
    break;
  }
  else {
    initialQuestion = 0;
  }
}


  const [selectedQuestion, setSelectedQuestion] = useState(initialQuestion);
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

      <div className="smallButtonWrapper">
        <Button name="Stats" buttonStyle="smallButton" handleClick={handleClickOpen}/>
          {<Results open={resultsDialogOpen} handleClose={handleClose} results={results} todaysScore={answeredQuestion.length} averageScore={averageScore} 
          daysOfZeroScore={daysOfZeroScore} daysOfOneScore={daysOfOneScore} daysOfTwoScore={daysOfTwoScore} daysOfThreeScore={daysOfThreeScore} daysOfFourScore={daysOfFourScore}/> }
        <div className="divider"></div>
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
            <div className='question'>
              <p>{question.questionText}</p>
            </div>
            <div className="map">
            <QuestionAndMap questionInfo={question} onAnswerClick={() => handleAnswerClick(selectedQuestion)}  givenUp={givenUpQuestion.includes(selectedQuestion)} answered={answeredQuestion.includes(selectedQuestion)}/>
            </div>
          </div>

          <div className="giveUpButtonWrapper">
            <Button name="I Give Up" buttonStyle="giveUpButton" handleClick={() => handleGiveUpClick(selectedQuestion)}/>
          </div>

        </div>
      </div>
    </div>
  );
};
  
export default Game;



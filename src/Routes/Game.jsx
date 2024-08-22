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
import CompassRose from "../SiteImages/CompassRose.png";

const Game = () => {
  const {saveResults, results, answeredQuestion, givenUpQuestion, finished, handleAnswerClick, handleGiveUpClick, averageScore, 
    daysOfZeroScore, daysOfOneScore, daysOfTwoScore, daysOfThreeScore, daysOfFourScore} = useResults();

let initialQuestion = 0;
for (let i = 0; i < 4; i++){
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
  const [showGiveUpButton, setShowGiveUpButton] = useState(true)

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
 
useEffect(() => {
  if (answeredQuestion.includes(selectedQuestion) || givenUpQuestion.includes(selectedQuestion)) {
    setShowGiveUpButton(false);
  }
  else {
    setShowGiveUpButton(true);
  }
}, [givenUpQuestion, answeredQuestion, selectedQuestion]);

  if (loading) {
    return <div><CircularProgress /></div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }



  return (
    <div>

      <div className='background'>

        <div className="gameWrapper">

        <div className="topRowWrapper">
        <div className="cornerLogoWrapper">
          <div className="cornerLogo"><img src={CompassRose} alt="Compass Rose"/></div>
          <div className="cornerLogoText"><p>QuizMap</p></div>
        </div>

        <div className="smallButtonWrapper">
          <div>
          <Button name="Stats" buttonStyle="smallButton" handleClick={handleClickOpen}/>
          {<Results open={resultsDialogOpen} handleClose={handleClose} results={results} todaysScore={answeredQuestion.length} averageScore={averageScore} 
          daysOfZeroScore={daysOfZeroScore} daysOfOneScore={daysOfOneScore} daysOfTwoScore={daysOfTwoScore} daysOfThreeScore={daysOfThreeScore} daysOfFourScore={daysOfFourScore}/> }
          </div>
          <div>
          <Button name="Help" buttonStyle="smallButton" handleClick={handleClickHowToOpen}/>
          {<HowToPlay openHowTo={howToDialogOpen} handleHowToClose={handleHowToClose}/> }
          </div>
        </div> 
        </div>

          <div className="map">
            <QuestionAndMap questionInfo={question} onAnswerClick={() => handleAnswerClick(selectedQuestion)}  givenUp={givenUpQuestion.includes(selectedQuestion)} answered={answeredQuestion.includes(selectedQuestion)}/>
          </div>

          <div className="boxAndQuestionWrapper">
           
            <div className="boxWrapper">
              {questions.map((quest, index) => (
                <div key={index} onClick={() => setSelectedQuestion(index)} >
                <Box boxNum={index + 1}  isAnswered={answeredQuestion.includes(index)} gaveUp={givenUpQuestion.includes(index)} boxImage={quest.answerImage} currentBox={selectedQuestion + 1}/>
                </div>
              ))}
            </div>
          
            <div className="question">
              <h2 className="questionHeading">Question {selectedQuestion + 1}</h2>
              <p>{question.questionText}</p>
              <div className="giveUpButtonWrapper">
                {showGiveUpButton && <Button name="I Give Up" buttonStyle="giveUpButton" handleClick={() => handleGiveUpClick(selectedQuestion)}/>}
              </div>
            </div>
            
          </div>
             
         </div>
      </div>
    </div>
  );
};
  
export default Game;


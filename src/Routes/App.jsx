/*import { Link } from "react-router-dom";*/
import Description from "../Components/Description/Description";
import Button from "../Components/Button/Button";
import CompassRose from "../Images/CompassRose.png";
import "../Styles/index.css"


const App = () => {
  return (
    <div className="backgroundLanding">

      <div className="appWrapper">
        <div>
        <h1 className="tenor-sans-regular">QuizMap</h1>
        </div>
        
        <Description descText="Welcome! Answer a series of trivia questions by finding the location of the answer on a map." />
      
        <div>
        <Button name="Play" buttonStyle="playButton" whereTo="game"/>
        </div>

        <div className="compassContainer">
          <img src={CompassRose} alt="Compass Rose"/>
        </div>
      </div>

    </div>
  );
};

export default App;


  /*<nav>
        <ul>
          <li>
          <Link to="game">game page</Link>
          </li>
          <li>
          <Link to="about">about page</Link>
          </li>
          <li>
          <Link to="results">results page</Link>
          </li>
        </ul>
  </nav>*/
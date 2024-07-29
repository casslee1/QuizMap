import { useNavigate } from "react-router-dom";
import Description from "../Components/Description/Description";
import Button from "../Components/Button/Button";
import CompassRose from "../SiteImages/CompassRose.png";
import "../Styles/index.css";


const App = () => {

  const navigate = useNavigate()

    return (
      <div className="backgroundLanding">

        <div className="landingPageTitle"> <h1 className="tenor-sans-regular">QuizMap</h1></div> 
        <div className="compassContainer"><img src={CompassRose} alt="Compass Rose"/></div>
        <div className="landingPageDescription"><Description descText="Welcome! Answer a series of trivia questions by finding the location of the answer on a map."/></div>
        <div className="landingPageButton"><Button name="Play" buttonStyle="playButton" handleClick={()=>{navigate("game")}}/></div>

      </div>
    );
};

export default App;


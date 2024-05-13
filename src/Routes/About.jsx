import Button from '../Components/Button/Button';
import "../Styles/index.css"
import { useNavigate } from "react-router-dom";

const About = () => {

  const navigate = useNavigate()

    return (
      <div>

        <div className="background">

          <div className="smallButtonWrapper">
            <Button name="X" buttonStyle="smallButton" handleClick={()=>{navigate("/game")}}/>
          </div>

          <div className="descriptionWrapper">
            <h2>How To Play</h2>
            <p>This will be a description of how to play the game.</p>
            <ul>
              <li>Maybe part of the instructions</li>
              <li>will be a list</li>
            </ul>
          </div>

        </div>

      </div>
    );
};
  
export default About;
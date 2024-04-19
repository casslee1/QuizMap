import Button from '../Components/Button/Button';
import "../Styles/index.css"

const About = () => {
    return (
      <div>

        <div>

          <div className="smallButtonWrapper">
          <Button name="X"/>
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
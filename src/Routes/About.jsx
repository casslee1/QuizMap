import SmallButton from '../Components/SmallButton/SmallButton';
import "../Styles/index.css"

const About = () => {
    return (
      <div>

        <div className="background">

          <div className="smallButtonWrapper">
          <SmallButton smButName="X"/>
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
import Box from '../Components/Box/Box';
import Question from '../Components/Questions/Question';
import Map from '../Components/Map/Map';
import Button from '../Components/Button/Button';
import '../Styles/index.css';

const Game = () => {
    return (
      <div>

        <div className='background'>

        <div className="smallButtonWrapper">
         <Button name="?" buttonStyle="smallButton" whereTo="/about"/>
        </div>

          <div className="gameWrapper">

            <div className="boxWrapper">
             <Box boxNum="1"/>
             <Box boxNum="2"/>
             <Box boxNum="3"/>
             <Box boxNum="4"/>
            </div>

            <div>
             <h2>Question</h2>
             <Question question="Foo?"/>
            </div>

            <div className="mapWrapper">
             <Map />
            </div>

          </div>
        </div>
      </div>
    );
  };
  
  export default Game;
import Box from '../Components/Box/Box';
import Question from '../Components/Question';
import Map from '../Components/Map/Map';
import SmallButton from '../Components/SmallButton/SmallButton';
import '../Styles/index.css';

const Game = () => {
    return (
      <div>

        <div className="smallButtonWrapper">
         <SmallButton smButName="?"/>
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
    );
  };
  
  export default Game;
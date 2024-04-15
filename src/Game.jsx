import Container from './Container';
import Heading from './Heading';
import Question from './Question';
import Map from './Map';
import './index.css';

const Game = () => {
    return (
      <div>
        <Container />
        <Container />
        <Container />
        <Container />
        <Heading />
        <Question />
        <Map />
      </div>
    );
  };
  
  export default Game;
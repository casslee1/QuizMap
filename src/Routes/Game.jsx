import Container from '../Components/Container';
import Heading from '../Components/Heading';
import Question from '../Components/Question';
import Map from '../Components/Map';
import Button from '../Components/Button/Button';
import '../Styles/index.css';

const Game = () => {
    return (
      <div>
        <Button />
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
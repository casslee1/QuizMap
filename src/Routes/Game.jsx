import Container from '../Components/Container';
import Heading from '../Components/Heading';
import Question from '../Components/Question';
import Map from '../Components/Map';
import Button from '../Components/Button/Button';
import '../Styles/index.css';

const Game = () => {
    return (
      <div>
        <Button name="?"/>
        <Container boxNum="1"/>
        <Container boxNum="2"/>
        <Container boxNum="3"/>
        <Container boxNum="4"/>
        <Heading />
        <Question question="Foo?"/>
        <Map />
      </div>
    );
  };
  
  export default Game;
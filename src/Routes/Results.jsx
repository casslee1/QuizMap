import "../Styles/index.css"
import Button from '../Components/Button/Button';


const Results = () => {
    return (
      <div>

        <div className='background'>

        <div className="smallButtonWrapper">
          <Button name="X" buttonStyle="smallButton" whereTo="/game"/>
        </div>

        <div>
          <h2>The Results</h2>
          <p>say something about the results</p>
        </div>

        </div>

      </div>
    );
  };
  
  export default Results;
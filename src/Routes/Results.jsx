import "../Styles/index.css"
import Button from '../Components/Button/Button';
import { useNavigate } from "react-router-dom";


const Results = () => {

  const navigate = useNavigate()

    return (
      <div>

        <div className='background'>

          <div className="smallButtonWrapper">
            <Button name="X" buttonStyle="smallButton" handleClick={()=>{navigate("/game")}}/>
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
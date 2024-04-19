/*import { Link } from "react-router-dom";*/
import Title from "../Components/Title";
import Description from "../Components/Description";
import Button from "../Components/Button/Button";
import "../Styles/index.css"

const App = () => {
  return (
    <div>

      <div className="appWrapper">
        <div>
        <Title />
        </div>
        <div>
        <Description />
        </div>
        <div>
        <Button name="Play" />
        </div>
      </div>

    </div>
  );
};

export default App;


  /*<nav>
        <ul>
          <li>
          <Link to="game">game page</Link>
          </li>
          <li>
          <Link to="about">about page</Link>
          </li>
          <li>
          <Link to="results">results page</Link>
          </li>
        </ul>
  </nav>*/
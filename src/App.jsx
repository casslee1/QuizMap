import { Link } from "react-router-dom";
import Title from "./Title";
import Description from "./Description";
import Button from "./Button";

const App = () => {
  return (
    <div>
      <Title />
      <Description />
      <Button />
      <nav>
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
      </nav>
    </div>
  );
};

export default App;

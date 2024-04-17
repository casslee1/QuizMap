import { Link } from "react-router-dom";
import Title from "../Components/Title";
import Description from "../Components/Description";
import Button from "../Components/Button/Button";

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

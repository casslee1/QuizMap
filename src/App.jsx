import { Link } from "react-router-dom";
import Title from "./Title";

const App = () => {
  return (
    <div>
      <Title />
      <p>Here are some examples of links to other pages</p>
      <nav>
        <ul>
          <li>
            <Link to="test">test page</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default App;

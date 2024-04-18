import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
/*import './Button.module.css';*/

/*function Button(props) {
    return (
    <button>{props.name}</button>
    );
}

Button.propTypes = {
    name: PropTypes.string
  };

export default Button;*/

function Button(props) {
    const navigate = useNavigate();
  
    const handleClick = () => {
      navigate('/game');
    };

    return (
      <button onClick={handleClick}>{props.name}</button>
    );
  }

  Button.propTypes = {
    name: PropTypes.string,
  };

  export default Button;
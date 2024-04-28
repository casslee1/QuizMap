import PropTypes from 'prop-types';
import styles from './button.module.css';
import { useNavigate } from "react-router-dom";


function Button(props) {

const navigate = useNavigate()

const handleClick=()=>{
  navigate(props.whereTo);
}

return (
      <button onClick={() => handleClick()} className={styles[props.buttonStyle]}>{props.name}</button>
    );
  }

Button.propTypes = {
    name: PropTypes.string,
    buttonStyle: PropTypes.string,
    whereTo: PropTypes.string  
  };

  export default Button;

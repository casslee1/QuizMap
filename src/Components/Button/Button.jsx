import PropTypes from 'prop-types';
import styles from './button.module.css';


function Button(props) {
  return (
    <button onClick={props.handleClick} className={styles[props.buttonStyle]}>{props.name}</button>
  );
}

Button.propTypes = {
  name: PropTypes.string,
  buttonStyle: PropTypes.string,
  handleClick: PropTypes.func
};

export default Button;

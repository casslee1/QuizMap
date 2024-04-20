import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import styles from './button.module.css'

function Button(props) {
    const navigate = useNavigate();
  
    const handleClick = () => {
      navigate('/game');
    };

    return (
      <button className={styles.playButton} onClick={handleClick}>{props.name}</button>
    );
  }

  Button.propTypes = {
    name: PropTypes.string,
  };

  export default Button;


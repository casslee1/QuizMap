import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import styles from './smallButton.module.css'

function SmallButton(props) {
    const navigate = useNavigate();
  
    const handleClick = () => {
      navigate('/game');
    };

    return (
      <button className={styles.smallButton} onClick={handleClick}>{props.smButName}</button>
    );
  }

  SmallButton.propTypes = {
    smButName: PropTypes.string,
  };

  export default SmallButton;
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import styles from './smallButton.module.css'

function SmallButton(props) {
   
  
    const handleClick = () => {
      props.onClick();
    };

    return (
      <button className={styles.smallButton} onClick={handleClick}>{props.smButName}</button>
    );
  }

  SmallButton.propTypes = {
    smButName: PropTypes.string,
    onClick: PropTypes.func
  };

  export default SmallButton;
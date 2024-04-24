import PropTypes from 'prop-types';
import styles from './button.module.css'

function Button(props) {
      
    const handleClick = () => {
      
    };

    return (
      <button className={styles.playButton} onClick={handleClick}>{props.name}</button>
    );
  }

  Button.propTypes = {
    name: PropTypes.string,
    onClick: PropTypes.func
  };

  export default Button;


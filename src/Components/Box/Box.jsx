import styles from './box.module.css';
import PropTypes from 'prop-types';

function Box(props) {
  return (
    <div className={styles.boxes}> <p>{props.boxNum}</p> </div>
  );
}

Box.propTypes = {
  boxNum: PropTypes.string,
  boxStyle: PropTypes.string
};

export default Box;

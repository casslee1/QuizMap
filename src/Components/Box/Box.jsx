import styles from './box.module.css';
import PropTypes from 'prop-types';

const Box = ({boxNum, isAnswered}) => {
  return (
    <div className={`${styles.box} ${isAnswered ? styles.answered : ''}`}> {boxNum} </div>
  );
}

Box.propTypes = {
  boxNum: PropTypes.number,
  isAnswered: PropTypes.bool,
};

Box.defaultProps = {
  isAnswered: false,
};

export default Box;


/*import styles from './box.module.css';
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
*/

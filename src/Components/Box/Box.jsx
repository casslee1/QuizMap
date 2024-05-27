import styles from './box.module.css';
import PropTypes from 'prop-types';

const Box = ({boxNum, isAnswered, gaveUp}) => {

  let className = styles.box;
  if (isAnswered){
    className += ` ${styles.answered}`;
  }
  else if (gaveUp){
    className += ` ${styles.giveup}`;
  }
  
  return (
    <div className={className}>{boxNum}</div>
  );
  
}

Box.propTypes = {
  boxNum: PropTypes.number,
  isAnswered: PropTypes.bool,
  gaveUp: PropTypes.bool,
};

Box.defaultProps = {
  isAnswered: false,
  gaveUp: false,
 };

export default Box;


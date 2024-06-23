import styles from './box.module.css';
import PropTypes from 'prop-types';

const Box = ({boxNum, isAnswered, gaveUp, boxImage}) => {

  let className = styles.box;
  let boxContent = boxNum;

  if (isAnswered){
    className += ` ${styles.answered}`;
    boxContent = <img src={boxImage}></img>;
  }
  else if (gaveUp){
    className += ` ${styles.giveup}`;
    boxContent = <img src={boxImage}></img>;
  }
  
  return (
    <div className={className}>{boxContent}</div>
  );
  
}

Box.propTypes = {
  boxNum: PropTypes.number,
  isAnswered: PropTypes.bool,
  gaveUp: PropTypes.bool,
  boxImage: PropTypes.string
};

Box.defaultProps = {
  isAnswered: false,
  gaveUp: false,
 };

export default Box;


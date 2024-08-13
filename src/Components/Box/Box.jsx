import styles from './box.module.css';
import PropTypes from 'prop-types';
import { adjustPath } from "../../Classes/util";

const Box = ({boxNum, isAnswered, gaveUp, boxImage, currentBox}) => {

  let className = styles.box;
  let boxContent = boxNum;

  if (isAnswered){
    className += ` ${styles.answered}`;
    boxContent = <img src={adjustPath(boxImage)}></img>;
  }
  else if (gaveUp){
    className += ` ${styles.giveup}`;
    boxContent = <img src={adjustPath(boxImage)}></img>;
  }
  else if (currentBox === boxNum){
    className += ` ${styles.selected}`;
  }
  
  return (
    <div className={className}>{boxContent}</div>
  );
  
}

Box.propTypes = {
  boxNum: PropTypes.number,
  isAnswered: PropTypes.bool,
  gaveUp: PropTypes.bool,
  boxImage: PropTypes.string,
  currentBox: PropTypes.number
};

Box.defaultProps = {
  isAnswered: false,
  gaveUp: false,
 };

export default Box;


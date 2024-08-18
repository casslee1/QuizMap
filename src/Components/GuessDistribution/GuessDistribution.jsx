
import PropTypes from 'prop-types';
import styles from './guessDistribution.module.css'

function GuessDistribution(props) {
  const barWidthZero = (props.daysOfZeroScore === 0) ? "4" : Math.floor((props.daysOfZeroScore / props.timesPlayed) * 80) + 8;
  const barWidthOne = (props.daysOfOneScore === 0) ? "4" : Math.floor((props.daysOfOneScore / props.timesPlayed) * 80) + 8;
  const barWidthTwo = (props.daysOfTwoScore === 0) ? "4" : Math.floor((props.daysOfTwoScore / props.timesPlayed) * 80) + 8;
  const barWidthThree = (props.daysOfThreeScore === 0) ? "4" : Math.floor((props.daysOfThreeScore / props.timesPlayed) * 80) + 8;
  const barWidthFour = (props.daysOfFourScore === 0) ? "4" : Math.floor((props.daysOfFourScore / props.timesPlayed) * 80) + 8;
  
  return <div>
    
    <div className={styles.scores}>0</div>
    <div className={styles.bars} style={{width: `${barWidthZero}%`}}>
        {props.daysOfZeroScore}
    </div>

    <div className={styles.scores}>1</div>
    <div className={styles.bars} style={{width: `${barWidthOne}%`}}>
        {props.daysOfOneScore}
    </div>

    <div className={styles.scores}>2</div>
    <div className={styles.bars} style={{width: `${barWidthTwo}%`}}>
        {props.daysOfTwoScore}
    </div>

    <div className={styles.scores}>3</div>
    <div className={styles.bars} style={{width: `${barWidthThree}%`}}>
        {props.daysOfThreeScore}
    </div>

    <div className={styles.scores}>4</div>
    <div className={styles.bars} style={{width: `${barWidthFour}%`}}>
        {props.daysOfFourScore}
    </div>

  </div>;
}

GuessDistribution.propTypes = {
  daysOfZeroScore: PropTypes.number,
  daysOfOneScore: PropTypes.number,
  daysOfTwoScore: PropTypes.number,
  daysOfThreeScore: PropTypes.number,
  daysOfFourScore: PropTypes.number,
  timesPlayed: PropTypes.number
};

export default GuessDistribution;
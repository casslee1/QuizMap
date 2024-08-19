
import PropTypes from 'prop-types';
import styles from './guessDistribution.module.css'

function GuessDistribution(props) {
  const barWidthZero = (props.daysOfZeroScore === 0) ? "6" : Math.floor((props.daysOfZeroScore / props.timesPlayed) * 80) + 6;
  const barWidthOne = (props.daysOfOneScore === 0) ? "6" : Math.floor((props.daysOfOneScore / props.timesPlayed) * 80) + 6;
  const barWidthTwo = (props.daysOfTwoScore === 0) ? "6" : Math.floor((props.daysOfTwoScore / props.timesPlayed) * 80) + 6;
  const barWidthThree = (props.daysOfThreeScore === 0) ? "6" : Math.floor((props.daysOfThreeScore / props.timesPlayed) * 80) + 6;
  const barWidthFour = (props.daysOfFourScore === 0) ? "6" : Math.floor((props.daysOfFourScore / props.timesPlayed) * 80) + 6;
  
  return <div>
    
    <div className={styles.barWrapper}>
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
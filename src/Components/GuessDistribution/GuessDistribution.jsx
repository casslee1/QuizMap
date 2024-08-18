
import PropTypes from 'prop-types';
import styles from './guessDistribution.module.css'

function GuessDistribution(props) {
  const barWidthZero = Math.floor((props.daysOfZeroScore / props.timesPlayed) * 80) + 8;
  
  
  return <div></div>;
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
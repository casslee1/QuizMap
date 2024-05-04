import styles from './questionsAndMap.module.css';
import PropTypes from 'prop-types';

function QuestionsAndMap(props) {

  
      
    return (
    <div>

    <p>{props.questionDisplay}</p>

    <div className={styles.map}> <p>The Map</p> </div>
    
    </div>
    );
    
}

QuestionsAndMap.propTypes = {
    questionDisplay: PropTypes.func
}

export default QuestionsAndMap;


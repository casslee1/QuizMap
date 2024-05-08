import styles from './questionAndMap.module.css';
import PropTypes from 'prop-types';

function QuestionAndMap(props) {

  
      
    return (
    <div>

    <p>{props.questionDisplay}</p>

    <div className={styles.map}> <p>The Map</p> </div>
    
    </div>
    );
    
}

QuestionAndMap.propTypes = {
    questionDisplay: PropTypes.func
}

export default QuestionAndMap;


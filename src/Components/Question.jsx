/*import PropTypes from 'prop-types';*/



/*function Question(props) {
    return (
    <p>{props.question}</p>
    );
}

Question.propTypes = {
    question: PropTypes.string
};

export default Question;*/

function Question() {

    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDate = new Date();
    const dayOfWeek = currentDate.getDay();
    const day = weekdays[dayOfWeek];
      
    return (
    <p>{day}</p>
    );
}


export default Question;
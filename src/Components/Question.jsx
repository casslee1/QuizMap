import PropTypes from 'prop-types';

function Question(props) {
    return (
    <p>{props.question}</p>
    );
}

Question.propTypes = {
    question: PropTypes.string
};

export default Question;
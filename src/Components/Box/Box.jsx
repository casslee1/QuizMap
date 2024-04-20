import '../../Styles/index.css'
import PropTypes from 'prop-types';

function Box(props) {
    return (
    <div className="box"> <p>{props.boxNum}</p> </div>
    );
}

Box.propTypes = {
    boxNum: PropTypes.string
  };

export default Box;
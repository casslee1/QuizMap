import '../Styles/index.css';
import PropTypes from 'prop-types';

function Container(props) {
    return (
    <div className="container"> <p>{props.boxNum}</p> </div>
    );
}

Container.propTypes = {
    boxNum: PropTypes.string
  };

export default Container;
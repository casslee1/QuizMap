import PropTypes from 'prop-types';
import styles from './button.module.css'

function Button(props) {
      
   /* const handleClick = () => {
      
    };*/



    return (
      <button className={styles[props.buttonStyle]}>{props.name}</button>
    );
  }

  Button.propTypes = {
    name: PropTypes.string,
    /*onClick: PropTypes.func,*/
    buttonStyle: PropTypes.string
       
  };

  export default Button;

/*onClick={handleClick}*/
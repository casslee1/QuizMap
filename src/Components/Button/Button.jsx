import PropTypes from 'prop-types';
import styles from './button.module.css';
import { Link } from "react-router-dom";


function Button(props) {

    return (
      <Link to={props.whereTo}><button className={styles[props.buttonStyle]}>{props.name}</button></Link>
    );
  }

  Button.propTypes = {
    name: PropTypes.string,
    
    buttonStyle: PropTypes.string,
    whereTo: PropTypes.string  
  };

  export default Button;



/*function Button(props) {
      
    const handleClick = () => {
       
     };
 
 
 
     return (
       <Link to={props.whereTo}><button className={styles[props.buttonStyle]}>{props.name}</button></Link>
     );
   }
 
   Button.propTypes = {
     name: PropTypes.string,
     onClick: PropTypes.func,
     buttonStyle: PropTypes.string,
     whereTo: PropTypes.string  
   };
 
   export default Button;
 
 onClick={handleClick}*/
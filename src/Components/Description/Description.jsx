import PropTypes from 'prop-types';
import styles from './description.module.css'

function Description(props) {
  return <div className={styles.descFormat}><p className={styles.robotoRegular}>{props.descText}</p></div>;
}

Description.propTypes = {
  descText: PropTypes.string,
};

export default Description;
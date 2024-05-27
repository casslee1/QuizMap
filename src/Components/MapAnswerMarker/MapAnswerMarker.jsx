import PropTypes from 'prop-types';
import { Marker, Popup} from "react-leaflet";
import { useCurrentZoomLevel } from '../../Hooks/useCurrentZoomLevel';
import Button from '../Button/Button';
import styles from './mapAnswerMarker.module.css';

function MapAnswerMarker(props){
  const zoom = useCurrentZoomLevel();
  
  return zoom >= 4 ? 
    (<Marker position={[props.answerInfo.lat, props.answerInfo.lon]}>
      <Popup className={styles.mapPopup}>
        <Button name={props.answerInfo.answerText} buttonStyle="playButton" handleClick={()=>props.onAnswerClick()}/>
      </Popup>
    </Marker>)
    : null;
}

MapAnswerMarker.propTypes = {
  answerInfo: PropTypes.object,
  onAnswerClick: PropTypes.func
}
  
export default MapAnswerMarker;



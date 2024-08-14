import PropTypes from 'prop-types';
import { Marker, Popup} from "react-leaflet";
import { useCurrentZoomLevel } from '../../Hooks/useCurrentZoomLevel';
import Button from '../Button/Button';
import styles from './mapAnswerMarker.module.css';
import L from 'leaflet';
import { adjustPath } from "../../Classes/util";

function MapAnswerMarker(props){
  const zoom = useCurrentZoomLevel();

  let myIcon = L.icon({
    iconUrl: (adjustPath('/Images/marker-icon-2x.png')),
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [0, -41],
    shadowUrl: (adjustPath('/Images/marker-shadow.png')),
    shadowSize: [41, 41],
    shadowAnchor: [12, 41]
});
  
  return zoom >= 13 || props.givenUp === true || props.answered === true ? 
    (<Marker icon={myIcon} position={[props.answerInfo.lat, props.answerInfo.lon]}  ref={props.markerRef}>
      <Popup className={styles.mapPopup}>
        <Button name={props.answerInfo.answerText} buttonStyle="answerButton" handleClick={()=>props.onAnswerClick()}/>
      </Popup>
    </Marker>)
    : null;
}

MapAnswerMarker.propTypes = {
  answerInfo: PropTypes.object,
  onAnswerClick: PropTypes.func,
  markerRef: PropTypes.object,
  givenUp: PropTypes.bool,
  answered: PropTypes.bool
}
  
export default MapAnswerMarker;



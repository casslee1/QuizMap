import PropTypes from 'prop-types';
import { Marker, Popup} from "react-leaflet";
import { useCurrentZoomLevel } from '../../Hooks/useCurrentZoomLevel';

function MapAnswerMarker(props){
   const zoom = useCurrentZoomLevel();
  
    return zoom >= 4 ? ( <Marker position={[props.currentLat, props.currentLon]}><Popup>{props.currentAnswer}</Popup></Marker>) : null;
  
  }

  MapAnswerMarker.propTypes = {
    currentLat: PropTypes.number,
    currentLon: PropTypes.number, 
    currentAnswer: PropTypes.string
  }
  
  export default MapAnswerMarker;


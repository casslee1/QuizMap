import PropTypes from 'prop-types';
import { Marker, Popup} from "react-leaflet";
import { useCurrentZoomLevel } from '../../Hooks/useCurrentZoomLevel';
/*import Button from "/src/Components/Button/Button.jsx";*/

function MapAnswerMarker(props){
   const zoom = useCurrentZoomLevel();
  
    return zoom >= 4 ? ( <Marker position={[props.answerInfo.lat, props.answerInfo.lon]} 
      eventHandlers={{
        click: () => {
          console.log('Marker clicked')
        },
      }}>
      <Popup>{props.answerInfo.answerText}</Popup></Marker>) : null;
    }

  MapAnswerMarker.propTypes = {
    answerInfo: PropTypes.object,
     }
  
  export default MapAnswerMarker;



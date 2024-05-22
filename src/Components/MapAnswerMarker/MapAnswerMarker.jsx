import PropTypes from 'prop-types';
import { useState} from "react";
import { Marker, Popup, useMapEvents} from "react-leaflet";

function MapAnswerMarker(props){
    const [zoom, setZoom] = useState(null);
  
    const zoomLevel = useMapEvents({
      zoomend(){
        setZoom(zoomLevel.getZoom());
        console.log("Zoom is" + zoomLevel.getZoom());
      },
    })
  
    return zoom >= 4 ? ( <Marker position={[props.questionInfo.lat, props.questionInfo.lon]}>
      <Popup>
        {props.questionInfo.answerText}
      </Popup>
    </Marker>) : null;
  
  }
  
  MapAnswerMarker.propTypes = {
    questionInfo: PropTypes.object
  }
  

  export default MapAnswerMarker;
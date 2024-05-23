import PropTypes from 'prop-types';
import { useState} from "react";
import { Marker, Popup, useMapEvents} from "react-leaflet";

function MapAnswerMarker(props){
    const [zoom, setZoom] = useState(null);
  
    const zoomLevel = useMapEvents({
      zoomend(){
        setZoom(zoomLevel.getZoom());
        console.log("Zoom is " + zoomLevel.getZoom());
      },
    })
  
    return zoom >= 4 ? ( <Marker position={[props.currentLat, props.currentLon]}><Popup>{props.currentAnswer}</Popup></Marker>) : null;
  
  }

  MapAnswerMarker.propTypes = {
    currentLat: PropTypes.number,
    currentLon: PropTypes.number, 
    currentAnswer: PropTypes.string
  }
  
  export default MapAnswerMarker;



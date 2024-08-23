import styles from './questionAndMap.module.css';
import PropTypes from 'prop-types';
import { useRef, useEffect} from "react";
import { MapContainer, TileLayer} from "react-leaflet";
import MapAnswerMarker from "../MapAnswerMarker/MapAnswerMarker";
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import L from "leaflet";


function QuestionAndMap(props) {
  const mapRef = useRef(null);
  const markerRef = useRef(null);
  const latitude = 20.505;
  const longitude = -0.09;
  const [currentZoom, setCurrentZoom] = useState(1);


  useEffect(() => {
    if(mapRef.current){
      mapRef.current.setZoom(1)
    }
  }, [props.questionInfo]);

  useEffect(() => {
    if (mapRef.current) {
      const map = mapRef.current;
      const southWest = L.latLng(-90, -180);
      const northEast = L.latLng(90, 180);
      const bounds = L.latLngBounds(southWest, northEast);
      map.setMaxBounds(bounds);
      map.options.maxBoundsViscosity = 1.0;
    }
  }, []); 

  useEffect(() => {
    if (props.givenUp === true || props.answered === true) {
      if (mapRef.current){
       mapRef.current.flyTo([props.questionInfo.lat, props.questionInfo.lon], 13);
       mapRef.current.once('zoomend', () => {
          if (markerRef.current) {
           markerRef.current.openPopup();
          }
        });
      }
    }
  }, [props.givenUp, props.answered, props.questionInfo, mapRef, markerRef]);
  

    let isMarkerVisible = "Current Zoom Level: Marker is not visible."
    let mapStyling = styles.map


    if (props.givenUp !== true && props.answered !== true) {
    if (currentZoom > 6 && currentZoom <13){
      isMarkerVisible = "Current Zoom Level: Zoom in more!"
    }
    else if(currentZoom >= 13) {
      isMarkerVisible = "Current Zoom Level: Marker is visible!";
      mapStyling = styles.zoomedInMap
     }
    } 
    else if (props.answered === true) {
      isMarkerVisible = "This question has been answered correctly!";
      mapStyling = styles.zoomedInMap;
    }
    else if (props.givenUp === true){
      isMarkerVisible = "This question has been given up on.";
      mapStyling = styles.givenUpMap;
    }


    return (
    <div>

      <div className={styles.currentZoomText}>{isMarkerVisible}</div>

      <div className={mapStyling}>
        <MapContainer
        
          center={[latitude, longitude]}
          zoom={1}
          minZoom={1}
          ref={mapRef}
          style={{height: "100%", width: "100%"}}>
         
          <TileLayer
            attribution='&copy; <a href="https://carto.com/">carto.com</a> contributors'
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png"
          />

          <MapAnswerMarker answerInfo={props.questionInfo} onAnswerClick={props.onAnswerClick} markerRef={markerRef} givenUp={props.givenUp} answered={props.answered} zoomLevelChanged={(zoom) => setCurrentZoom(zoom)}/>

        </MapContainer>

      </div>
     
    </div>
  );
    
}

QuestionAndMap.propTypes = {
    questionInfo: PropTypes.object,
    onAnswerClick: PropTypes.func,
    givenUp: PropTypes.bool,
    answered: PropTypes.bool
    

}

export default QuestionAndMap;







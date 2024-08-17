import styles from './questionAndMap.module.css';
import PropTypes from 'prop-types';
import { useRef, useEffect} from "react";
import { MapContainer, TileLayer} from "react-leaflet";
import MapAnswerMarker from "../MapAnswerMarker/MapAnswerMarker";
import "leaflet/dist/leaflet.css";
import { useState } from "react";


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
  


    if (mapRef.current){
      mapRef.current.on('zoomend', () => {
        const zoom = mapRef.current.getZoom();
        setCurrentZoom(zoom);
        console.log("2 Zoom is " + zoom);
      }
      )}

    let isMarkerVisible = "Marker is not visible"
    let mapStyling = styles.map

    if (currentZoom > 6 && currentZoom <13){
      isMarkerVisible = "Zoom in more!"
    }
    else if(currentZoom >= 13) {
      isMarkerVisible = "Marker is visible!";
      mapStyling = styles.zoomedInMap
     }

    return (
    <div>

    {/*<div className={styles.question}>
      <p>{props.questionInfo.questionText}</p>
    </div>*/}

      <div>Current Zoom Level: {isMarkerVisible}</div>

      <div className={mapStyling}>
        <MapContainer
        
          center={[latitude, longitude]}
          zoom={1}
          ref={mapRef}
          style={{height: "100%", width: "100%"}}>
         
          <TileLayer
            attribution='&copy; <a href="https://carto.com/">carto.com</a> contributors'
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png"
          />

          <MapAnswerMarker answerInfo={props.questionInfo} onAnswerClick={props.onAnswerClick} markerRef={markerRef} givenUp={props.givenUp} answered={props.answered}/>

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







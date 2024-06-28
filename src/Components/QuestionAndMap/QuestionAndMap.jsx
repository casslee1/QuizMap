import styles from './questionAndMap.module.css';
import PropTypes from 'prop-types';
import { useRef, useEffect} from "react";
import { MapContainer, TileLayer} from "react-leaflet";
import MapAnswerMarker from "../MapAnswerMarker/MapAnswerMarker";
import "leaflet/dist/leaflet.css";


function QuestionAndMap(props) {
  const mapRef = useRef(null);
  const markerRef = useRef(null);
  const latitude = 51.505;
  const longitude = -0.09;


  useEffect(() => {
    if(mapRef.current){
      mapRef.current.setZoom(0)
    }
  }, [props.questionInfo]);

  useEffect(() => {
    if (props.givenUp === true) {
      mapRef.current.flyTo([props.questionInfo.lat, props.questionInfo.lon], 13,),
      markerRef.current.openPopup()
    }
  }, [props.givenUp, props.questionInfo, mapRef, markerRef]);

  return (
    <div>

      <p>{props.questionInfo.questionText}</p>
    
      <div className={styles.map}>
        <MapContainer
        
          center={[latitude, longitude]}
          zoom={0}
          ref={mapRef}
          style={{height: "500px", width: "400px"}}>
         
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <MapAnswerMarker answerInfo={props.questionInfo} onAnswerClick={props.onAnswerClick} ref={markerRef}/>

        </MapContainer>

      </div>
     
    </div>
  );
    
}

QuestionAndMap.propTypes = {
    questionInfo: PropTypes.object,
    onAnswerClick: PropTypes.func,
    givenUp: PropTypes.bool
}

export default QuestionAndMap;







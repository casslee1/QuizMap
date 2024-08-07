import styles from './questionAndMap.module.css';
import PropTypes from 'prop-types';
import { useRef, useEffect} from "react";
import { MapContainer, TileLayer} from "react-leaflet";
import MapAnswerMarker from "../MapAnswerMarker/MapAnswerMarker";
import "leaflet/dist/leaflet.css";


function QuestionAndMap(props) {
  const mapRef = useRef(null);
  const markerRef = useRef(null);
  const latitude = 20.505;
  const longitude = -0.09;


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

   return (
    <div>

    {/*<div className={styles.question}>
      <p>{props.questionInfo.questionText}</p>
    </div>*/}

      <div className={styles.map}>
        <MapContainer
        
          center={[latitude, longitude]}
          zoom={0}
          ref={mapRef}
          style={{height: "450px", width: "375px"}}>
         
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







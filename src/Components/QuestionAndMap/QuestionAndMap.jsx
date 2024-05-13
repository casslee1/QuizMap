import styles from './questionAndMap.module.css';
import PropTypes from 'prop-types';
import { useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";



function QuestionAndMap(props) {
  const mapRef = useRef(null);
  const latitude = 51.505;
  const longitude = -0.09;
      
  return (
    <div>

      <p>{props.questionDisplay}</p>
    
      <div className={styles.map}>
        <MapContainer
          center={[latitude, longitude]}
          zoom={0}
          ref={mapRef}
          style={{height: "500px", width: "400px"}}
    >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={[props.latitude, props.longitude]}>
            <Popup>
              {props.answerDisplay}
              This is a test popup.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
     
    </div>
  );
    
}

QuestionAndMap.propTypes = {
    questionDisplay: PropTypes.string,
    answerDisplay: PropTypes.string,
    latitude: PropTypes.number,
    longitude: PropTypes.number
}

export default QuestionAndMap;




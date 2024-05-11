import styles from './questionAndMap.module.css';
import PropTypes from 'prop-types';
import { useRef } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
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
      {/* Additional map layers or components can be added here */}
    </MapContainer>
    </div>
     
    </div>
    );
    
}

QuestionAndMap.propTypes = {
    questionDisplay: PropTypes.string
}

export default QuestionAndMap;




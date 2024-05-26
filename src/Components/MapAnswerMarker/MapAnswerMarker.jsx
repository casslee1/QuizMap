import PropTypes from 'prop-types';
import { Marker, Popup} from "react-leaflet";
import { useCurrentZoomLevel } from '../../Hooks/useCurrentZoomLevel';
import Button from '../Button/Button';

function MapAnswerMarker(props){
   const zoom = useCurrentZoomLevel();
  
    return zoom >= 4 ? 
      (<Marker position={[props.answerInfo.lat, props.answerInfo.lon]}>
        <Popup>
          <Button name={props.answerInfo.answerText} buttonStyle="playButton" handleClick={()=>props.onAnswerClick()}/>
        </Popup>
      </Marker>)
      : null;
}

MapAnswerMarker.propTypes = {
  answerInfo: PropTypes.object,
  onAnswerClick: PropTypes.func
}
  
export default MapAnswerMarker;




  /*import PropTypes from 'prop-types';
import { Marker, Popup} from "react-leaflet";
import { useCurrentZoomLevel } from '../../Hooks/useCurrentZoomLevel';


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
  
  
     const [style, setStyle] = useState("light");
 
   const changeStyle = () => {
       setStyle("dark");
   };


        eventHandlers={{
        
        click: () => {
          changeStyle(), console.log (style)
       
        },

        
      }}
*/
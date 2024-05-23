import { useState } from "react";
import { useMapEvents } from "react-leaflet";

export function useCurrentZoomLevel() {
  const [zoom, setZoom] = useState(null);

  const zoomLevel = useMapEvents({
    zoomend() {
      setZoom(zoomLevel.getZoom());
      console.log("Zoom is " + zoomLevel.getZoom());
    },
  });

  return zoom;
}

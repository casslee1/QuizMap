import { useState } from "react";
import { useMapEvents } from "react-leaflet";

export function useCurrentZoomLevel(zoomLevelChanged) {
  const [zoom, setZoom] = useState(null);

  const zoomLevel = useMapEvents({
    zoomend() {
      setZoom(zoomLevel.getZoom());

      if (zoomLevelChanged) {
        zoomLevelChanged(zoomLevel.getZoom());
      }

      console.log("Zoom is " + zoomLevel.getZoom());
    },
  });

  return zoom;
}

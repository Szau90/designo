import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

const Map = () => {
  return (
    <MapContainer
      center={[-30.32411, 149.7834045]}
      zoom={16}
      zoomControl={false}
      scrollWheelZoom={true}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[-30.32411, 149.7834045]} draggable={true}>
        <Popup>Designo AU Office</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
